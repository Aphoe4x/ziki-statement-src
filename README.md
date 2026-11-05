# Ziki Statement

A week of agent work as a **document you sign**, instead of an inbox you scroll.

Live: https://aphoe4x.github.io/ziki-statement/

## The idea

Ziki's agents already do the work. What was missing was a human moment that feels like one.

Five shipped fixes are line items — outcome, proof, dollars earned. The three things an agent
cannot do (approve a migration, answer a scoping question, reconnect GitHub) are **signature
lines**. Signing is a physical gesture: **press and hold the seal for one second**. A click is
ignored on purpose, because an agent can click and an agent cannot hold. When the last seal is
signed the page is stamped **SETTLED**.

## Review it in 30 seconds

1. Open the live link — you land on the statement.
2. Read the headline: 5 fixes shipped, 3 need your signature, $570 earned.
3. Click a line item to see its proof (PR, commit, checks).
4. Scroll to **Signature required** or click **Sign below**.
5. Press and hold a blue **SIGN** seal for about a second.
6. Sign all three to settle the statement. **Reset statement** runs it again.

## Stack

React 18 + TypeScript, Vite, hand-written CSS with Ziki brand tokens
(ink `#0B1733`, blue `#3978F6`, Manrope + Geist Mono). No UI library. Keyboard:
focus a seal and hold Space/Enter. Respects `prefers-reduced-motion`.

## Run

```bash
npm install
npm run dev
```
