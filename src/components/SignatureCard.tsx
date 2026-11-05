import { useEffect, useRef, useState } from "react";
import { KIND_LABEL, type SignatureItem, type SignedRecord } from "../data";
import { Check } from "./Icons";
import { Seal } from "./Seal";

interface SignatureCardProps {
  item: SignatureItem;
  index: number;
  signed?: SignedRecord;
  onSign: (detail: string) => void;
}

export function SignatureCard({ item, index, signed, onSign }: SignatureCardProps) {
  const [alternative, setAlternative] = useState(false);
  const card = useRef<HTMLElement>(null);
  const answer = item.answer ? (alternative ? item.answer.alternative : item.answer.initial) : null;

  useEffect(() => {
    if (signed) card.current?.focus();
  }, [signed]);

  return (
    <article className="sig" data-signed={Boolean(signed)} tabIndex={-1} ref={card}>
      <span className="sig-index mono">{String(index + 1).padStart(2, "0")}</span>

      <div className="sig-copy">
        <p className="sig-kind mono">
          {KIND_LABEL[item.kind]} · {item.ref}
        </p>
        <h3 className="sig-title">{item.title}</h3>

        {answer && !signed ? (
          <p className="sig-answer">
            <span className="sig-answer-value">“{answer}”</span>
            <button type="button" className="linkish" onClick={() => setAlternative((value) => !value)}>
              Not this?
            </button>
          </p>
        ) : null}

        <p className="sig-meta">{item.meta}</p>

        {signed ? (
          <p className="sig-result">
            <Check className="result-icon" />
            {signed.result}
            <span className="mono">{signed.at}</span>
          </p>
        ) : null}
      </div>

      <div className="sig-action">
        {signed ? (
          <div className="stamp-wrap">
            <span className="stamp">SIGNED</span>
            <span className="stamp-time mono">{signed.at}</span>
          </div>
        ) : (
          <Seal
            label={item.title}
            onSign={() => onSign(answer ? `Answered: ${answer}` : item.result)}
          />
        )}
      </div>
    </article>
  );
}
