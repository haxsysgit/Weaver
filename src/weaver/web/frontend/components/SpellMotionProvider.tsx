import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const loadSpellMotionFeatures = () =>
  import("../lib/spellMotionFeatures").then((module) => module.default);

export function SpellMotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadSpellMotionFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
