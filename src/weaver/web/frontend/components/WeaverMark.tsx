import maskImage from "../assets/hidden-thread-mask-mark.webp";

export interface WeaverMarkProps {
  className?: string;
  compact?: boolean;
}

export function WeaverMark({ className, compact = false }: WeaverMarkProps) {
  const markClassName = [
    "weaver-mark-icon",
    compact ? "weaver-mark-icon-compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      alt=""
      aria-hidden="true"
      className={markClassName}
      height={512}
      src={maskImage}
      width={512}
    />
  );
}
