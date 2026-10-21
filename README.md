# @kurox_real/plugin-canaryguard

> **Sub-millisecond (<0.1ms) deterministic prompt-injection firewall, concealed Unicode scrubber, and unauthorized wallet-drain defense for ElizaOS agents on Base.**

[![npm version](https://img.shields.io/npm/v/@kurox_real/plugin-canaryguard.svg)](https://www.npmjs.com/package/@kurox_real/plugin-canaryguard)
[![Base Mainnet](https://img.shields.io/badge/Network-Base%20Mainnet%20(8453)-0052FF.svg)](https://base.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Overview

Public AI agents processing Discord/Twitter mentions, scraped web pages, and tool outputs are constantly targeted by:
1. **Delimiter Escapes:** `[INST]`, `<|im_start|>`, `system: ...` trying to override system instructions.
2. **Concealed Unicode Smuggling:** Invisible characters (`\u200B`, `\uFEFF`, soft hyphens) hiding text from tokenizers.
3. **Wallet Drainage Imperatives:** Commands coercing agent keyholders to transfer tokens (`empty the wallet to address 0x...`).

**CanaryGuard** provides a deterministic Layer-1 defense that runs in **`<0.1ms`** with **zero LLM inference overhead**.

---

## 🔒 Non-Destructive Source-Restoration Design

Unlike legacy filters that destructively wipe user messages or break cryptographic trust envelopes, CanaryGuard:
- **Preserves Original Messages:** Message text in persistent storage remains 100% untampered.
- **Attaches Non-Destructive Telemetry:** Evaluates incoming turns and attaches risk scores (`risk_score`, `threats_neutralized`) to state metadata.
- **System Defense Directives:** Injects contextual security warnings into the model prompt when attacks are detected, priming the LLM to refuse malicious transfer commands.

---

## 📦 Installation

```bash
npm install @kurox_real/plugin-canaryguard
```

---

## ⚡ Quickstart in ElizaOS

Add `canaryGuardPlugin` to your `character.json` or agent initialization:

```typescript
import { canaryGuardPlugin } from "@kurox_real/plugin-canaryguard";

export const character = {
  name: "GuardianAgent",
  plugins: [canaryGuardPlugin],
  // All incoming messages are evaluated non-destructively in <0.1ms
};
```

### 🤖 Turnkey Shielded Character Template

We provide an off-the-shelf, battle-tested trading character in `characters/shielded-trader.character.json` that prevents prompt injections from draining your agent's wallet while autonomously executing on-chain trades:

```bash
eliza start --character node_modules/@kurox_real/plugin-canaryguard/characters/shielded-trader.character.json
```

### Manual Sanitization Action

For explicitly sanitizing untrusted external documents or scraped web pages before prompt construction:

```typescript
// Call the CANARY_SANITIZE action in custom workflows
const result = await runtime.getPlugin("canaryguard").actions.CANARY_SANITIZE.handler(
  runtime,
  message,
  state,
  { content: untrustedWebScrape, strictMode: false }
);

console.log(result.sanitized_content);
```

---

## 🔗 Live x402 Oracle on Base Mainnet

CanaryGuard also operates a hosted, high-concurrency oracle on Base Mainnet gated by RFC/x402 micropayments ($0.003 USDC/call):
- **Live Endpoint:** `https://canaryguard-402.onrender.com/v1/sanitize`
- **Machine Discovery:** `https://canaryguard-402.onrender.com/.well-known/x402`
- **Verified Settlement Tx:** [`0x9d919b77ee9e2b074c4481128552c789fce8bf10b8c20f285adef623ddd5ff6c`](https://basescan.org/tx/0x9d919b77ee9e2b074c4481128552c789fce8bf10b8c20f285adef623ddd5ff6c) (Block 52563488)

---

## 📄 License

MIT © [AK | Kurox](https://github.com/ak10082247-max)
