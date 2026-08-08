import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * The Nightmare Spell background: the space between dream and reality from
 * the end of Sunny's First Nightmare (ch15:5-7) —
 *   "an endless black void illuminated by a myriad of stars. Between those
 *   stars, countless strings of silver light were woven into a beautiful and
 *   inconceivably complex net, forming various nexuses and constellations."
 *
 * Two modes: subtle (twinkle + a fixed faint net) and alive (the net
 * re-weaves into new constellations every few seconds).
 */

export type SpellBgMode = "subtle" | "alive";

const STAR_COLOR = new THREE.Color(0xa8a8b8);
const THREAD_COLOR = new THREE.Color(0x8f93a8);
const STAR_COUNT = 4500;

const STAR_VERT = /* glsl */ `
  attribute float phase;
  attribute float size;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vTwinkle;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float tw = 0.55 + 0.45 * sin(uTime * (0.4 + phase * 1.6) + phase * 40.0);
    vTwinkle = tw * tw;
    gl_PointSize = size * uPixelRatio * (140.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const STAR_FRAG = /* glsl */ `
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`;

const THREAD_VERT = /* glsl */ `
  attribute float lineUV;
  attribute float segPhase;
  uniform float uTime;
  varying float vPulse;
  varying float vFade;
  void main() {
    vFade = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 0.25 + segPhase * 6.2831));
    vPulse = pow(max(0.0, sin(lineUV * 3.14159 - uTime * 1.2 + segPhase * 6.2831)), 6.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const THREAD_FRAG = /* glsl */ `
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`;

function makeStars(): {
  positions: Float32Array;
  phases: Float32Array;
  sizes: Float32Array;
} {
  const positions = new Float32Array(STAR_COUNT * 3);
  const phases = new Float32Array(STAR_COUNT);
  const sizes = new Float32Array(STAR_COUNT);
  for (let i = 0; i < STAR_COUNT; i++) {
    // a wide flat volume: the void stretches around the reader
    const r = 24 + Math.random() * 36;
    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.5) * 1.1;
    positions[i * 3] = r * Math.cos(theta) * Math.cos(phi);
    positions[i * 3 + 1] = r * Math.sin(phi) * 2.2; // taller than wide
    positions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi) - 18;
    phases[i] = Math.random();
    sizes[i] = 0.7 + Math.random() * 1.6;
  }
  return { positions, phases, sizes };
}

export function StarWebScene(
  canvas: HTMLCanvasElement,
  mode: SpellBgMode,
  opts: { transparent?: boolean; threadAlpha?: number } = {},
) {
  const { transparent = false, threadAlpha } = opts;
  // jsdom (and some headless setups) have no WebGL; the background must
  // degrade to nothing instead of crashing the whole chat.
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
  } catch {
    return () => undefined;
  }
  renderer.setPixelRatio(1); // cost: 4x pixels for a faint background is not worth it
  const scene = new THREE.Scene();
  scene.background = transparent ? null : new THREE.Color(0x050508);
  const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 200);
  camera.position.set(0, 0, 6);

  const { positions, phases, sizes } = makeStars();
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  starGeo.setAttribute("phase", new THREE.BufferAttribute(phases, 1));
  starGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
  const starMat = new THREE.ShaderMaterial({
    vertexShader: STAR_VERT,
    fragmentShader: STAR_FRAG,
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uColor: { value: STAR_COLOR },
    },
    transparent: true,
    depthWrite: false,
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // silver threads: connect stars within a radius, rebuilt on a timer
  const maxSegs = 2600;
  const lineGeo = new THREE.BufferGeometry();
  const threadPositions = new Float32Array(maxSegs * 6);
  const lineUV = new Float32Array(maxSegs * 2);
  const segPhase = new Float32Array(maxSegs * 2);
  lineGeo.setAttribute("position", new THREE.BufferAttribute(threadPositions, 3));
  lineGeo.setAttribute("lineUV", new THREE.BufferAttribute(lineUV, 1));
  lineGeo.setAttribute("segPhase", new THREE.BufferAttribute(segPhase, 1));
  lineGeo.setDrawRange(0, 0);
  const threadMat = new THREE.ShaderMaterial({
    vertexShader: THREAD_VERT,
    fragmentShader: THREAD_FRAG,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: THREAD_COLOR },
      uAlpha: {
        value:
          threadAlpha ??
          (mode === "alive" ? 0.5 : 0.16),
      },
    },
    transparent: true,
    depthWrite: false,
  });
  const threads = new THREE.LineSegments(lineGeo, threadMat);
  scene.add(threads);

  const setNet = (radius: number, force = false) => {
    if (mode === "subtle" && !force) return; // subtle keeps its net
    const seen = new Set<string>();
    const segs: number[] = [];
    const uv: number[] = [];
    const ph: number[] = [];
    for (let i = 0; i < STAR_COUNT && segs.length < maxSegs * 6; i++) {
      const px = positions[i * 3],
        py = positions[i * 3 + 1],
        pz = positions[i * 3 + 2];
      const near: Array<[number, number]> = [];
      for (let j = 0; j < STAR_COUNT; j++) {
        if (j === i) continue;
        const dx = positions[j * 3] - px;
        const dy = positions[j * 3 + 1] - py;
        const dz = positions[j * 3 + 2] - pz;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < radius * radius) near.push([j, d2]);
      }
      near.sort((a, b) => a[1] - b[1]);
      for (const [j] of near.slice(0, 3)) {
        if (segs.length >= maxSegs * 6) break;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) continue;
        seen.add(key);
        segs.push(px, py, pz, positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        uv.push(0, 1);
        ph.push(Math.random(), Math.random());
      }
    }
    threadPositions.set(segs);
    lineUV.set(uv);
    segPhase.set(ph);
    (lineGeo.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
    (lineGeo.getAttribute("lineUV") as THREE.BufferAttribute).needsUpdate = true;
    (lineGeo.getAttribute("segPhase") as THREE.BufferAttribute).needsUpdate = true;
    lineGeo.setDrawRange(0, segs.length / 3);
  };

  setNet(mode === "alive" ? 7.5 : 8.5, true);

  const clock = new THREE.Clock();
  let raf = 0;
  let netTimer = 0;
  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  // The background must never follow the cursor (owner 2026-08-08): the
  // camera drifts on its own, slowly, so the web feels alive without
  // reacting to the mouse.
  let lastRender = 0;
  const tick = (now: number) => {
    const t = clock.getElapsedTime();
    if (t - lastRender >= 1 / 30) {
      lastRender = t;
      starMat.uniforms.uTime.value = t;
      threadMat.uniforms.uTime.value = t;
      if (mode === "alive") {
        netTimer += 1 / 30;
        if (netTimer > 3.2) {
          netTimer = 0;
          setNet(7.5);
        }
      }
      camera.position.x = Math.sin(t * 0.05) * 0.7;
      camera.position.y = Math.cos(t * 0.04) * 0.5;
      camera.lookAt(0, 0, -10);
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    starGeo.dispose();
    lineGeo.dispose();
    starMat.dispose();
    threadMat.dispose();
    renderer.dispose();
  };
}

export function SpellBackground({
  mode,
  transparent = false,
  threadAlpha,
  className = "spell-bg",
}: {
  mode: SpellBgMode;
  transparent?: boolean;
  threadAlpha?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dispose = StarWebScene(canvas, mode, { transparent, threadAlpha });
    return dispose;
  }, [mode, transparent, threadAlpha]);

  return (
    <canvas
      aria-hidden="true"
      className={className}
      ref={canvasRef}
    />
  );
}
