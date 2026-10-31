import {
  useEffect,
  useRef,
  useState,
  type AnimationEvent,
  type KeyboardEvent,
} from "react";

import { setFirstNightmareState } from "../lib/firstNightmare";
import { FirstNightmareRunes } from "./FirstNightmareRunes";
import { HiddenThreadMask } from "./HiddenThreadMask";
import { WeaverMark } from "./WeaverMark";
import "../styles/hidden-thread-initiation.css";

export type FirstNightmareStep = 1 | 2 | 3 | 4;

export type SharedAccessStatus =
  | "loading"
  | "development"
  | "available"
  | "exhausted"
  | "unconfigured"
  | "unavailable";

interface FirstNightmareSetupProps {
  initialStep?: FirstNightmareStep;
  onAcceptSponsored?: () => Promise<boolean>;
  onComplete: () => void;
  onDefer: () => void;
  onRevealStart?: () => void;
  onUseOwnKey?: () => void;
  preserveFirstRunState?: boolean;
  sharedStatus?: SharedAccessStatus;
  voiceBound?: boolean;
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

function riteAct(step: FirstNightmareStep): string {
  if (step === 1) return "awakening";
  if (step === 2) return "initiation";
  if (step === 3) return "binding";
  return "appraisal";
}

export function FirstNightmareSetup({
  initialStep = 1,
  onAcceptSponsored,
  onComplete,
  onDefer,
  onRevealStart,
  onUseOwnKey,
  preserveFirstRunState = false,
  sharedStatus = "available",
  voiceBound = false,
}: FirstNightmareSetupProps) {
  const [step, setStep] = useState<FirstNightmareStep>(initialStep);
  const [accepting, setAccepting] = useState(false);
  const [accessError, setAccessError] = useState(false);
  const [appraisalIndex, setAppraisalIndex] = useState(0);
  const [revealing, setRevealing] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(
    document.activeElement instanceof HTMLElement ? document.activeElement : null,
  );

  useEffect(() => {
    return () => {
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
    if (!preserveFirstRunState) {
      setFirstNightmareState("deferred");
    }
    onDefer();
  }

  function beginAppraisal() {
    setAppraisalIndex(prefersReducedMotion() ? APPRAISAL_TIERS.length - 1 : 0);
    setStep(4);
  }

  async function acceptSharedAllowance() {
    setAccepting(true);
    setAccessError(false);
    try {
      const accepted = await (onAcceptSponsored?.() ?? Promise.resolve(true));
      if (!accepted) {
        setAccessError(true);
        return;
      }
      setFirstNightmareState("completed");
      beginAppraisal();
    } catch {
      setAccessError(true);
    } finally {
      setAccepting(false);
    }
  }

  function useOwnKey() {
    if (!preserveFirstRunState) {
      setFirstNightmareState("deferred");
    }
    onUseOwnKey?.();
  }

  function continueWithOwnKey() {
    if (!voiceBound) {
      useOwnKey();
      return;
    }
    setFirstNightmareState("completed");
    beginAppraisal();
  }

  function continueInDevelopment() {
    setFirstNightmareState("completed");
    beginAppraisal();
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
  const appraisalComplete = appraisal === "Glorious";
  const announcement = step === 1
    ? "[The hidden thread has found you.]"
    : step === 2
      ? "[A buried knowledge answers.]"
      : step === 3
        ? "[The shared thread waits for your assent.]"
        : `[Appraisal: ${appraisal}.]`;

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
      <header className="hidden-thread-progress">
        <small>{step} / 4</small>
      </header>

      {/* The mask sits beside the scene, not inside it: inside, it could only
          blend with the scene's own empty layer, so its black ground showed
          as a darker column instead of melting into the void. */}
      <HiddenThreadMask />
      <div className="hidden-thread-scene">
        <FirstNightmareRunes announcement={announcement} eventKey={step} />

        <div className="hidden-thread-copy" key={step}>
          {step === 1 && (
            <>
              <h1>The Spell has found you</h1>
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
              <h1>The hidden thread can answer</h1>
              {sharedStatus === "available" && (
                <>
                  <p>
                    Weaver gives each reader three shared questions every day.
                    The allowance renews at 00:00 UTC and your conversations
                    remain here when it rests.
                  </p>
                  <aside className="hidden-thread-privacy">
                    The voice is paid for by the keeper of this Spell. You do
                    not need an API key to begin.
                  </aside>
                </>
              )}
              {sharedStatus === "loading" && (
                <p>
                  Checking the shared allowance. You can wait, use your own key,
                  or enter later.
                </p>
              )}
              {sharedStatus === "development" && (
                <p>
                  Fake mode is active. No shared allowance is used and no model
                  request is sent.
                </p>
              )}
              {sharedStatus === "exhausted" && (
                <p>
                  The shared allowance is resting until 00:00 UTC. Your
                  conversations remain here. Use your own key, or enter later.
                </p>
              )}
              {sharedStatus === "unconfigured" && (
                <p>
                  No shared allowance is configured on this server. Use your own
                  DeepSeek key to read, or enter later.
                </p>
              )}
              {sharedStatus === "unavailable" && (
                <p>
                  The shared allowance is unavailable right now. Use your own
                  key, or enter later.
                </p>
              )}
              <div className="hidden-thread-actions">
                {sharedStatus === "available" && (
                  <button data-autofocus onClick={() => setStep(3)} type="button">
                    <span>Continue with the shared allowance</span>
                  </button>
                )}
                {sharedStatus === "loading" && (
                  <button disabled type="button">
                    <span>Checking the shared allowance...</span>
                  </button>
                )}
                {sharedStatus === "development" && (
                  <button data-autofocus onClick={continueInDevelopment} type="button">
                    <span>Continue in fake mode</span>
                  </button>
                )}
                {(sharedStatus === "exhausted"
                  || sharedStatus === "unconfigured"
                  || sharedStatus === "unavailable") && (
                  <button data-autofocus onClick={continueWithOwnKey} type="button">
                    <span>
                      {voiceBound ? "Continue with your own key" : "Use my own key"}
                    </span>
                  </button>
                )}
                <div className="hidden-thread-quiet-actions">
                  <button onClick={() => setStep(1)} type="button">Back</button>
                  {(sharedStatus === "available" || sharedStatus === "loading") && (
                    <button
                      {...(sharedStatus === "loading" ? { "data-autofocus": true } : {})}
                      onClick={useOwnKey}
                      type="button"
                    >
                      Use my own key
                    </button>
                  )}
                  {sharedStatus !== "available" && (
                    <button onClick={deferSetup} type="button">Enter later</button>
                  )}
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1>Know what the thread carries</h1>
              <aside className="hidden-thread-privacy">
                Weaver sends your question and the story passages it opens to
                DeepSeek to generate a reply. DeepSeek may retain and process
                that content under its terms and privacy policy, including on
                servers in China. Do not include private or sensitive
                information. Weaver&apos;s replies are AI-generated and can be
                wrong, so use the chapter references to check the story.
              </aside>
              <p>
                <a href="https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html" rel="noreferrer" target="_blank">DeepSeek terms</a>
                {" · "}
                <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" rel="noreferrer" target="_blank">privacy policy</a>
              </p>
              {accessError && (
                <p className="hidden-thread-error" role="alert">
                  The shared thread could not be bound. You can try again or
                  continue with your own key.
                </p>
              )}
              <div className="hidden-thread-actions">
                <button
                  data-autofocus
                  disabled={accepting}
                  onClick={() => void acceptSharedAllowance()}
                  type="button"
                >
                  <span>{accepting ? "Binding the shared voice..." : "I understand. Bind the shared voice"}</span>
                </button>
                <div className="hidden-thread-quiet-actions">
                  <button onClick={() => setStep(2)} type="button">Back</button>
                  <button onClick={continueWithOwnKey} type="button">Use my own key</button>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div
                aria-hidden="true"
                className="hidden-thread-appraisal-mark"
                data-testid="appraisal-mask"
              >
                <WeaverMark compact />
              </div>
              <div aria-label={`Appraisal: ${appraisal}`} className="hidden-thread-appraisal">
                <span
                  className={appraisalComplete ? "is-glorious" : ""}
                  key={appraisal}
                  onAnimationEnd={advanceAppraisal}
                >
                  {appraisal}
                </span>
              </div>
              {appraisalComplete && (
                <>
                  <h1>The hidden thread listens</h1>
                  <p>
                    Weaver can now read, reread, and answer with you.
                  </p>
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
