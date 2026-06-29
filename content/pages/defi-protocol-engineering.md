---
title: "DeFi Protocol Engineering: Lending, AMMs, Perps | LBM Solutions"
url: /defi-protocol-engineering
description: "We engineer audited DeFi protocols, lending markets, AMMs, perps, and yield. Mechanism and oracle design, audited before mainnet. Built on Ethereum, Base, and Arbitrum."
---

# Ship a DeFi protocol that survives contact with real money

We engineer lending markets, AMMs, perpetuals, and yield systems for teams that cannot afford an exploit. Mechanism and oracle design done properly, audited before mainnet, built on Ethereum, Base, Arbitrum, and Solana.

[Scope your protocol build](/contact) · [Book a mechanism-design review](/contact)

## What we build, and the risk each one carries

A serious DeFi buyer knows the contracts are easy and the economics are where protocols die. Each primitive names what it does and the specific failure mode it carries.

- **AMMs and DEXs.** Constant-product, concentrated-liquidity (Uniswap v3/v4 style), and stable-swap (Curve style) pools. *The risk: LP economics and price-manipulation via thin pools.*
- **Lending and borrowing.** Isolated and pooled markets, variable rates, collateral factors. *The risk: oracle manipulation and bad-debt cascades during liquidation.*
- **Perpetuals and derivatives.** Orderbook or vAMM perps, funding rates, margin. *The risk: funding and liquidation logic under volatile, low-liquidity conditions.*
- **Yield and vaults.** ERC-4626 vaults, auto-compounding, strategy routing. *The risk: strategy composability and dependency on external protocols.*
- **RWA-DeFi crossover.** Permissioned pools and tokenized collateral. *The risk: bridging compliant assets into permissionless mechanics.*

## The contracts are the easy part. The economics are where protocols die.

Most exploits are not a missing require statement. They are economic: an oracle that can be pushed, a liquidation that does not clear fast enough, an incentive that pays attackers more than it pays users. We design these explicitly, before a line of the protocol is final.

- **Oracle design.** Choosing and configuring price feeds (Chainlink, Pyth, TWAPs) so a flash-loaned swing cannot drain you.
- **Liquidation mechanics.** Parameters and keeper incentives that clear bad debt fast, even in a market crash.
- **Incentive and token design.** Emissions, fees, and rewards modeled so the protocol is solvent when the farming stops.
- **Stress and scenario modeling.** We simulate the bad days, not just the happy path, before mainnet.

## Audited before mainnet, every time

No DeFi protocol we build reaches mainnet unaudited. Security runs through the whole engagement. That means threat modeling at architecture, the full five-layer audit before launch, and onchain monitoring after. The audit covers Slither, Mythril, Echidna, Foundry, manual review, and Certora on critical paths.

See the full audit process on [smart contract audits](/smart-contract-audits).

## How we build

- **Contracts:** Solidity and Rust, Foundry-based workflow, OpenZeppelin libraries, upgradeable patterns where governance requires them.
- **Frontend:** wagmi, viem, and RainbowKit for wallet connection; a typed SDK so integrators move fast.
- **Oracles:** Chainlink, Pyth, and custom TWAPs per the risk profile.
- **Infra:** subgraph indexing, keeper and bot infrastructure for liquidations and rebalancing, observability and alerting.
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon, and Solana.

## Recent work

- **[NEEDS-VALIDATION: founder] protocol type and region.** Built and shipped a protocol with $[NEEDS-VALIDATION: founder] TVL within [NEEDS-VALIDATION: founder] months of launch. Audited pre-mainnet, [NEEDS-VALIDATION: founder] incidents since.
- **[NEEDS-VALIDATION: founder].** One-line problem, approach, and outcome with a number, pending founder validation.

References available under NDA. Read the [case studies](/case-studies).

## From mechanism to mainnet

| Phase | Timeline | What happens |
|---|---|---|
| Mechanism design | Weeks 1 to 2 | Economic model, oracle and liquidation design, parameter selection, and a written spec. |
| Build | Weeks 3 to 8 | Contracts, SDK, indexing, and keeper infrastructure. |
| Audit and stress test | Weeks 6 to 10 | Full audit and scenario modeling on testnet. |
| Launch and monitor | Week 10+ | Guarded mainnet rollout with caps, then monitoring and incident response. |

Timelines depend on primitive and complexity. Mechanism-design-only engagements are available as a smaller standalone scope. [Book a scoping call](/contact).

## Frequently asked questions

**Can you design the tokenomics, or only build the contracts?**
Both. Many teams come to us for the mechanism and economic design first, then continue into the build. You can book the mechanism-design review on its own.

**Do you audit your own protocol builds?**
Yes, with the same five-layer process we use for external audits, plus pre-mainnet stress testing. Some clients also commission a second independent audit, which we encourage and support.

**Which oracle should we use?**
It depends on the asset and the manipulation risk. We choose between Chainlink, Pyth, and TWAP designs during mechanism design, and configure for your specific market.

**Can you fork Uniswap or Curve?**
We can start from battle-tested designs where it fits, then engineer the parts that are specific to your protocol. We do not ship a blind fork with your logo on it.

**Who owns the code?**
You do. NDA on request.

**How do you handle launch risk?**
Guarded rollout: deposit caps, gradual limit increases, and active monitoring, so an early issue is contained, not catastrophic.

## Bring us the mechanism. We will tell you where it breaks

Book a call. We will pressure-test your protocol design, flag the economic and oracle risks, and send a written scope and budget. If your model has a hole, you want to hear it from us, not from an attacker.

[Scope your protocol build](/contact) · [Book a mechanism-design review](/contact)

Every protocol we build is audited before mainnet. NDA on request.

Related: [blockchain engineering](/blockchain-engineering), [smart contract audits](/smart-contract-audits), [tokenization and RWA](/tokenization-and-rwa), [crypto exchange development](/crypto-exchange-development), [case studies](/case-studies), [contact](/contact).
