import {
  useEffect,
  useRef,
  useState,
  type AnimationEvent,
  type KeyboardEvent,
} from "react";

import { setFirstNightmareState } from "../lib/firstNightmare";
import { getApiKey, setApiKey } from "../lib/identity";
import { FirstNightmareRunes } from "./FirstNightmareRunes";
import { HiddenThreadMask } from "./HiddenThreadMask";
import { EyeIcon, EyeSlashIcon } from "./Icons";
import "../styles/hidden-thread-initiation.css";

export type FirstNightmareStep = 1 | 2 | 3 | 4;

interface FirstNightmareSetupProps {
  initialStep?: FirstNightmareStep;
  onComplete: () => void;
  onDefer: () => void;
  onKeyStored?: () => void;
  onRevealStart?: () => void;
  reviewMode?: boolean;
}

const APPRAISAL_TIERS = ["Good", "Exceptional", "Remarkable", "Glorious"] as const;
const FOCUSABLE_CONTROLS = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
].join(", ");

function prefersReducedMotion(): boolean {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

function setSurfaceInert(dialog: HTMLElement): () => void {
  const surface = dialog.closest(".spell-surface-lab");
  if (!surface) {
    return () => undefined;
  }

  const hiddenSiblings = Array.from(surface.children).filter((child) => {
    return child !== dialog;
  }) as HTMLElement[];
  const previousStates = hiddenSiblings.map((element) => ({
    ariaHidden: element.getAttribute("aria-hidden"),
    element,
    inert: element.inert,
  }));

  for (const element of hiddenSiblings) {
    element.inert = true;
    element.setAttribute("aria-hidden", "true");
  }

  return () => {
    for (const previousState of previousStates) {
      previousState.element.inert = previousState.inert;
      if (previousState.ariaHidden === null) {
        previousState.element.removeAttribute("aria-hidden");
      } else {
        previousState.element.setAttribute("aria-hidden", previousState.ariaHidden);
      }
    }
  };
}

function riteAct(step: FirstNightmareStep): string {
  if (step === 1) return "awakening";
  if (step === 2) return "initiation";
  if (step === 3) return "binding";
  return "appraisal";
}

export function FirstNightmareSetup({
  initialStep = 1,
  onComplete,
  onDefer,
  onKeyStored,
  onRevealStart,
  reviewMode = false,
}: FirstNightmareSetupProps) {
  const [step, setStep] = useState<FirstNightmareStep>(initialStep);
  const [apiKey, setApiKeyValue] = useState(getApiKey);
  const [showApiKey, setShowApiKey] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [appraisalIndex, setAppraisalIndex] = useState(0);
  const [previewOnly, setPreviewOnly] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(
    document.activeElement instanceof HTMLElement ? document.activeElement : null,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    const restoreSurface = setSurfaceInert(dialog);
    return () => {
      restoreSurface();
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.scrollTo?.({ behavior: "auto", top: 0 });
    const preferredControl = dialog?.querySelector<HTMLElement>(
      "[data-autofocus]",
    );
    preferredControl?.focus({ preventScroll: true });
  }, [appraisalIndex, step]);

  function deferSetup() {
    if (!reviewMode) {
      setFirstNightmareState("deferred");
    }
    onDefer();
  }

  function storeKey() {
    try {
      setApiKey(apiKey);
      setFirstNightmareState("completed");
      setStorageError(false);
      setPreviewOnly(false);
      setAppraisalIndex(prefersReducedMotion() ? APPRAISAL_TIERS.length - 1 : 0);
      onKeyStored?.();
      setStep(4);
    } catch {
      setStorageError(true);
    }
  }

  function previewAppraisal() {
    setStorageError(false);
    setPreviewOnly(true);
    setAppraisalIndex(prefersReducedMotion() ? APPRAISAL_TIERS.length - 1 : 0);
    setStep(4);
  }

  function beginReveal() {
    onRevealStart?.();
    if (prefersReducedMotion()) {
      onComplete();
      return;
    }
    setRevealing(true);
  }

  function finishReveal(event: AnimationEvent<HTMLElement>) {
    if (revealing && event.target === event.currentTarget) {
      onComplete();
    }
  }

  function advanceAppraisal() {
    setAppraisalIndex((current) => {
      return Math.min(current + 1, APPRAISAL_TIERS.length - 1);
    });
  }

  function keepFocusInside(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      deferSetup();
      return;
    }
    if (event.key !== "Tab" || !dialogRef.current) {
      return;
    }

    const controls = dialogRef.current.querySelectorAll<HTMLElement>(
      FOCUSABLE_CONTROLS,
    );
    const firstControl = controls[0];
    const lastControl = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === firstControl) {
      event.preventDefault();
      lastControl?.focus();
    }
    if (!event.shiftKey && document.activeElement === lastControl) {
      event.preventDefault();
      firstControl?.focus();
    }
  }

  const appraisal = APPRAISAL_TIERS[appraisalIndex];
  const announcement = step === 1
    ? "[The hidden thread has found you.]"
    : step === 2
      ? "[A buried knowledge answers.]"
      : step === 3
        ? "[Bind a voice to the hidden thread.]"
        : `[Appraisal: ${appraisal}.]`;
  const beadCount = Math.min(apiKey.length, 24);

  return (
    <section
      aria-label="First Nightmare setup"
      aria-modal="true"
      className={`hidden-thread-rite${revealing ? " is-revealing" : ""}`}
      data-rite-act={riteAct(step)}
      onAnimationEnd={finishReveal}
      onKeyDown={keepFocusInside}
      ref={dialogRef}
      role="dialog"
    >
      <div aria-hidden="true" className="hidden-thread-mantle hidden-thread-mantle-left" />
      <div aria-hidden="true" className="hidden-thread-mantle hidden-thread-mantle-right" />
      {step === 1 && <div aria-hidden="true" className="hidden-thread-axis" />}

      <header className="hidden-thread-progress">
        <span>First Nightmare</span>
        <small>{step} / 4</small>
      </header>

      <div className="hidden-thread-scene">
        {step === 1 && <HiddenThreadMask />}
        <FirstNightmareRunes announcement={announcement} eventKey={step} />

        <div className="hidden-thread-copy" key={step}>
          {step === 1 && (
            <>
              <h1>The Spell has found you</h1>
              <p>
                A thread has taken root in this browser. Before Weaver can read
                with you, there is one small trial.
              </p>
              <div className="hidden-thread-actions">
                <button data-autofocus onClick={() => setStep(2)} type="button">
                  <span>Enter the First Nightmare</span>
                </button>
                <button className="hidden-thread-secondary" onClick={deferSetup} type="button">
                  Enter later
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1>Bring your DeepSeek key</h1>
              <p>
                A DeepSeek API key is a private code that lets Weaver send your
                questions to DeepSeek and charge the model usage to your
                DeepSeek account.
              </p>
              <aside className="hidden-thread-privacy">
                Your key stays in this browser. Weaver sends it with each
                request and the server does not save it.
              </aside>
              <a href="https://platform.deepseek.com/" rel="noreferrer" target="_blank">
                Get a key from DeepSeek
                <span className="sr-only">, opens the DeepSeek Platform in a new tab</span>
              </a>
              <div className="hidden-thread-actions">
                <button data-autofocus onClick={() => setStep(3)} type="button">
                  <span>I have a key</span>
                </button>
                <div className="hidden-thread-quiet-actions">
                  <button onClick={() => setStep(1)} type="button">Back</button>
                  <button onClick={deferSetup} type="button">Enter later</button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                storeKey();
              }}
            >
              <h1>Bind a voice to the thread</h1>
              <label htmlFor="first-nightmare-api-key">Your DeepSeek API key</label>
              <div className="hidden-thread-key-channel">
                <input
                  autoCapitalize="none"
                  autoComplete="off"
                  data-autofocus
                  id="first-nightmare-api-key"
                  onChange={(event) => setApiKeyValue(event.target.value)}
                  placeholder="sk-..."
                  spellCheck={false}
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                />
                <button
                  aria-label={showApiKey ? "Hide API key" : "Show API key"}
                  className="hidden-thread-key-visibility"
                  onClick={() => setShowApiKey((visible) => !visible)}
                  type="button"
                >
                  {showApiKey ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
                <div aria-hidden="true" className="hidden-thread-binding-beads" data-testid="key-binding-beads">
                  {Array.from({ length: beadCount }, (_, index) => <span key={index} />)}
                </div>
              </div>
              <small>
                Stored only in this browser. You can replace or remove it later
                in Settings.
              </small>
              {storageError && (
                <p className="hidden-thread-error" role="alert">
                  The key could not be stored in this browser. Check browser
                  storage and try again.
                </p>
              )}
              <div className="hidden-thread-actions">
                <button disabled={apiKey.trim() === ""} type="submit">
                  <span>Store key and continue</span>
                </button>
                <div className="hidden-thread-quiet-actions">
                  <button onClick={() => setStep(2)} type="button">Back</button>
                  <button onClick={deferSetup} type="button">Enter later</button>
                </div>
                {reviewMode && (
                  <button
                    className="hidden-thread-review-action"
                    onClick={previewAppraisal}
                    type="button"
                  >
                    Preview without storing a key
                  </button>
                )}
              </div>
            </form>
          )}

          {step === 4 && (
            <>
              <div
                aria-hidden="true"
                className={`hidden-thread-sealed-knot${previewOnly ? " is-preview" : ""}`}
                data-testid="sealed-knot"
              >
                <span />
              </div>
              <div aria-label={`Appraisal: ${appraisal}`} className="hidden-thread-appraisal">
                <span
                  className={appraisal === "Glorious" ? "is-glorious" : ""}
                  key={appraisal}
                  onAnimationEnd={advanceAppraisal}
                >
                  {appraisal}
                </span>
              </div>
              {appraisal === "Glorious" && (
                <>
                  <h1>{previewOnly ? "The rite is complete" : "The voice is bound"}</h1>
                  {previewOnly ? (
                    <p>
                      Review complete. No key was stored and your current
                      binding remains unchanged.
                    </p>
                  ) : (
                    <p>
                      The key is stored in this browser. Weaver can now read,
                      reread, and answer through your DeepSeek account.
                    </p>
                  )}
                  <div className="hidden-thread-actions">
                    <button data-autofocus onClick={beginReveal} type="button">
                      <span>Enter Weaver</span>
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
