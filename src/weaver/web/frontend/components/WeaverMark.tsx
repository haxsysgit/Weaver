export interface WeaverMarkProps {
  className?: string;
  compact?: boolean;
}

export function WeaverMark({ className, compact = false }: WeaverMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 13 7 6l5 15M48 13l9-7-5 15"
        fill="none"
        opacity=".68"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M13 20c3-9 10-14 19-14s16 5 19 14l-4 25-15 13-15-13-4-25Z"
        fill="currentColor"
        opacity=".1"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M18 23c4-4 9-6 14-6s10 2 14 6l-3 17-11 10-11-10-3-17Z"
        fill="none"
        opacity=".72"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="m15 29 12 3-8 6m30-9-12 3 8 6M25 44l7 6 7-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <ellipse cx="32" cy="31" fill="var(--accent-crimson)" rx="4.5" ry="7" />
      <ellipse cx="32" cy="31" fill="var(--shadow-deep)" rx="1.5" ry="3.4" />
      {!compact && (
        <>
          <path d="M4 32h15M45 32h15M32 2v15M32 50v12" opacity=".25" stroke="currentColor" strokeWidth=".8" />
          <circle cx="32" cy="32" fill="none" opacity=".22" r="28" stroke="currentColor" strokeWidth=".8" />
        </>
      )}
    </svg>
  );
}
