import { useEffect, useRef, useState } from "react";

const HOLD_MS = 900;

interface SealProps {
  label: string;
  onSign: () => void;
}

export function Seal({ label, onSign }: SealProps) {
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const frame = useRef(0);
  const startedAt = useRef(0);
  const finished = useRef(false);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const step = (now: number) => {
    const value = Math.min(1, (now - startedAt.current) / HOLD_MS);
    setProgress(value);
    if (value >= 1) {
      finished.current = true;
      setHolding(false);
      setProgress(0);
      onSign();
      return;
    }
    frame.current = requestAnimationFrame(step);
  };

  const begin = () => {
    if (finished.current) return;
    startedAt.current = performance.now();
    setHolding(true);
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(step);
  };

  const stop = () => {
    if (finished.current) return;
    cancelAnimationFrame(frame.current);
    setHolding(false);
    setProgress(0);
  };

  const isKey = (key: string) => key === " " || key === "Enter";

  return (
    <div className="seal-wrap">
      <button
        type="button"
        className="seal"
        data-holding={holding}
        aria-label={`Hold to sign: ${label}`}
        onPointerDown={(event) => {
          event.preventDefault();
          begin();
        }}
        onPointerUp={stop}
        onPointerLeave={stop}
        onPointerCancel={stop}
        onKeyDown={(event) => {
          if (isKey(event.key) && !event.repeat) {
            event.preventDefault();
            begin();
          }
        }}
        onKeyUp={(event) => {
          if (isKey(event.key)) {
            event.preventDefault();
            stop();
          }
        }}
        onContextMenu={(event) => event.preventDefault()}
      >
        <span
          className="seal-ring"
          style={{ background: `conic-gradient(var(--blue) ${progress * 360}deg, var(--seal-track) 0deg)` }}
        />
        <span className="seal-face">
          <span className="seal-word">{holding ? "SIGNING" : "SIGN"}</span>
          <span className="seal-hint">{holding ? `${Math.round(progress * 100)}%` : "hold 1s"}</span>
        </span>
      </button>
      <span className="seal-caption">Hold to sign</span>
    </div>
  );
}
