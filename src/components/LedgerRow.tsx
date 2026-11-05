import { useState } from "react";
import type { LedgerItem } from "../data";
import { ChevronDown } from "./Icons";

export function LedgerRow({ item }: { item: LedgerItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ledger-item">
      <button
        type="button"
        className="ledger-row"
        aria-expanded={open}
        aria-controls={`detail-${item.id}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="cell-date mono">{item.date}</span>
        <span className="cell-outcome">
          <span className="outcome">{item.outcome}</span>
          <span className="outcome-sub">
            <span className="inline-date mono">{item.date}</span>
            {item.proof}
          </span>
        </span>
        <span className="cell-earned mono">+${item.earned}</span>
        <ChevronDown className={open ? "chev open" : "chev"} />
      </button>
      <div className="collapse" id={`detail-${item.id}`} data-open={open}>
        <div>
          <div className="ledger-detail">
            <p className="detail-trail">{item.trail}</p>
            <p className="detail-meta mono">
              <span>{item.pr}</span>
              <span>{item.commit}</span>
              <span>{item.checks}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
