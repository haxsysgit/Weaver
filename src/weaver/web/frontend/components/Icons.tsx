import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconFrame({ children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </IconFrame>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <rect height="12" rx="2" stroke="currentColor" strokeWidth="1.6" width="12" x="8" y="8" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </IconFrame>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </IconFrame>
  );
}

export function RegenerateIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M19 8a8 8 0 1 0 1 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <path d="M19 4v4h-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </IconFrame>
  );
}

export function StopIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <rect fill="currentColor" height="8" rx="1.4" width="8" x="8" y="8" />
    </IconFrame>
  );
}

export function ThreadIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M6 4c7 0 5 8 12 8M6 20c7 0 5-8 12-8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <circle cx="6" cy="4" fill="currentColor" r="1.5" />
      <circle cx="6" cy="20" fill="currentColor" r="1.5" />
      <circle cx="18" cy="12" fill="currentColor" r="1.5" />
    </IconFrame>
  );
}

interface FateThreadGateIconProps extends IconProps {
  open: boolean;
}

export function FateThreadGateIcon({
  className,
  open,
  ...props
}: FateThreadGateIconProps) {
  const directionClass = open
    ? "fate-thread-gate-icon-open"
    : "fate-thread-gate-icon-closed";
  const iconClassName = ["fate-thread-gate-icon", directionClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <IconFrame className={iconClassName} {...props}>
      <path
        className="fate-thread-gate-spine"
        d="M5 3.5v17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
      <path
        d="M8 5.5c5 0 3.5 5 9 6.5-5.5 1.5-4 6.5-9 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.35"
      />
      <circle className="fate-thread-gate-knot" cx="17" cy="12" r="2.15" />
      <path
        className="fate-thread-gate-eye"
        d="m14.5 9.5 2.5 2.5-2.5 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </IconFrame>
  );
}
