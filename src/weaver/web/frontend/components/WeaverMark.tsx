import { faSpider } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <FontAwesomeIcon
      aria-hidden="true"
      className={markClassName}
      icon={faSpider}
    />
  );
}
