interface FateWeavingLoaderProps {
  label?: string;
}

export function FateWeavingLoader({
  label = "Weaver is weaving an answer",
}: FateWeavingLoaderProps = {}) {
  return (
    <div
      aria-label={label}
      className="fate-weaving-loader"
      role="status"
    >
      <svg aria-hidden="true" viewBox="0 0 128 36">
        <path
          className="fate-loader-thread fate-loader-thread-one"
          d="M2 7 C30 7, 37 18, 64 18 S98 29, 126 29"
          pathLength="1"
        />
        <path
          className="fate-loader-thread fate-loader-thread-two"
          d="M2 29 C30 29, 37 18, 64 18 S98 7, 126 7"
          pathLength="1"
        />
        <path
          className="fate-loader-thread fate-loader-thread-three"
          d="M2 18 C32 18, 42 12, 64 18 S96 24, 126 18"
          pathLength="1"
        />
        <circle className="fate-loader-core fate-loader-core-one" cx="40" cy="15" r="1.7" />
        <circle className="fate-loader-core fate-loader-core-two" cx="64" cy="18" r="2.3" />
        <circle className="fate-loader-core fate-loader-core-three" cx="89" cy="21" r="1.7" />
      </svg>
    </div>
  );
}
