interface FateWeavingLoaderProps {
  label?: string;
}

/**
 * Three gold cores on one quiet thread. This is the only gathering indicator
 * in the chat; the rune overlay no longer draws a second one.
 */
export function FateWeavingLoader({
  label = "Weaver is weaving an answer",
}: FateWeavingLoaderProps = {}) {
  return (
    <div aria-label={label} className="fate-weaving-loader" role="status">
      <svg aria-hidden="true" viewBox="0 0 132 28">
        <path
          className="fate-loader-thread"
          d="M4 19 C28 19, 40 12, 64 12 S100 17, 128 15"
          pathLength="1"
        />
        <circle className="fate-loader-core fate-loader-core-one" cx="28" cy="17" r="2.2" />
        <circle className="fate-loader-core fate-loader-core-two" cx="64" cy="12" r="2.8" />
        <circle className="fate-loader-core fate-loader-core-three" cx="102" cy="14" r="2.2" />
      </svg>
    </div>
  );
}
