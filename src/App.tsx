import { useState } from "react";
import { LedgerRow } from "./components/LedgerRow";
import { ChevronDown, Logo, Refresh } from "./components/Icons";
import { SignatureCard } from "./components/SignatureCard";
import { LEDGER, SIGNATURES, type SignedRecord, type SignatureItem } from "./data";

const TOTAL = LEDGER.reduce((sum, item) => sum + item.earned, 0);
const FIXES = LEDGER.length;

export default function App() {
  const [signed, setSigned] = useState<Record<string, SignedRecord>>({});
  const pending = SIGNATURES.length - Object.keys(signed).length;
  const settled = pending === 0;

  const sign = (item: SignatureItem, detail: string) => {
    const at = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setSigned((prev) => ({ ...prev, [item.id]: { at, result: detail } }));
  };

  return (
    <>
      <header className="topbar">
        <div className="topbar-in">
          <a className="brand" href="https://ziki.dev" target="_blank" rel="noreferrer">
            <Logo className="brand-mark" />
            <span>ziki</span>
          </a>
          <span className="crumb">Statement</span>
          <span className="topbar-right mono">PROJECT_ZEDU · WEEK 45</span>
        </div>
      </header>

      <main className="desk">
        <article className="paper" id="statement" data-settled={settled}>
          <div className="perf perf-top" aria-hidden="true" />

          <header className="paper-head">
            <div className="paper-title">
              <p className="doc-label mono">Statement of work</p>
              <p className="doc-no mono">No. 0042</p>
            </div>
            <div className="paper-dates mono">
              <p>01 — 07 Nov 2026</p>
              <p>project_zedu</p>
            </div>
          </header>

          <section className="summary">
            <h1>
              {FIXES} fixes shipped.
              <span>
                {settled
                  ? "Nothing needs your signature."
                  : `${pending} ${pending === 1 ? "needs" : "need"} your signature.`}
              </span>
            </h1>
            <p className="summary-sub">
              {settled
                ? "Stamped and out of your way. Next statement 12 Nov."
                : `0 regressions · $${TOTAL} earned · 2h 40m of review you didn't do.`}
            </p>
            {pending > 0 ? (
              <button
                type="button"
                className="jump"
                onClick={() => {
                  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                  document.getElementById("sig-title")?.scrollIntoView({
                    behavior: reduce ? "auto" : "smooth",
                    block: "start",
                  });
                }}
              >
                Sign below
                <ChevronDown />
              </button>
            ) : null}
            <p className="sr-only" aria-live="polite">
              {settled
                ? "All signatures complete. Statement settled."
                : `${pending} signature${pending === 1 ? "" : "s"} left.`}
            </p>
            {settled ? (
              <div className="settled" aria-hidden="true">
                <span>SETTLED</span>
                <em className="mono">05 NOV 2026</em>
              </div>
            ) : null}
          </section>

          <section className="ledger" aria-labelledby="ledger-title">
            <div className="section-label">
              <h2 id="ledger-title">Line items</h2>
              <span className="mono">{String(FIXES).padStart(2, "0")}</span>
            </div>
            <div className="ledger-head mono" aria-hidden="true">
              <span>Date</span>
              <span>Outcome</span>
              <span>USD</span>
              <span />
            </div>
            {LEDGER.map((item) => (
              <LedgerRow key={item.id} item={item} />
            ))}
            <div className="ledger-total">
              <span>Total earned</span>
              <span className="mono">${TOTAL}</span>
            </div>
          </section>

          <section className="signatures" aria-labelledby="sig-title">
            <div className="section-label">
              <h2 id="sig-title">Signature required</h2>
              <span className="mono">
                {String(SIGNATURES.length - pending).padStart(2, "0")} / 0{SIGNATURES.length}
              </span>
            </div>
            <p className="sig-instruction">
              {settled
                ? "All signed. Nothing else needs you until 12 Nov."
                : "Only a human can sign. Press and hold the seal for one second."}
            </p>
            <div className="sig-list">
              {SIGNATURES.map((item, index) => (
                <SignatureCard
                  key={item.id}
                  item={item}
                  index={index}
                  signed={signed[item.id]}
                  onSign={(detail) => sign(item, detail)}
                />
              ))}
            </div>
          </section>

          <footer className="paper-foot">
            <p>Generated by Ziki · merge and resolve stay human-gated.</p>
            <p className="mono">Page 1 of 1</p>
          </footer>

          <div className="perf perf-bottom" aria-hidden="true" />
        </article>

        <div className="desk-foot">
          <p>Prototype · hold any seal for 1 second · no live data</p>
          <button
            type="button"
            className="reset"
            onClick={() => {
              setSigned({});
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Refresh />
            Reset statement
          </button>
        </div>
      </main>
    </>
  );
}
