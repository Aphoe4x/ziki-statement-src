export interface LedgerItem {
  id: string;
  ref: string;
  date: string;
  outcome: string;
  proof: string;
  earned: number;
  pr: string;
  commit: string;
  checks: string;
  trail: string;
}

export type SignatureKind = "approval" | "question" | "access";

export interface SignatureItem {
  id: string;
  ref: string;
  kind: SignatureKind;
  title: string;
  meta: string;
  result: string;
  answer?: {
    initial: string;
    alternative: string;
  };
}

export interface SignedRecord {
  at: string;
  result: string;
}

export const LEDGER: LedgerItem[] = [
  {
    id: "l-764",
    ref: "ZIK-764",
    date: "01 NOV",
    outcome: "99+ badge no longer overlaps at 320px",
    proof: "PR #27 · verified 2/2",
    earned: 150,
    pr: "zedu-mobile#27",
    commit: "3f2a9c1",
    checks: "14 checks green",
    trail: "Traced the 6px gap to scrollbar width, clamped the tab badge, tested on device.",
  },
  {
    id: "l-771",
    ref: "ZIK-771",
    date: "02 NOV",
    outcome: "Signup emails land in the inbox again",
    proof: "PR #411 · verified 2/2",
    earned: 90,
    pr: "zedu-api#411",
    commit: "8e1c7bb",
    checks: "12 checks green",
    trail: "Removed a stale reply-to header that pushed the spam score over the line.",
  },
  {
    id: "l-755",
    ref: "ZIK-755",
    date: "03 NOV",
    outcome: "Dashboard first paint: 4.8s → 1.2s",
    proof: "PR #226 · verified 2/2",
    earned: 180,
    pr: "zedu-web#226",
    commit: "1b90dd3",
    checks: "16 checks green",
    trail: "Found a blocking analytics call, moved it behind Suspense, measured on cold cache.",
  },
  {
    id: "l-742",
    ref: "ZIK-742",
    date: "04 NOV",
    outcome: "12 duplicate charges refunded",
    proof: "reconciled by 1 reviewer",
    earned: 60,
    pr: "no pull request",
    commit: "—",
    checks: "12 accounts credited",
    trail: "Matched retry events to charges, confirmed with the provider, refunded each account.",
  },
  {
    id: "l-729",
    ref: "ZIK-729",
    date: "05 NOV",
    outcome: "CSV exports keep leading zeros",
    proof: "PR #402 · verified 2/2",
    earned: 90,
    pr: "zedu-api#402",
    commit: "5f8b2c4",
    checks: "13 checks green",
    trail: "Quoted values in the writer and checked 2,000 generated rows.",
  },
];

export const SIGNATURES: SignatureItem[] = [
  {
    id: "s-812",
    ref: "ZIK-812",
    kind: "approval",
    title: "Add one index so the export fix can ship.",
    meta: "Expires in 3h 40m · one migration",
    result: "Approved. The agent resumed.",
  },
  {
    id: "s-798",
    ref: "ZIK-798",
    kind: "question",
    title: "Keep Safari 15 support?",
    meta: "Waiting 2h · one CSS line",
    result: "Answered. The fix is unblocked.",
    answer: {
      initial: "Yes, keep Safari 15",
      alternative: "No, drop Safari 15",
    },
  },
  {
    id: "s-801",
    ref: "ZIK-801",
    kind: "access",
    title: "Reconnect GitHub for zedu-mobile.",
    meta: "Paused 22m · the branch is safe",
    result: "Reconnected. The agent resumed the same run.",
  },
];

export const KIND_LABEL: Record<SignatureKind, string> = {
  approval: "Approval",
  question: "Answer",
  access: "Access",
};
