import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import {
  getSpellRenderProfile,
  type SpellRenderProfile,
} from "../lib/spellRenderProfile";

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

const STAR_COLOR = new THREE.Color(0xc2c6d2);
const THREAD_COLOR = new THREE.Color(0xc8ccd6);
// 91 divine cores shining especially well among the myriad of stars:
// the Nightmare Spell was matured by Weaver using himself and his six
// siblings (7 daemons, 7 cores each = 49) and the six gods (6 x 7 = 42),
// every one a divine titan (owner direction 2026-08-08).
const DIVINE_COUNT = 91;
const DIVINE_FLARE_COUNT = 42;
const DIVINE_COLOR = new THREE.Color(0xe8c078);

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

// Divine cores breathe slowly instead of twinkling. Their point sprite uses a
// crisp centre and a restrained cross flare, so they read as distinct distant
// cores without raising their overall brightness.
const DIVINE_VERT = /* glsl */ `
  attribute float flare;
  attribute float phase;
  attribute float size;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vFlare;
  varying float vGlow;
  void main() {
    float breath = 0.78 + 0.22 * sin(uTime * 0.55 + phase * 6.2831);
    vFlare = flare;
    vGlow = breath;
    gl_PointSize = size * uPixelRatio;
    gl_Position = vec4(position.xy, 0.25, 1.0);
  }
`;

const DIVINE_FRAG = /* glsl */ `
  varying float vFlare;
  varying float vGlow;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float crispCore = 1.0 - smoothstep(0.035, 0.075, d);
    float definedEdge = (1.0 - smoothstep(0.075, 0.115, d)) * 0.22;
    float horizontalFlare = (1.0 - smoothstep(0.008, 0.024, abs(uv.y)))
      * (1.0 - smoothstep(0.035, 0.49, abs(uv.x)));
    float verticalFlare = (1.0 - smoothstep(0.008, 0.024, abs(uv.x)))
      * (1.0 - smoothstep(0.035, 0.43, abs(uv.y)));
    float subtleFlare = max(horizontalFlare, verticalFlare) * 0.22 * vFlare;
    float breath = 0.88 + 0.12 * vGlow;
    float alpha = min(0.78, (crispCore * 0.7 + definedEdge + subtleFlare) * breath);
    gl_FragColor = vec4(uColor, alpha);
  }
`;

function makeStars(starCount: number): {
  positions: Float32Array;
  phases: Float32Array;
  sizes: Float32Array;
} {
  const positions = new Float32Array(starCount * 3);
  const phases = new Float32Array(starCount);
  const sizes = new Float32Array(starCount);
  for (let i = 0; i < starCount; i++) {
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

interface DivineCorePoint {
  x: number;
  y: number;
}

function createStableRandom(): () => number {
  let state = 0x5f3759df;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function distanceOnViewport(
  left: DivineCorePoint,
  right: DivineCorePoint,
  aspectRatio: number,
): number {
  const horizontalDistance = (left.x - right.x) * aspectRatio;
  const verticalDistance = left.y - right.y;
  return horizontalDistance * horizontalDistance + verticalDistance * verticalDistance;
}

function createDivineCoreLayout(aspectRatio: number): DivineCorePoint[] {
  const random = createStableRandom();
  const points: DivineCorePoint[] = [];
  const candidateCount = 48;
  const margin = 0.025;

  for (let index = 0; index < DIVINE_COUNT; index++) {
    let bestCandidate: DivineCorePoint | null = null;
    let bestDistance = -1;

    for (let candidateIndex = 0; candidateIndex < candidateCount; candidateIndex++) {
      const candidate = {
        x: margin + random() * (1 - margin * 2),
        y: margin + random() * (1 - margin * 2),
      };
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const point of points) {
        const distance = distanceOnViewport(candidate, point, aspectRatio);
        closestDistance = Math.min(closestDistance, distance);
      }

      if (closestDistance > bestDistance) {
        bestCandidate = candidate;
        bestDistance = closestDistance;
      }
    }

    if (bestCandidate) {
      points.push(bestCandidate);
    }
  }

  return points;
}

function fillDivineCorePositions(
  positions: Float32Array,
  aspectRatio: number,
) {
  const points = createDivineCoreLayout(aspectRatio);
  for (let index = 0; index < points.length; index++) {
    const point = points[index];
    positions[index * 3] = -0.96 + point.x * 1.92;
    positions[index * 3 + 1] = -0.9 + point.y * 1.8;
    positions[index * 3 + 2] = 0;
  }
}

function makeDivineCores(aspectRatio: number): {
  flares: Float32Array;
  positions: Float32Array;
  phases: Float32Array;
  sizes: Float32Array;
} {
  const flares = new Float32Array(DIVINE_COUNT);
  const positions = new Float32Array(DIVINE_COUNT * 3);
  const phases = new Float32Array(DIVINE_COUNT);
  const sizes = new Float32Array(DIVINE_COUNT);

  for (let i = 0; i < DIVINE_COUNT; i++) {
    const hasFlare = i < DIVINE_FLARE_COUNT;
    flares[i] = hasFlare ? 1 : 0;
    phases[i] = i / DIVINE_COUNT;
    sizes[i] = hasFlare
      ? 32 + ((i * 29) % 7)
      : 12 + ((i * 17) % 4);
  }

  fillDivineCorePositions(positions, aspectRatio);
  return { flares, positions, phases, sizes };
}

export function StarWebScene(
  canvas: HTMLCanvasElement,
  mode: SpellBgMode,
  opts: {
    paused?: boolean;
    profile?: SpellRenderProfile;
    transparent?: boolean;
    threadAlpha?: number;
  } = {},
) {
  const initialWidth = canvas.clientWidth || window.innerWidth;
  const initialHeight = canvas.clientHeight || window.innerHeight;
  const profile = opts.profile ?? getSpellRenderProfile({
    devicePixelRatio: window.devicePixelRatio,
    height: initialHeight,
    reducedMotion: false,
    width: initialWidth,
  });
  const {
    paused = false,
    transparent = false,
    threadAlpha,
  } = opts;
  // jsdom (and some headless setups) have no WebGL; the background must
  // degrade to nothing instead of crashing the whole chat.
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      canvas,
      powerPreference: "high-performance",
    });
  } catch {
    return () => undefined;
  }
  renderer.setPixelRatio(profile.pixelRatio);
  const scene = new THREE.Scene();
  scene.background = transparent ? null : new THREE.Color(0x050508);
  const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 200);
  camera.position.set(0, 0, 6);
  camera.lookAt(0, 0, -10);

  const { positions, phases, sizes } = makeStars(profile.starCount);
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

  const divineCoreData = makeDivineCores(initialWidth / initialHeight);
  const dPos = divineCoreData.positions;
  const dGeo = new THREE.BufferGeometry();
  dGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
  dGeo.setAttribute("flare", new THREE.BufferAttribute(divineCoreData.flares, 1));
  dGeo.setAttribute("phase", new THREE.BufferAttribute(divineCoreData.phases, 1));
  dGeo.setAttribute("size", new THREE.BufferAttribute(divineCoreData.sizes, 1));
  const dMat = new THREE.ShaderMaterial({
    vertexShader: DIVINE_VERT,
    fragmentShader: DIVINE_FRAG,
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uColor: { value: DIVINE_COLOR },
    },
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });
  const divine = new THREE.Points(dGeo, dMat);
  scene.add(divine);

  // silver threads: connect stars within a radius, rebuilt on a timer
  const maxSegs = profile.maxThreadSegments;
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
          (mode === "alive" ? 0.55 : 0.24),
      },
    },
    transparent: true,
    depthWrite: false,
  });
  const threads = new THREE.LineSegments(lineGeo, threadMat);
  scene.add(threads);

  const threadRadius = mode === "alive" ? 4.8 : 5.2;
  const spatialBuckets = new Map<string, number[]>();

  function spatialKey(x: number, y: number, z: number): string {
    const cellX = Math.floor(x / threadRadius);
    const cellY = Math.floor(y / threadRadius);
    const cellZ = Math.floor(z / threadRadius);
    return `${cellX}:${cellY}:${cellZ}`;
  }

  for (let index = 0; index < profile.starCount; index++) {
    const x = positions[index * 3];
    const y = positions[index * 3 + 1];
    const z = positions[index * 3 + 2];
    const key = spatialKey(x, y, z);
    const bucket = spatialBuckets.get(key) ?? [];
    bucket.push(index);
    spatialBuckets.set(key, bucket);
  }

  function nearbyStarIndexes(starIndex: number): number[] {
    const x = positions[starIndex * 3];
    const y = positions[starIndex * 3 + 1];
    const z = positions[starIndex * 3 + 2];
    const cellX = Math.floor(x / threadRadius);
    const cellY = Math.floor(y / threadRadius);
    const cellZ = Math.floor(z / threadRadius);
    const nearbyIndexes: number[] = [];

    for (let offsetX = -1; offsetX <= 1; offsetX++) {
      for (let offsetY = -1; offsetY <= 1; offsetY++) {
        for (let offsetZ = -1; offsetZ <= 1; offsetZ++) {
          const key = `${cellX + offsetX}:${cellY + offsetY}:${cellZ + offsetZ}`;
          nearbyIndexes.push(...(spatialBuckets.get(key) ?? []));
        }
      }
    }

    return nearbyIndexes;
  }

  const buildNet = () => {
    const seen = new Set<string>();
    const segs: number[] = [];
    const uv: number[] = [];
    const ph: number[] = [];

    for (let i = 0; i < profile.starCount && segs.length < maxSegs * 6; i++) {
      const px = positions[i * 3];
      const py = positions[i * 3 + 1];
      const pz = positions[i * 3 + 2];
      const near: Array<[number, number]> = [];

      for (const j of nearbyStarIndexes(i)) {
        if (j === i) {
          continue;
        }
        const dx = positions[j * 3] - px;
        const dy = positions[j * 3 + 1] - py;
        const dz = positions[j * 3 + 2] - pz;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < threadRadius * threadRadius) {
          near.push([j, d2]);
        }
      }

      near.sort((a, b) => a[1] - b[1]);
      for (const [j] of near.slice(0, 5)) {
        if (segs.length >= maxSegs * 6) {
          break;
        }
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) {
          continue;
        }
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

  const refreshThreadPhases = () => {
    for (let index = 0; index < lineGeo.drawRange.count; index++) {
      segPhase[index] = Math.random();
    }
    (lineGeo.getAttribute("segPhase") as THREE.BufferAttribute).needsUpdate = true;
  };

  buildNet();

  const clock = new THREE.Clock();
  let netTimer = 0;
  let resizeFrame = 0;
  let lastDivineAspectRatio = initialWidth / initialHeight;

  const applyResize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    const nextAspectRatio = w / h;
    renderer.setSize(w, h, false);
    camera.aspect = nextAspectRatio;
    camera.updateProjectionMatrix();

    const aspectRatioChange = Math.abs(nextAspectRatio - lastDivineAspectRatio)
      / lastDivineAspectRatio;
    if (aspectRatioChange >= 0.08) {
      fillDivineCorePositions(dPos, nextAspectRatio);
      (dGeo.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
      lastDivineAspectRatio = nextAspectRatio;
    }
  };

  const scheduleResize = () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(applyResize);
  };

  applyResize();
  window.addEventListener("resize", scheduleResize);

  // The background must never follow the cursor (owner 2026-08-08): the
  // camera drifts on its own, slowly, so the web feels alive without
  // reacting to the mouse.
  let lastRender = 0;
  let inspectionRecorded = false;
  const renderFrame = () => {
    const t = clock.getElapsedTime();
    lastRender = t;
    starMat.uniforms.uTime.value = t;
    threadMat.uniforms.uTime.value = t;
    dMat.uniforms.uTime.value = t;
    if (mode === "alive" && profile.animated) {
      netTimer += 1 / 30;
      if (netTimer > 3.2) {
        netTimer = 0;
        refreshThreadPhases();
      }
    }
    renderer.render(scene, camera);

    if (!inspectionRecorded) {
      canvas.dataset.drawCalls = String(renderer.info.render.calls);
      canvas.dataset.pixelRatio = String(profile.pixelRatio);
      canvas.dataset.renderProfile = profile.name;
      canvas.dataset.starCount = String(profile.starCount);
      canvas.dataset.threadBudget = String(profile.maxThreadSegments);
      inspectionRecorded = true;
    }
  };

  const tick = () => {
    if (document.hidden || paused || canvas.dataset.paused === "true") {
      return;
    }

    const elapsed = clock.getElapsedTime();
    if (elapsed - lastRender >= 1 / 30) {
      renderFrame();
    }
  };

  renderFrame();
  if (profile.animated && !paused) {
    renderer.setAnimationLoop(tick);
  }

  return () => {
    renderer.setAnimationLoop(null);
    cancelAnimationFrame(resizeFrame);
    window.removeEventListener("resize", scheduleResize);
    starGeo.dispose();
    lineGeo.dispose();
    dGeo.dispose();
    starMat.dispose();
    threadMat.dispose();
    dMat.dispose();
    renderer.dispose();
  };
}

function currentRenderProfile(): SpellRenderProfile {
  return getSpellRenderProfile({
    devicePixelRatio: window.devicePixelRatio,
    height: window.innerHeight,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    width: window.innerWidth,
  });
}

export function SpellBackground({
  mode,
  paused = false,
  transparent = false,
  threadAlpha,
  className = "spell-bg",
}: {
  mode: SpellBgMode;
  paused?: boolean;
  transparent?: boolean;
  threadAlpha?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [profile, setProfile] = useState(currentRenderProfile);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateProfile = () => setProfile(currentRenderProfile());

    window.addEventListener("resize", updateProfile);
    reducedMotion.addEventListener("change", updateProfile);
    return () => {
      window.removeEventListener("resize", updateProfile);
      reducedMotion.removeEventListener("change", updateProfile);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.dataset.paused = String(paused);
    }
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dispose = StarWebScene(canvas, mode, {
      paused,
      profile,
      threadAlpha,
      transparent,
    });
    return dispose;
  }, [mode, paused, profile, transparent, threadAlpha]);

  return (
    <canvas
      aria-hidden="true"
      className={className}
      ref={canvasRef}
    />
  );
}
