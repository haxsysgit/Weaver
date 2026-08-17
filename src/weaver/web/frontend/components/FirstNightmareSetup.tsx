import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { setFirstNightmareState } from "../lib/firstNightmare";
import { getApiKey, setApiKey } from "../lib/identity";
import { FateWeavingLoader } from "./FateWeavingLoader";
import { FirstNightmareRunes } from "./FirstNightmareRunes";

export type FirstNightmareStep = 1 | 2 | 3 | 4;

interface FirstNightmareSetupProps {
  initialStep?: FirstNightmareStep;
  onComplete: () => void;
  onDefer: () => void;
  onKeyStored?: () => void;
}

const FOCUSABLE_CONTROLS = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
].join(", ");

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

export function FirstNightmareSetup({
  initialStep = 1,
  onComplete,
  onDefer,
  onKeyStored,
}: FirstNightmareSetupProps) {
  const [step, setStep] = useState<FirstNightmareStep>(initialStep);
  const [apiKey, setApiKeyValue] = useState(getApiKey);
  const [storageError, setStorageError] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(
    document.activeElement instanceof HTMLElement ? document.activeElement : null,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    const restoreSurface = setSurfaceInert(dialog.parentElement ?? dialog);
    return () => {
      restoreSurface();
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    const preferredControl = dialog?.querySelector<HTMLElement>("[data-autofocus]");
    preferredControl?.focus();
  }, [step]);

  function deferSetup() {
    setFirstNightmareState("deferred");
    onDefer();
  }

  function storeKey() {
    try {
      setApiKey(apiKey);
      setFirstNightmareState("completed");
      setStorageError(false);
      onKeyStored?.();
      setStep(4);
    } catch {
      setStorageError(true);
    }
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

  const announcement = [
    "",
    "[The Nightmare Spell has found you.]",
    "[The trial has taken shape.]",
    "[Every Nightmare finds the vulnerable place.]",
    "[Your preparation has been appraised.]",
  ][step];

  return (
    <div className="first-nightmare-backdrop">
      <section
        aria-label="First Nightmare setup"
        aria-modal="true"
        className="first-nightmare-panel"
        onKeyDown={keepFocusInside}
        ref={dialogRef}
        role="dialog"
      >
        <header className="first-nightmare-head">
          <span>First Nightmare</span>
          <small>· {step} of 4</small>
        </header>

        <FirstNightmareRunes announcement={announcement} eventKey={step} />

        <div className="first-nightmare-content" key={step}>
          {step === 1 && (
            <>
              <h1>The Spell has found you</h1>
              <p>
                A thread has taken root in this browser. Before Weaver can read
                with you, there is one small trial.
              </p>
              <div className="first-nightmare-actions">
                <button
                  className="first-nightmare-primary"
                  data-autofocus
                  onClick={() => setStep(2)}
                  type="button"
                >
                  Enter the First Nightmare
                </button>
                <button onClick={deferSetup} type="button">Enter later</button>
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
              <aside className="first-nightmare-privacy">
                Your key stays in this browser. Weaver sends it with each
                request and the server does not save it.
              </aside>
              <a
                href="https://platform.deepseek.com/"
                rel="noreferrer"
                target="_blank"
              >
                Get a key from DeepSeek
                <span className="sr-only">, opens the DeepSeek Platform in a new tab</span>
              </a>
              <div className="first-nightmare-actions">
                <button
                  className="first-nightmare-primary"
                  data-autofocus
                  onClick={() => setStep(3)}
                  type="button"
                >
                  I have a key
                </button>
                <button onClick={() => setStep(1)} type="button">Back</button>
                <button onClick={deferSetup} type="button">Enter later</button>
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
              <h1>Face the trial</h1>
              <label htmlFor="first-nightmare-api-key">Your DeepSeek API key</label>
              <input
                autoCapitalize="none"
                autoComplete="off"
                data-autofocus
                id="first-nightmare-api-key"
                onChange={(event) => setApiKeyValue(event.target.value)}
                placeholder="sk-..."
                spellCheck={false}
                type="password"
                value={apiKey}
              />
              <small>
                Stored only in this browser. You can replace or remove it later
                in Settings.
              </small>
              {storageError && (
                <p className="first-nightmare-error" role="alert">
                  The key could not be stored in this browser. Check browser
                  storage and try again.
                </p>
              )}
              <div className="first-nightmare-actions">
                <button
                  className="first-nightmare-primary"
                  disabled={apiKey.trim() === ""}
                  type="submit"
                >
                  Store key and continue
                </button>
                <button onClick={() => setStep(2)} type="button">Back</button>
                <button onClick={deferSetup} type="button">Enter later</button>
              </div>
            </form>
          )}

          {step === 4 && (
            <>
              <div className="first-nightmare-weaving">
                <FateWeavingLoader label="Fate threads draw together" />
                <span>[Fate threads draw together.]</span>
              </div>
              <div aria-label="Appraisal: Glorious" className="first-nightmare-appraisal">
                <span>Good</span>
                <span>Exceptional</span>
                <span>Remarkable</span>
                <span>Glorious</span>
              </div>
              <h1>Your Aspect awakens</h1>
              <p>
                The key is stored in this browser. Weaver can now read, reread,
                and answer through your DeepSeek account.
              </p>
              <div className="first-nightmare-actions">
                <button
                  className="first-nightmare-primary"
                  data-autofocus
                  onClick={onComplete}
                  type="button"
                >
                  Enter Weaver
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
