# LBM Solutions Learning Center - content architecture

Topical-authority plan for the `/learn` learning center. Hub-and-spoke (pillar to cluster to supporting) covering every service line and industry LBM serves. Target: 300+ pages, sequenced in waves.

This file is the content backlog. Each row becomes one page (`app/learn/.../page.tsx` + `content/pages/<slug>.md` + `npm run llms`), following the same build rules as the rest of the site.

---

## 1. Why this structure

- **Topical authority** comes from covering a subject completely, not from one long post. Search engines and LLMs reward a tight cluster of interlinked pages around a theme. Each LBM service line becomes a pillar; every question a buyer or engineer asks around it becomes a cluster page that links up to the pillar and across to siblings.
- **Two intents, one funnel.** Learning-center pages serve informational intent (how does X work, X vs Y, what does X cost). The money pages (`/smart-contract-audits`, `/tokenization-and-rwa`, etc.) serve commercial intent. Every cluster page links to its pillar and to the matching money page, so reading converts into a scoped call.
- **LLM/answer-engine coverage.** Glossary + how-to + comparison pages are what AI answer engines cite. They also feed `llms.txt`. This is a deliberate moat: be the source the models quote.

---

## 2. URL + page-type conventions

| Page type | URL pattern | Length | Job |
|---|---|---|---|
| **Pillar hub** | `/learn/<pillar>` | 2500-4000 wd | Define the whole topic, link down to every cluster, link to the money page |
| **Cluster guide** | `/learn/<pillar>/<topic>` | 1200-2200 wd | Answer one sub-question fully; link up + sideways |
| **How-to / tutorial** | `/learn/<pillar>/how-to-<x>` | 1000-1800 wd | Step-by-step; code or checklist |
| **Comparison** | `/learn/compare/<a>-vs-<b>` | 1200-1800 wd | Decision content; table + recommendation |
| **Cost / ROI guide** | `/learn/cost/<x>` | 1200-2000 wd | What it costs, what drives the number |
| **Glossary term** | `/learn/glossary/<term>` | 300-700 wd | One definition, crisp; the LLM-citation layer |
| **Checklist / template** | `/learn/<pillar>/<x>-checklist` | 800-1500 wd | Downloadable-feeling, lead-magnet adjacent |

**Internal-linking rules (non-negotiable for authority):**
1. Every cluster page links UP to its pillar and to the relevant money page.
2. Every pillar links DOWN to all of its clusters.
3. Cross-link 2-4 sibling clusters per page (contextual, in-body).
4. Glossary terms link to the cluster/pillar that explains them in depth.
5. Comparisons link to both subjects' clusters and to the money page that resolves the choice.
6. Zero `href="#"`. All links via `next/link`.

**Per-page front matter / metadata template:**
```yaml
title:        # H1 = primary keyword, buyer-phrased
url:          # /learn/...
description:  # 150-160 chars, includes primary keyword
pillar:       # parent pillar slug
intent:       # informational | comparison | how-to | definition | cost
funnel_target: # the money page this converts toward
primary_kw:   # main query
secondary_kw: # 3-6 supporting queries
```

Copy rules carry over: US English, no em dashes, no invented stats (`[NEEDS-VALIDATION: founder]`), tech tokens in mono, JSON-LD per page (`Article` or `FAQPage` + `BreadcrumbList`).

---

## 3. Pillar map (16 pillars)

| # | Pillar | URL | Funnel target (money page) |
|---|---|---|---|
| P1 | Smart contract security & audits | `/learn/smart-contract-security` | `/smart-contract-audits` |
| P2 | Tokenization & real-world assets | `/learn/tokenization` | `/tokenization-and-rwa` |
| P3 | Stablecoins & crypto payments | `/learn/stablecoins-payments` | `/stablecoin-payment-rails` |
| P4 | DeFi protocol engineering | `/learn/defi` | `/defi-protocol-engineering` |
| P5 | Crypto wallets | `/learn/crypto-wallets` | `/crypto-wallet-development` |
| P6 | Crypto exchanges | `/learn/crypto-exchanges` | `/crypto-exchange-development` |
| P7 | Blockchain infrastructure & scaling | `/learn/blockchain-infrastructure` | `/blockchain-engineering`, L1/L2 pages |
| P8 | Enterprise & permissioned blockchain | `/learn/enterprise-blockchain` | `/enterprise-blockchain-development` |
| P9 | Token launch & tokenomics | `/learn/token-launch-guide` | `/token-development`, `/tokenization-and-rwa` |
| P10 | AI agents & automation | `/learn/ai-agents` | `/ai-agents-and-automation` |
| P11 | Generative AI, LLMs & RAG | `/learn/generative-ai` | `/generative-ai-development` |
| P12 | AI x blockchain crossover | `/learn/ai-blockchain` | `/ai-blockchain-crossover` |
| P13 | Custom software & CRM engineering | `/learn/product-engineering` | `/custom-software-development`, `/crm-engineering` |
| P14 | Compliance, regulation & security ops | `/learn/compliance` | all blockchain money pages |
| P15 | Cost, pricing & buyer guides | `/learn/blockchain-cost-guide` | `/pricing`, all money pages |
| P16 | Glossary (foundational definitions) | `/learn/glossary` | every pillar |

---

## 4. Cluster topics by pillar

> Each line = one page. Slug shown after the dash. Pillar page itself is implied (the `/learn/<pillar>` index).

### P1 - Smart contract security & audits  → `/smart-contract-audits`
1. What is a smart contract audit and when you need one - `what-is-a-smart-contract-audit`
2. Smart contract audit process, step by step - `audit-process-explained`
3. Smart contract audit checklist (pre-audit prep) - `pre-audit-checklist`
4. Top smart contract vulnerabilities in 2026 - `common-vulnerabilities`
5. Reentrancy attacks explained, with prevention - `reentrancy-attacks`
6. Integer overflow and underflow - `integer-overflow-underflow`
7. Access control and privilege bugs - `access-control-bugs`
8. Oracle manipulation and price attacks - `oracle-manipulation`
9. Flash loan attacks explained - `flash-loan-attacks`
10. Front-running and MEV risk - `front-running-mev`
11. Static analysis tools: Slither, Mythril, Aderyn - `static-analysis-tools`
12. Fuzzing with Foundry and Echidna - `fuzzing-foundry-echidna`
13. Formal verification with Certora - `formal-verification`
14. Manual review vs automated scanning - `manual-vs-automated-review`
15. How to read a smart contract audit report - `reading-an-audit-report`
16. Audit severity levels (critical to informational) - `severity-levels`
17. Re-audits and why fixes need re-review - `re-audits-explained`
18. Bug bounties vs audits - `bug-bounty-vs-audit`
19. Gas optimization without breaking security - `gas-optimization-safely`
20. Upgradeable contracts and proxy security - `proxy-and-upgrade-security`

### P2 - Tokenization & real-world assets  → `/tokenization-and-rwa`
1. What is asset tokenization - `what-is-tokenization`
2. Real-world assets (RWA) explained - `what-are-rwas`
3. ERC-3643 (T-REX) standard explained - `erc-3643-explained`
4. ERC-1400 security token standard - `erc-1400-explained`
5. Tokenizing real estate - `tokenizing-real-estate`
6. Tokenizing private credit - `tokenizing-private-credit`
7. Tokenizing funds and equity - `tokenizing-funds`
8. Tokenizing invoices and receivables - `tokenizing-invoices`
9. Tokenizing commodities - `tokenizing-commodities`
10. Permissioned transfers and the compliance layer - `permissioned-transfers`
11. ONCHAINID and on-chain identity for RWA - `onchainid-explained`
12. Primary issuance vs secondary trading - `issuance-vs-secondary`
13. Reg D, Reg S, Reg A+ for security tokens - `security-token-regulations`
14. Custody for tokenized assets - `rwa-custody`
15. Off-chain to on-chain settlement - `settlement-models`
16. Cap table management on-chain - `on-chain-cap-tables`
17. RWA oracles and proof of reserve - `rwa-oracles-proof-of-reserve`
18. Tokenization platform build vs buy - `build-vs-buy-tokenization`
19. STO vs ICO vs IEO - `sto-vs-ico-vs-ieo`
20. RWA market landscape 2026 - `rwa-market-landscape`

### P3 - Stablecoins & crypto payments  → `/stablecoin-payment-rails`
1. What is a stablecoin - `what-is-a-stablecoin`
2. Fiat-backed vs crypto-backed vs algorithmic - `stablecoin-types`
3. How stablecoin settlement works - `how-settlement-works`
4. Stablecoin payment rails for B2B - `b2b-payment-rails`
5. Crypto checkout integration - `crypto-checkout`
6. Crypto payouts and mass disbursement - `crypto-payouts`
7. On-ramps and off-ramps explained - `on-off-ramps`
8. USDC vs USDT vs PYUSD vs USDe - `stablecoin-comparison`
9. Cross-border payments with stablecoins - `cross-border-payments`
10. Stablecoin treasury management - `treasury-management`
11. Gas abstraction and paying fees in stablecoins - `gas-abstraction`
12. Chain selection for payments (Base, Solana, Tron) - `payment-chain-selection`
13. Travel Rule compliance for payments - `travel-rule`
14. Reconciliation and accounting for crypto payments - `crypto-reconciliation`
15. Issuing your own stablecoin - `issuing-a-stablecoin`
16. MiCA and stablecoin regulation - `mica-stablecoins`
17. Payment fraud and chargeback realities in crypto - `crypto-payment-fraud`
18. Stablecoin payments vs card networks (cost) - `stablecoin-vs-cards`

### P4 - DeFi protocol engineering  → `/defi-protocol-engineering`
1. What is DeFi - `what-is-defi`
2. How AMMs work (constant product, concentrated liquidity) - `how-amms-work`
3. Uniswap v3 vs v4 architecture - `uniswap-v3-vs-v4`
4. Building a lending protocol - `lending-protocol-design`
5. Liquidation mechanisms explained - `liquidation-mechanisms`
6. Staking protocol design - `staking-protocol-design`
7. Yield farming and liquidity mining - `yield-farming`
8. Perpetuals and derivatives engineering - `perpetuals-engineering`
9. Liquidity pool and LP token design - `lp-token-design`
10. Impermanent loss explained - `impermanent-loss`
11. Tokenomics for DeFi protocols - `defi-tokenomics`
12. Governance and DAO integration - `defi-governance`
13. Oracle design for DeFi - `defi-oracles`
14. MEV protection strategies - `mev-protection`
15. DeFi mechanism design and economic audits - `mechanism-design`
16. Stablecoin and CDP protocol design - `cdp-protocol-design`
17. Restaking and LRTs explained - `restaking-lrts`
18. Cross-chain DeFi and bridges - `cross-chain-defi`
19. DeFi security: the biggest exploits and lessons - `defi-exploit-lessons`
20. Testnet to mainnet launch playbook - `defi-launch-playbook`

### P5 - Crypto wallets  → `/crypto-wallet-development`
1. Custodial vs non-custodial wallets - `custodial-vs-non-custodial`
2. How crypto wallets work (keys, signing) - `how-wallets-work`
3. MPC wallets explained - `mpc-wallets`
4. Account abstraction (ERC-4337) explained - `account-abstraction`
5. Smart contract wallets vs EOAs - `smart-wallets-vs-eoa`
6. Seed phrases, key management, recovery - `key-management`
7. Social recovery wallets - `social-recovery`
8. Multi-chain wallet architecture - `multi-chain-wallets`
9. Hardware wallet integration - `hardware-wallet-integration`
10. Embedded and in-app wallets - `embedded-wallets`
11. Wallet security best practices - `wallet-security`
12. Gas sponsorship and paymasters - `paymasters`
13. WalletConnect and dApp connections - `walletconnect-explained`
14. White-label wallet build - `white-label-wallet`
15. Passkeys and biometric signing - `passkeys-signing`
16. Wallet UX patterns that reduce drop-off - `wallet-ux-patterns`

### P6 - Crypto exchanges  → `/crypto-exchange-development`
1. CEX vs DEX vs P2P - `cex-vs-dex-vs-p2p`
2. How a matching engine works - `matching-engine`
3. Order book vs AMM - `order-book-vs-amm`
4. Exchange custody architecture (hot/cold) - `exchange-custody`
5. Liquidity for a new exchange - `exchange-liquidity`
6. Market maker integration - `market-maker-integration`
7. KYC/AML for exchanges - `exchange-kyc-aml`
8. Exchange licensing by jurisdiction (VARA, MAS, etc.) - `exchange-licensing`
9. Building a DEX (AMM or on-chain order book) - `building-a-dex`
10. P2P exchange escrow and dispute design - `p2p-escrow-design`
11. Derivatives and margin on exchanges - `exchange-derivatives`
12. Exchange security and the biggest hacks - `exchange-security`
13. White-label exchange: build vs buy - `white-label-exchange`
14. Fiat gateway integration - `fiat-gateway`
15. Exchange admin, risk and ops console - `exchange-ops-console`
16. Proof of reserves for exchanges - `proof-of-reserves`

### P7 - Blockchain infrastructure & scaling  → `/blockchain-engineering`, L1/L2 pages
1. Layer 1 vs Layer 2 explained - `l1-vs-l2`
2. How rollups work - `how-rollups-work`
3. ZK-rollups vs optimistic rollups - `zk-vs-optimistic`
4. Building an appchain (Cosmos SDK, Substrate) - `appchain-development`
5. Sidechains vs rollups - `sidechains-vs-rollups`
6. Validators and node infrastructure - `node-infrastructure`
7. RPC infrastructure and indexing - `rpc-and-indexing`
8. The Graph and on-chain data - `the-graph-indexing`
9. Cross-chain bridges and interoperability - `bridges-interoperability`
10. Bridge security and the biggest bridge hacks - `bridge-security`
11. Oracle integration (Chainlink, Pyth) - `oracle-integration-guide`
12. Data availability layers explained - `data-availability`
13. Modular vs monolithic blockchains - `modular-vs-monolithic`
14. Choosing a chain for your product - `choosing-a-chain`
15. EVM vs SVM vs Move - `evm-vs-svm-vs-move`
16. Gas, fees and fee markets explained - `gas-and-fee-markets`
17. Account models: UTXO vs account-based - `utxo-vs-account`
18. Consensus mechanisms (PoW, PoS, variants) - `consensus-mechanisms`
19. Running production nodes: cost and ops - `node-ops-and-cost`
20. Indexers, subgraphs and event pipelines - `event-pipelines`
21. Chain abstraction and intents - `chain-abstraction`
22. Scaling roadmap: what to pick in 2026 - `scaling-roadmap-2026`

### P8 - Enterprise & permissioned blockchain  → `/enterprise-blockchain-development`
1. Public vs private vs permissioned blockchains - `public-vs-permissioned`
2. Hyperledger Fabric explained - `hyperledger-fabric`
3. Enterprise blockchain use cases that actually work - `enterprise-use-cases`
4. Supply chain traceability on blockchain - `supply-chain-traceability`
5. Decentralized identity (DID) and verifiable credentials - `did-verifiable-credentials`
6. Consortium blockchains and governance - `consortium-governance`
7. Blockchain for trade finance - `trade-finance`
8. Blockchain in healthcare records - `healthcare-records`
9. Tokenized loyalty and rewards - `loyalty-and-rewards`
10. Integrating blockchain with ERP/SAP - `erp-integration`
11. Privacy on enterprise chains (ZK, channels) - `enterprise-privacy`
12. Permissioned vs public for regulated firms - `regulated-firm-choice`
13. Proof of concept to production for enterprise - `enterprise-poc-to-prod`
14. Total cost of ownership: enterprise blockchain - `enterprise-tco`

### P9 - Token launch & tokenomics  → `/token-development`, `/tokenization-and-rwa`
1. How to launch a token (compliant path) - `how-to-launch-a-token`
2. Tokenomics design fundamentals - `tokenomics-fundamentals`
3. Token vesting and cliff schedules - `vesting-and-cliffs`
4. Token distribution models - `distribution-models`
5. ERC-20 vs BEP-20 vs SPL - `token-standards-compared`
6. Token utility vs security classification - `utility-vs-security`
7. Launchpads and IDO mechanics - `launchpads-and-idos`
8. Liquidity provisioning at launch - `launch-liquidity`
9. Anti-bot and fair-launch mechanisms - `fair-launch`
10. Token governance and voting design - `token-governance`
11. Treasury and DAO management - `dao-treasury`
12. Airdrops: design and pitfalls - `airdrop-design`
13. Token vesting contracts and security - `vesting-contract-security`
14. Market making for token launches - `token-market-making`
15. Token launch legal and jurisdiction - `token-launch-legal`
16. Post-launch token operations - `post-launch-ops`

### P10 - AI agents & automation  → `/ai-agents-and-automation`
1. What is an AI agent - `what-is-an-ai-agent`
2. Agents vs workflows vs chatbots - `agents-vs-workflows`
3. Multi-agent systems explained - `multi-agent-systems`
4. The demo-to-production gap for agents - `demo-to-production-gap`
5. Agent observability (Langfuse, LangSmith) - `agent-observability`
6. Evals for AI agents - `agent-evals`
7. Guardrails and safety for agents - `agent-guardrails`
8. Human-in-the-loop design - `human-in-the-loop`
9. Tool calling and function calling - `tool-calling`
10. Model Context Protocol (MCP) explained - `mcp-explained`
11. LangGraph vs CrewAI vs AutoGen - `agent-frameworks-compared`
12. Cost control for agents (tokens, routing) - `agent-cost-control`
13. Agent memory and context management - `agent-memory`
14. Automating customer support with agents - `support-automation`
15. Automating sales and revenue ops - `revops-automation`
16. Document and data extraction agents - `extraction-agents`
17. Agent ROI: how to measure it - `agent-roi`
18. When NOT to use an AI agent - `when-not-to-use-agents`

### P11 - Generative AI, LLMs & RAG  → `/generative-ai-development`
1. What is generative AI - `what-is-generative-ai`
2. How LLMs work (for product teams) - `how-llms-work`
3. RAG explained - `what-is-rag`
4. RAG vs fine-tuning - `rag-vs-fine-tuning`
5. Vector databases compared (Pinecone, Weaviate, Qdrant, pgvector) - `vector-databases-compared`
6. Chunking and embedding strategies - `chunking-and-embeddings`
7. Reranking and retrieval quality - `reranking`
8. How to stop hallucinations - `preventing-hallucinations`
9. Choosing a model: hosted vs open-weight - `choosing-a-model`
10. Fine-tuning explained - `fine-tuning-explained`
11. Prompt engineering for production - `production-prompting`
12. Evals for LLM apps - `llm-evals`
13. Building a knowledge assistant - `knowledge-assistant`
14. Building a product copilot - `product-copilot`
15. Data privacy for generative AI - `genai-data-privacy`
16. Self-hosting open-weight models - `self-hosting-models`
17. PII redaction and data minimization - `pii-redaction`
18. LLM cost optimization - `llm-cost-optimization`
19. Multimodal AI in products - `multimodal-ai`
20. Generative AI security risks (prompt injection) - `prompt-injection`

### P12 - AI x blockchain crossover  → `/ai-blockchain-crossover`
1. AI and blockchain: where they actually meet - `ai-blockchain-overview`
2. On-chain AI agents and agent payments - `agent-payments`
3. Verifiable AI and on-chain proofs - `verifiable-ai`
4. AI for smart contract auditing - `ai-in-auditing`
5. Decentralized compute for AI - `decentralized-compute`
6. AI oracles - `ai-oracles`
7. Autonomous agents managing wallets - `agents-and-wallets`
8. DePIN and AI - `depin-and-ai`
9. Data marketplaces for AI on-chain - `on-chain-data-markets`
10. Risks of autonomous on-chain agents - `autonomous-agent-risks`

### P13 - Custom software & CRM engineering  → `/custom-software-development`, `/crm-engineering`
1. Build vs buy software - `build-vs-buy`
2. When to build a custom CRM - `when-to-build-crm`
3. Extending Salesforce vs custom CRM - `salesforce-vs-custom`
4. Choosing a tech stack in 2026 - `choosing-a-stack`
5. Shipping AI features without derailing the roadmap - `ai-features-in-parallel`
6. Internal tools and ops automation - `internal-tools`
7. API and integration architecture - `integration-architecture`
8. Staff augmentation vs project delivery - `staff-aug-vs-project`
9. Clean handoff and avoiding vendor lock-in - `clean-handoff`
10. Technical due diligence for founders - `technical-due-diligence`
11. Legacy modernization - `legacy-modernization`
12. Scaling a SaaS backend - `scaling-saas-backend`
13. Multi-tenancy patterns - `multi-tenancy`
14. CRM data migration done right - `crm-data-migration`
15. Webhooks and event-driven integrations - `event-driven-integrations`
16. Choosing between React Native and Flutter - `react-native-vs-flutter`

### P14 - Compliance, regulation & security ops  → all blockchain money pages
1. KYC and KYB for crypto products - `kyc-kyb`
2. AML and transaction monitoring - `aml-monitoring`
3. The Travel Rule explained - `travel-rule-explained`
4. MiCA explained (EU) - `mica-explained`
5. VARA framework (UAE) - `vara-explained`
6. MAS and the Payment Services Act (Singapore) - `mas-psa`
7. US crypto regulation overview 2026 - `us-crypto-regulation`
8. Sanctions screening for crypto - `sanctions-screening`
9. SOC 2 for crypto and AI products - `soc2-explained`
10. GDPR for AI products - `gdpr-for-ai`
11. Custody regulation and qualified custodians - `custody-regulation`
12. Security token regulation by region - `security-token-regs-by-region`
13. VASP licensing explained - `vasp-licensing`
14. Smart contract legal status - `smart-contract-legal-status`
15. Data residency and VPC deployment - `data-residency`
16. Incident response for crypto products - `incident-response`
17. Proof of reserves and attestations - `por-attestations`
18. DAO legal structures - `dao-legal-structures`
19. Stablecoin regulation by region - `stablecoin-regs-by-region`
20. Building a compliance-ready architecture - `compliance-ready-architecture`

### P15 - Cost, pricing & buyer guides  → `/pricing`, money pages
1. What does a smart contract audit cost - `smart-contract-audit-cost`
2. What does it cost to build a crypto exchange - `crypto-exchange-cost`
3. What does it cost to build a crypto wallet - `crypto-wallet-cost`
4. What does it cost to build a DeFi protocol - `defi-protocol-cost`
5. What does tokenization cost - `tokenization-cost`
6. What do stablecoin payment rails cost - `stablecoin-rails-cost`
7. What does an AI agent project cost - `ai-agent-cost`
8. What does a RAG / generative AI build cost - `generative-ai-cost`
9. Token launch cost breakdown - `token-launch-cost`
10. Fixed-fee vs time-and-materials - `fixed-fee-vs-tm`
11. In-house team vs agency vs freelancers - `inhouse-vs-agency-vs-freelance`
12. How to scope a blockchain project - `how-to-scope-a-project`
13. How to write an RFP for a blockchain build - `blockchain-rfp`
14. Hidden costs of crypto products (ops, audits, gas) - `hidden-costs`
15. How to budget a Web3 MVP - `web3-mvp-budget`
16. ROI of automation: a model - `automation-roi-model`

### P16 - Glossary  → every pillar
Single-definition pages, 300-700 words each, heavy internal links. Group under `/learn/glossary/<term>`. Build in batches; target ~70 terms. Representative set:
- Blockchain, Smart contract, Gas, Wallet, Private key, Public key, Seed phrase, Node, Validator, Consensus, Proof of stake, Proof of work, Rollup, ZK proof, Optimistic rollup, Bridge, Oracle, DAO, dApp, DeFi, AMM, Liquidity pool, Impermanent loss, Yield farming, Staking, Slashing, TVL, Stablecoin, CBDC, Tokenization, RWA, Security token, Utility token, ERC-20, ERC-721, ERC-1155, ERC-3643, ERC-4337, ERC-4626, MPC, Account abstraction, Paymaster, KYC, AML, Travel Rule, VASP, Custody, Cold storage, Hot wallet, MEV, Reentrancy, Audit, Fuzzing, Formal verification, LLM, RAG, Embedding, Vector database, Fine-tuning, Hallucination, AI agent, MCP, Tool calling, Eval, Guardrail, Inference, Prompt injection, Tokenomics, Vesting, Airdrop.

---

## 5. Comparison hub  → `/learn/compare/...`
High-intent decision pages (link to both subjects + the money page). ~30 pages:
- CEX vs DEX, Custodial vs non-custodial wallet, RAG vs fine-tuning, ZK vs optimistic rollup, ERC-20 vs BEP-20, Hosted vs open-weight LLM, Pinecone vs Weaviate vs Qdrant, LangGraph vs CrewAI, Slither vs Mythril, Audit vs bug bounty, Build vs buy exchange, Build vs buy wallet, Public vs permissioned blockchain, Solana vs Ethereum for payments, Base vs Arbitrum, USDC vs USDT, MiCA vs VARA vs MAS, STO vs ICO, Salesforce vs custom CRM, React Native vs Flutter, Hyperledger vs Ethereum, AMM vs order book, In-house vs agency, Stablecoin vs card payments, Optimistic vs ZK for a new chain, Layer 1 vs Layer 2, Monolithic vs modular, Fixed-fee vs T&M, MPC vs multisig, Smart wallet vs EOA.

---

## 6. Industry playbooks  → industry pages + money pages
Deeper, industry-framed guides linking to `/industries/*`. ~18 pages, e.g.:
- Fintech: stablecoin treasury for fintechs, embedded crypto in neobanks, lending protocol for fintech, compliance stack for a licensed fintech, card-to-crypto rails, KYC/AML build for fintech.
- B2B SaaS: adding an AI copilot to SaaS, AI support agent for SaaS, usage-based billing with crypto, building a SaaS data pipeline for AI, CRM for B2B GTM teams, internal AI tooling for scale-ups.
- Web3 protocols: pre-mainnet security playbook, token launch playbook for protocols, DAO setup for protocols, liquidity bootstrapping, protocol monitoring and incident response, audit-to-launch timeline.

---

## 7. Page-count summary

| Bucket | Pages |
|---|---|
| Pillar hubs | 16 |
| P1-P15 cluster pages | 262 |
| Glossary terms | ~70 |
| Comparison hub | ~30 |
| Industry playbooks | ~18 |
| **Total** | **~396** |

This exceeds 300 deliberately, so prioritization (below) decides what ships first and what waits. A live, interlinked subset of 200-300 is enough for category authority; the rest is backlog.

---

## 8. Build priority (waves)

**Wave 1 - money-adjacent + highest commercial intent (~40 pages).** The cost guides (P15), the top "what is / how it works" cluster per money-page pillar (P1-P6, P10-P11), and the top 10 comparisons. These convert fastest and reinforce the live service pages.

**Wave 2 - pillar hubs + core clusters (~80 pages).** All 16 pillar hubs, plus 6-8 core clusters each for P1-P6, P10, P11. Establishes the spoke structure search engines reward.

**Wave 3 - glossary + remaining comparisons (~100 pages).** The glossary is the LLM-citation and internal-link backbone; ship it in batches of 10-15. Finish the comparison hub.

**Wave 4 - depth + long tail (~remainder).** P7-P9, P12-P14 clusters, industry playbooks, asset-class and jurisdiction sub-pages. Build as demand, proof, and case studies justify (the all-pages.md D/P/I gate).

---

## 9. Production workflow per page

1. `app/learn/<pillar>/<slug>/page.tsx` (Article or FAQPage JSON-LD + BreadcrumbList) + `content/pages/<slug>.md` twin.
2. Internal links per the rules in section 2 (up to pillar, to money page, 2-4 siblings).
3. `npm run llms` to refresh `llms.txt` / `llms-full.txt` / sitemap.
4. Gates: `npx tsc --noEmit && npm run lint`; voice-qa on the copy.
5. No invented stats: any figure is `[NEEDS-VALIDATION: founder]` until sourced.
6. Reuse existing primitives (`.prose`, blog components, `Faq`); the learning center is a reading surface, so it leans on the `.prose` + TOC + related patterns already built for the blog.

---

## 10. Notes / decisions for founder

- `/learn` vs `/resources/blog`: keep them distinct. `/learn` is evergreen pillar/cluster reference (this file). `/blog` is dated news and opinion. Blog posts link into `/learn`; `/learn` rarely links out to blog.
- The three pillars already named in WIREMAP (`token-launch-guide`, `crm-buyers-guide`, `blockchain-cost-guide`) map here to P9, P13, and P15 respectively. Keep those slugs or fold them in as noted.
- Glossary is the cheapest authority-per-page; it is also what AI answer engines quote. Do not skip it.
- Several cluster topics double as strong paid-landing-page candidates (per all-pages.md Tier 3). Keep the organic `/learn` version informational; the paid version stays 1:1 and noindex.
