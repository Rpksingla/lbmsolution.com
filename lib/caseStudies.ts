/* Single source of truth for the case-studies index and single pages.
 *
 * These are real, client-approved case studies adapted from LBM Solutions'
 * published project write-ups (Minati, PoxScan.io / PolluxChain, and AiMintz).
 * All figures come from those source materials. Keep the page template in
 * app/case-studies/[slug]/page.tsx unchanged; this file is the content layer. */

export type CaseService =
  | "layer-1"
  | "rollup"
  | "bridge"
  | "oracle"
  | "enterprise"
  | "identity"
  | "wallet"
  | "explorer"
  | "web3";

export const SERVICE_LABELS: Record<CaseService, string> = {
  "layer-1": "Layer 1",
  rollup: "Rollup",
  bridge: "Cross-chain bridge",
  oracle: "Oracle",
  enterprise: "Enterprise",
  identity: "Identity / DID",
  wallet: "Wallet",
  explorer: "Blockchain explorer",
  web3: "Web3 ecosystem",
};

/* Where the single-page CTA points, matched to the service. */
export const SERVICE_CTA: Record<CaseService, { href: string; label: string }> = {
  "layer-1": { href: "/layer-1-blockchain-development", label: "Book an architecture review" },
  rollup: { href: "/layer-2-development", label: "Book a scaling strategy call" },
  bridge: { href: "/cross-chain-bridge-development", label: "Book a bridge security review" },
  oracle: { href: "/oracle-integration", label: "Get an oracle integration quote" },
  enterprise: { href: "/enterprise-blockchain-development", label: "Book an enterprise consultation" },
  identity: { href: "/blockchain-identity-did", label: "Book a DID consultation" },
  wallet: { href: "/crypto-wallet-development", label: "Scope your wallet build" },
  explorer: { href: "/blockchain-engineering", label: "Book an architecture review" },
  web3: { href: "/tokenization-and-rwa", label: "Book a tokenomics consultation" },
};

export type CaseStudy = {
  slug: string;
  client: string; // descriptor, never a real name unless approved
  service: CaseService;
  industry: string;
  region: string;
  problem: string; // one line
  approach: string; // one line
  headlineMetric: string; // the single big hook
  metrics: { label: string; value: string }[];
  timeline: string;
  techStack: string[];
  teamSize: string;
  quote: { text: string; name: string; role: string };
  weight: "lg" | "md"; // index card weighting; strongest cases get "lg"
  heroKind: string; // PhotoSlot label
  heroSrc?: string; // illustrative stock visual; swap for real project art when available
  challenge: string[];
  approachBody: string[];
  outcome: string[];
  bodyImages: { kind: string; ratio: "16/9" | "3/2" | "4/3"; src?: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "minati",
    client: "Minati",
    service: "web3",
    industry: "Multi-product Web3 ecosystem",
    region: "Global",
    problem:
      "Launching a multi-product blockchain ecosystem in a crowded, skeptical Web3 market, while building trust, educating users, and attracting investors at the same time.",
    approach:
      "We acted as the end-to-end execution partner: blockchain and token development, tokenomics, an investor-grade whitepaper, brand positioning, website, and a full 360-degree marketing strategy.",
    headlineMetric: "Eight interconnected products, one token-powered Web3 economy, delivered end to end",
    metrics: [
      { label: "Interconnected ecosystem products", value: "8" },
      { label: "Services delivered end to end", value: "15" },
      { label: "Unified token-powered economy", value: "1" },
    ],
    timeline: "End-to-end build, launch, and growth engagement",
    techStack: [
      "Ethereum",
      "ERC-20",
      "Solidity",
      "Smart contracts",
      "MetaMask",
      "Multi-wallet support",
      "Responsive web",
      "Web3 integrations",
    ],
    teamSize: "LBM end-to-end execution team",
    quote: {
      text:
        "Minati was built with a single philosophy: that the most valuable blockchain ecosystems are those where every product makes every other product more useful. MNTC is not just a token, it is the connective tissue of a complete digital economy.",
      name: "LBM Solutions",
      role: "On the Minati engagement",
    },
    weight: "md",
    heroKind: "Minati Web3 ecosystem",
    heroSrc: "https://media.worksbuddy.ai/1781095226437-b2b000b8567f-MINATI.png?w=2000&h=1123",
    challenge: [
      "Minati was envisioned not as a standalone cryptocurrency but as a complete, interconnected Web3 infrastructure: a digital economy where users could store, trade, spend, stake, and manage assets through one unified platform. The ambition was bold, to build an entire blockchain ecosystem from the ground up and then position and market it to a global audience. We were brought in as the end-to-end execution partner, handling everything from smart contract development and tokenomics design to whitepaper creation, brand positioning, website development, and a full 360-degree marketing strategy.",
      "The blockchain industry is crowded with single-utility projects: a wallet here, a DEX there, an NFT platform somewhere else. Minati's vision was fundamentally different. The goal was a comprehensive ecosystem where every product reinforced the others, creating compounding utility that no single-feature project could replicate. That ambition came with serious complexity, because building credibility for a simple token launch is hard enough, and doing it for an eight-product ecosystem, each with its own positioning, technical architecture, and user education, is an entirely different challenge.",
      "Six distinct challenges defined the work. Ecosystem architecture: designing a clear, coherent structure connecting multiple products under a single blockchain infrastructure without confusion or fragmentation. A sustainable token economy: engineering tokenomics capable of supporting long-term growth, user incentives, and multi-product utility at once. Investor credibility: professional-grade documentation that positioned Minati as a serious, well-architected project for institutional and retail investors. Audience education: communicating real-world utility beyond speculative trading, to both crypto-native users and newcomers unfamiliar with DeFi. Multi-product awareness: building simultaneous awareness for eight distinct products under one cohesive brand without diluting the core message. And community growth: attracting and retaining an active, informed community at a time when trust in new Web3 projects was at a premium.",
    ],
    approachBody: [
      "Rather than treating technical development and marketing as separate workstreams, we designed a unified execution strategy where every deliverable, from smart contracts to social campaigns, reinforced the same core narrative: Minati is a complete blockchain ecosystem, not just another token. The work moved through four connected phases: build (blockchain development and tokenomics), document (whitepaper and investor materials), launch (website, branding, and rollout), and grow (360-degree marketing and community). By the time Minati reached the market it had a strong technical foundation, compelling documentation, a professional digital presence, and an engaged community, all aligned around a single positioning strategy.",
      "At the core we developed the Minati ERC-20 token, MNTC, on Ethereum, with a smart contract implementation built to the highest standards for security, compatibility, and scalability. MNTC was architected as more than a speculative asset: it is the primary utility layer powering every product, from transaction fees and staking rewards to governance participation and platform services. The work spanned full ERC-20 token development and testing, a security-focused contract architecture to minimise vulnerabilities, a complete deployment pipeline from development through audit-readiness to live mainnet, and a token integration framework defining how MNTC flows across all eight products, so demand is driven by real usage rather than speculation.",
      "A token launch without thoughtful tokenomics is just a lottery ticket. We designed a comprehensive economic framework that balanced short-term user incentives with long-term ecosystem sustainability, built on the principle of utility-driven demand: genuine usage such as staking, governance, payments, and platform services naturally drives demand for MNTC. The model optimised for long-term growth over short-term price action, user-participation incentives that reward real engagement, controlled distribution to prevent early dumping, embedded community-engagement mechanisms, and utility-driven demand across all products. Allocation spanned ecosystem development and treasury reserve, team and advisory allocation with vesting schedules, community rewards and staking incentives, public sale and liquidity provision, and marketing and partnership development.",
      "In Web3 a whitepaper is often the foundation of a project's credibility, so we produced a professional, comprehensive whitepaper that gave technical clarity to blockchain-savvy audiences and a compelling business narrative to investors. It covered six pillars: the ecosystem architecture and how the eight products connect through the shared MNTC infrastructure; a data-backed market opportunity analysis for each product; the technology framework across the blockchain layer, smart contracts, wallet integration, and cross-product token flows; the full economic model with allocation percentages, vesting schedules, utility mechanisms, and demand drivers; governance mechanisms covering proposals, voting rights, and governance evolution; and a phased roadmap from initial launch through full ecosystem maturity with clear milestones.",
      "What sets Minati apart is the breadth of its product suite. Rather than solving one problem well, it was designed to solve the entire journey of a digital asset user, from acquiring and storing assets to spending them in the real world and participating in a virtual economy. Eight products were built to reinforce one another in a self-reinforcing loop, all powered by MNTC: the Minati Blockchain, Minati Coin (MNTC), Minati Exchange, Minati Vault, Minati Crypto Cards, payment infrastructure, the NFT ecosystem, and the Minativerse. Usage of any single product increases demand and circulation of the native token, reinforcing the value of the whole system.",
      "The Minati Blockchain is the decentralised, Ethereum-compatible infrastructure layer that handles transaction validation, smart contract execution, and the core economic logic the rest of the ecosystem relies on. Minati Coin (MNTC) is the native asset and the fuel for every interaction across all eight products: it powers on-chain transactions across the exchange, wallet, payment, and NFT products; users stake it to earn ecosystem rewards, which creates long-term holding incentives and reduces circulating supply; and holders use it for governance, giving the community a direct voice in platform decisions.",
      "The Minati Exchange lets users trade and manage digital assets with ecosystem-native liquidity and a user-friendly interface for all skill levels, with MNTC as the base trading pair and fee token so trading activity creates organic token demand. The Minati Vault is a secure, non-custodial, multi-currency wallet for storing, sending, receiving, and managing assets, with multi-wallet compatibility and seamless integration into the exchange and payment products, making it the natural hub for all MNTC activity.",
      "To close the gap between digital assets and everyday spending, the Minati Crypto Card, available as both a physical and virtual card, converts MNTC and other digital assets into spendable currency at any merchant accepting standard payment networks. A merchant-facing payment infrastructure lets businesses accept MNTC and other cryptocurrencies for goods and services, creating a real-world demand layer where every merchant transaction becomes an ecosystem interaction. Together these products are central to Minati's differentiation, turning MNTC from a speculative asset into a genuinely spendable currency.",
      "Beyond financial infrastructure, Minati extends into digital ownership and immersive experiences. The NFT ecosystem is a fully integrated platform for creating, owning, trading, and monetising digital assets, where NFTs can represent virtual real estate, access passes, governance tokens, and revenue-generating assets, with MNTC powering every NFT transaction. The Minativerse is a virtual environment for digital ownership, social interaction, and commerce, where MNTC is the native currency and NFTs represent real ownership, positioning Minati at the intersection of DeFi, gaming, and the creator economy.",
      "On the brand side, we designed and developed a modern, responsive website that communicated the ecosystem's technical depth to sophisticated investors while staying accessible to newcomers. It was structured around the eight products, each with dedicated positioning, a top-level ecosystem architecture view, interactive tokenomics visualisation, and a phased roadmap. A central early decision shaped everything: Minati would never be positioned as just a cryptocurrency. We built a positioning framework anchored in ecosystem breadth and real-world utility, captured in one statement, a complete blockchain ecosystem where users can store, trade, spend, and grow digital assets through a unified Web3 infrastructure. That shift from token-first to ecosystem-first became the backbone of every piece of marketing, every social post, and every investor communication.",
      "Finally, we designed and executed a comprehensive 360-degree marketing strategy across four interconnected pillars: brand awareness, content marketing, social media marketing, and community building. Because in Web3 education is marketing, we produced a content library spanning blockchain fundamentals, Web3 adoption trends, ecosystem tutorials, and MNTC utility guides, calibrated for both crypto-native and mainstream audiences. We ran a community-first growth programme that treated users as stakeholders, with structured onboarding, regular ecosystem updates, engagement and rewards initiatives, retention strategies, and governance encouragement. Across Twitter, Telegram, and Discord we maintained consistent ecosystem updates and announcements, dedicated product-awareness campaigns for each of the eight products timed around milestones, and a separate investor-focused communication track, supported by a suite of investor materials including presentations, pitch decks, and ecosystem explainers.",
      "Every element of the technology stack was chosen for reliability, ecosystem compatibility, and long-term scalability: Ethereum with a standard ERC-20 token as the foundational layer, Solidity smart contracts for token logic, staking, governance, and NFT standards, multi-wallet compatibility including MetaMask for broad user access, modern responsive web technologies for the website, exchange, and vault interfaces, and a Web3 infrastructure layer for cross-product MNTC flows, dApp connectivity, and real-time blockchain data. Building on a standard ERC-20 implementation gave Minati immediate compatibility with the broadest possible range of wallets, exchanges, and DeFi protocols, dramatically reducing the time to initial ecosystem reach.",
    ],
    outcome: [
      "The breadth of what we delivered reflects the scale of the ambition. Across six areas, the work spanned blockchain development (ERC-20 token development, smart contract deployment, security-focused architecture, and ecosystem utility planning), tokenomics and economics (a full economic model covering allocation, vesting, utility mechanisms, and long-term sustainability), documentation (a comprehensive whitepaper, investor presentations, ecosystem explainers, and technical documentation), branding and design (positioning strategy, visual identity, UI and UX design, and ecosystem architecture planning), website development (full design and build with product showcases and responsive architecture), and 360-degree marketing (brand awareness, content marketing, social media management, community building, and growth campaigns).",
      "Through this end-to-end partnership, Minati was equipped with everything needed to compete at the highest level: a technically sound ERC-20 token with security-focused smart contract architecture, a sustainable tokenomics model built for long-term growth, professional investor documentation, a modern product-showcasing website, a cohesive brand identity anchored in ecosystem utility rather than speculation, and a comprehensive 360-degree marketing strategy that built awareness, educated users, and grew an active community across every relevant channel.",
      "The result, by the numbers: eight interconnected ecosystem products launched under a single brand and token economy, fifteen distinct services delivered from smart contract development to social media campaigns, and one unified Web3 economy built for long-term growth. Single-utility crypto projects are increasingly commoditised, and the projects that will define the next decade deliver genuine, interconnected utility across a user's whole digital life. Minati is now positioned not just to launch but to grow, a demonstration of what is possible when technical excellence and strategic marketing work in lockstep from day one.",
    ],
    bodyImages: [
      { kind: "Eight-product ecosystem architecture", ratio: "16/9", src: "https://media.worksbuddy.ai/1781098644511-f665ad25e21f-Inner_Minati_1.png?w=1200&h=675" },
      { kind: "Tokenomics and MNTC utility model", ratio: "16/9", src: "https://media.worksbuddy.ai/1781098674896-a05afdf053a0-Inner_Minati_2.png?w=1200&h=675" },
    ],
  },
  {
    slug: "poxscan",
    client: "PoxScan.io",
    service: "explorer",
    industry: "Layer 1 blockchain",
    region: "Global",
    problem:
      "PolluxChain was migrating from a Tron TRC-20 token to an independent Layer 1 and needed a production-grade explorer to prove its performance, support a zero-loss token swap, and earn market credibility.",
    approach:
      "We built PoxScan.io: a modern, multi-database blockchain explorer with a real-time migration dashboard, a developer-first API ecosystem, and Kubernetes auto-scaling.",
    headlineMetric: "50M tokens migrated from Tron to a new Layer 1 with zero losses",
    metrics: [
      { label: "Uptime since launch", value: "99.92%" },
      { label: "Token migration success rate", value: "99.7%" },
      { label: "Unique visitors in year one", value: "450K+" },
    ],
    timeline: "26 weeks (2023 to 2025)",
    techStack: [
      "React 18.2",
      "Next.js 13",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Framer Motion",
      "Node.js 18",
      "Express.js",
      "GraphQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "PostgreSQL",
      "Socket.io",
      "AWS",
      "Docker",
      "Kubernetes",
      "Cloudflare",
    ],
    teamSize: "Cross-functional blockchain team",
    quote: {
      text:
        "LBM Solutions delivered beyond our expectations. PoxScan.io isn't just a blockchain explorer, it's the cornerstone of our ecosystem. Their technical expertise, professional approach, and commitment to our success made this project a resounding success. The explorer played a crucial role in our mainnet migration and continues to be essential for our community and developers. We couldn't have asked for a better technology partner.",
      name: "PolluxChain Leadership Team",
      role: "PolluxChain",
    },
    weight: "md",
    heroKind: "PoxScan.io explorer",
    heroSrc: "https://media.worksbuddy.ai/1781096589129-da694849ae5e-2.png?w=2000&h=1123",
    challenge: [
      "PoxScan.io is the explorer at the centre of the PolluxChain ecosystem, built by LBM Solutions in Mohali, Punjab. PolluxChain began in 2021 as a Tron TRC-20 token and evolved into a Layer 1 blockchain using Delegated Proof-of-Stake, with a 50 million POX total supply, roughly 33 million circulating, and 27 elected Super Representatives. Every serious blockchain needs a reliable explorer; without one, PolluxChain would look incomplete or untrustworthy to developers, investors, and users.",
      "When PolluxChain approached LBM Solutions in mid-2023, they faced one of the hardest transitions in blockchain: migrating from a Tron TRC-20 token to an independent Layer 1. That required not just technical excellence but immediate credibility in a crowded market.",
      "Four challenges defined the work. Mainnet migration support, to execute a flawless token swap from TRC-20 to native POX with full transparency through the February 2024 window. Network credibility, demonstrating claimed performance of 2,000-plus TPS publicly through professional-grade infrastructure. Developer attraction, through a complete API ecosystem with documentation, SDKs, and tools. And user accessibility, with interfaces serving everyone from casual users checking balances to validators monitoring network health.",
    ],
    approachBody: [
      "We designed a performance-optimized, scalable architecture built to grow with PolluxChain. A user interface layer in React 18.2 and Next.js 13 with TypeScript, Tailwind CSS, Shadcn/ui, and Framer Motion. An Nginx API gateway with SSL termination, request routing, and rate limiting across multiple server instances. An application layer on Node.js 18 with Express.js, a continuous blockchain indexer, an analytics engine, and Elasticsearch-powered search. And a multi-database data layer using MongoDB for primary storage, Redis for caching, Elasticsearch for full-text search, and PostgreSQL for complex analytics.",
      "Infrastructure ran on AWS with Docker and Kubernetes, GitHub Actions CI/CD, and Prometheus and Grafana monitoring. Multi-layer caching across browser, CloudFront CDN, Redis, and MongoDB delivered 1.8-second load times, 40% faster than target and quicker than Etherscan's 2.1 seconds, while Socket.io WebSockets delivered real-time updates at just 85 milliseconds of latency.",
      "The explorer delivered comprehensive exploration for every stakeholder: a real-time block explorer with a live block feed; transaction tracking via universal search across hashes, blocks, and addresses; address analytics showing POX balance, bandwidth and energy resources, history, token holdings, staking, and voting activity; smart-contract verification that compiles submitted source, compares bytecode with the on-chain deployment, and exposes read and write interfaces; a token registry with price data and holder distribution; and a network-statistics dashboard tracking TPS, block time, active addresses, gas trends, and Super Representative performance.",
      "The API infrastructure was a cornerstone: RESTful endpoints, GraphQL for flexible queries, and WebSocket subscriptions for real-time data, with a generous free tier of 100 requests per minute and paid developer and enterprise plans. Documentation included interactive Swagger and OpenAPI specs, code examples in Python, JavaScript, Go, and Rust, video tutorials, and sample apps, with API responses averaging 180 milliseconds at the 95th percentile, 40% better than the 300-millisecond target.",
      "For the February 2024 migration we built a dedicated real-time dashboard. It tracked total supply migrated, addresses completed, pending migrations, and exchange status with live progress indicators; let users verify balances across both their Tron and PolluxChain addresses; and linked each TRC-20 burn transaction on Tron with its corresponding mint on PolluxChain for a complete, verifiable audit trail. The migration ran in four stages: pre-migration planning in January 2024, the migration window on February 10 and 11, mainnet launch on February 14, and trading resuming on February 15.",
      "Under the hood, Kubernetes auto-scaling held 3 to 10 API replicas, scaling at 70% CPU and 80% memory, behind an HAProxy load balancer with MongoDB replica sets, handling peak loads of 15,000 concurrent WebSocket connections and 750,000 daily API requests without degradation. Security followed a defense-in-depth model: Cloudflare Pro DDoS protection and WAF, TLS 1.3, input validation and Helmet.js headers, multi-tier API rate limiting and key authentication, MongoDB role-based access control, plus Prometheus, Grafana, ELK, and Sentry monitoring with regular audits, penetration testing, and Snyk dependency scanning.",
    ],
    outcome: [
      "The migration succeeded with zero losses. 49.85 million of 50 million POX migrated, a 99.7% success rate, 32,891 addresses migrated, zero tokens lost, and 100% balance accuracy. Trading resumed on schedule on February 15, 2024, and the migration tracker turned what could have been an anxious process into a transparent one, strengthening community trust.",
      "The explorer exceeded every target by an average of 40%. It achieved 99.92% uptime against a 99.5% goal, with only seven hours of annual downtime, zero data-loss incidents, and zero security breaches. In year one it drew 450,000+ unique visitors and 2.5 million total page views, registered 850+ API developers, and supported 125 dApp integrations, while processing 1.25 million transactions and tracking 45,320 active addresses and 33,176 token holders.",
      "Community sentiment was strong: 92% positive on Twitter, a 4.7 out of 5 community rating, and growing followings across Twitter, Telegram, Discord, and YouTube. For PolluxChain the business impact was concrete: greater transparency cut support tickets by 40%, the API ecosystem supported faster dApp launches, performance benchmarks strengthened market positioning, and improved trading visibility supported price discovery and liquidity. First-year ROI exceeded 400%, with more than $730K in ecosystem value generated, delivered on time in 26 weeks and within a $156K first-year budget.",
      "PoxScan.io continues to evolve through an ongoing partnership, with a roadmap covering mobile apps, AI-powered advanced analytics, enhanced DeFi dashboards, NFT galleries, governance portals, and white-label enterprise solutions, growing alongside the PolluxChain network it serves.",
    ],
    bodyImages: [
      { kind: "Solution architecture", ratio: "16/9", src: "https://media.worksbuddy.ai/1781098181009-0b72d96c5871-3.png?w=1200&h=675" },
      { kind: "Migration dashboard", ratio: "16/9", src: "https://media.worksbuddy.ai/1781098211614-6f63f0f08c6d-4.png?w=1200&h=675" },
    ],
  },
  {
    slug: "aimintz",
    client: "AiMintz",
    service: "web3",
    industry: "Multi-industry Web3",
    region: "Global",
    problem:
      "An ambitious founder vision for a multi-industry AI and blockchain ecosystem needed to become a structured, investor-ready platform.",
    approach:
      "We turned a raw concept into a full ecosystem: architecture, tokenomics, an investor-grade whitepaper, brand, website, and an AI platform plan.",
    headlineMetric: "Five industries unified under one AI-powered token economy",
    metrics: [
      { label: "Industry verticals unified under one token economy", value: "5" },
      { label: "Core deliverables delivered end to end", value: "14" },
      { label: "Unified AIM Token at the centre", value: "1" },
    ],
    timeline: "Full-spectrum strategic and creative engagement",
    techStack: [
      "Blockchain",
      "AI platform",
      "Tokenomics",
      "Whitepaper",
      "Brand and web",
      "Go-to-market",
    ],
    teamSize: "LBM strategy, design, and engineering team",
    quote: {
      text:
        "Our role was not simply to provide consulting services. It was to transform an ambitious idea into a structured, launch-ready ecosystem equipped with the strategy, branding, documentation, technology planning, and marketing foundation necessary for long-term success.",
      name: "LBM Solutions",
      role: "On the AiMintz engagement",
    },
    weight: "md",
    heroKind: "AiMintz ecosystem and brand",
    heroSrc: "https://media.worksbuddy.ai/1781097375028-6495609ba6c9-aimintz.png?w=2000&h=1123",
    challenge: [
      "AiMintz set out to build a blockchain-powered ecosystem that delivers genuine real-world utility across multiple industries through a single, intelligent token economy. This was not a speculative crypto project. The founders wanted a platform where blockchain and artificial intelligence work together to solve everyday challenges across education, healthcare, real estate, and entertainment, sectors chosen for their scale and their inefficiency, all unified under one framework: the AIM Token.",
      "The founders approached us with a high-level concept, a set of research documents, and a long-term vision that was rich in ambition but short on structure. Our mandate was to turn that vision into a cohesive, scalable, investor-ready ecosystem capable of supporting global adoption: structuring a fragmented concept, building investor-grade documentation and strategy, creating a digital presence and brand identity, and planning the AI platform architecture.",
      "Four strategic challenges had to be solved before a line of code or a single investor deck could matter. Defining real-world token utility, so the AIM Token had practical applications across four very different industries rather than existing only as a tradable asset. Building investor confidence, through professional documentation, transparent tokenomics, and a credible roadmap. Translating complex concepts across AI, blockchain, healthcare, education, and real estate into one accessible yet rigorous narrative. And establishing market credibility through a strong brand, a professional digital presence, and clear positioning in a crowded Web3 landscape.",
    ],
    approachBody: [
      "We worked as a full-spectrum strategic and creative partner, not a simple consultant. The work was organised across five pillars, each building on the last so that strategic clarity informed token design, which informed the whitepaper, which informed the brand and digital presence, which was unified by the AI platform vision.",
      "First we mapped the complete ecosystem. Before tokenomics or whitepapers, we needed clarity on how each vertical (education, healthcare, real estate, entertainment, and governance) would interact and connect to the AIM Token. Each vertical had its own personas, transaction types, and incentives, so the work was engineering genuine interdependencies where activity in one vertical contributes to token velocity and ecosystem health across the others. Governance and community participation were built in as a fifth pillar, aligning token holders with the long-term success of the platform and reducing the perception of centralised control.",
      "Second, we engineered token utility and tokenomics. Rather than positioning the AIM Token as a medium of exchange, we made it the central utility layer that powers every interaction across every vertical, which creates recurring demand rather than one-off trades. We defined concrete use cases: educational rewards for students who complete courses and hit milestones; healthcare payments that reduce reliance on traditional banking; real estate investment and tokenised ownership with faster settlement; everyday entertainment purchases from movie tickets to streaming and NFTs; and community governance where holders vote on proposals. A sustainable tokenomics framework was built to support growth, drive utility, and encourage long-term participation.",
      "Third, we produced an investor-grade whitepaper. We began with a structural audit of what the document had to accomplish for each audience: investors seeking ROI clarity and risk mitigation, technical reviewers evaluating architecture, community members seeking utility, and partners assessing credibility. The whitepaper covered the full ecosystem narrative and vision, token utility across all five verticals, tokenomics structure and distribution, a phased roadmap, the AI platform architecture, multi-industry use cases, the governance framework, and supporting diagrams, every section written to the standard of a Series A investment memorandum.",
      "Fourth, we designed and built the website and brand. The site had to make a complex multi-industry ecosystem immediately understandable to everyone from seasoned crypto investors to first-time users. The design language reflected the dual identity of blockchain precision and everyday accessibility, and was organised around ecosystem clarity, clear token utility presentation, milestone-driven roadmap visualisation, and dedicated investor engagement sections with whitepaper access and clear calls to action. It was built to modern Web3 standards: responsive, fast, and security-conscious.",
      "Fifth, we planned the AI platform architecture, a foundational layer rather than a cosmetic add-on. The vision is a multilingual, voice-enabled, conversational AI platform that serves as the primary interface to the ecosystem regardless of language, technical background, or device. We defined its core capabilities and integration points with the blockchain layer: conversational AI for accessing services, checking balances, and making transactions; voice interactions; full multilingual support for global audiences; and a seamless AI-to-blockchain data layer for real-time queries and wallet interactions.",
      "Each vertical was designed for genuine utility. Education uses an AI engine that adapts to each student's pace and goals, with personalised tutoring, exam preparation, progress analytics, and token rewards that build a self-reinforcing loop of engagement. Healthcare brings transparency and access through blockchain-enabled payments that reach unbanked populations, immutable transaction records, and AI-assisted service routing. Real estate introduces tokenised ownership and fractional participation, faster smart-contract settlement, and global access to a market the project frames as a $326 trillion asset class. Entertainment brings token utility into everyday life through movie tickets, streaming, live events, NFT experiences, and media partnerships.",
      "We also treated marketing and community growth as a first-class deliverable. We built a multi-channel framework around three objectives: establishing credibility, educating audiences, and building a loyal community of early adopters. It spanned Instagram education content, Telegram community management with a transparency-first voice, an X presence positioned within the wider AI and blockchain conversation, and a go-to-market plan covering blog content, influencer outreach, AMAs, press, and video, all underpinned by a content calendar, audience research, competitor analysis, and performance tracking.",
    ],
    outcome: [
      "At the close of the engagement, AiMintz had moved from concept to a structured, investor-ready, market-positioned ecosystem. We delivered across 14 categories spanning three areas: strategy and planning (blockchain ecosystem strategy, token utility framework, tokenomics planning, roadmap creation, and AI platform architecture planning); documentation and brand (the investor-grade whitepaper, website design and development, and brand identity design); and marketing and community (marketing strategy, social media framework, Telegram and X content planning, Instagram content strategy, a community-building framework, and go-to-market planning).",
      "The transformation shows in how the project can now present itself. Where there was an idea, there is a structured ecosystem with clearly defined utility across five verticals. Where there was ambition, there is a professional whitepaper that opens doors with serious investors. Where there was a concept, there is a brand, a website, a roadmap, a community strategy, and an AI platform vision, all pointing in the same direction. The result is strong ecosystem positioning, investor-ready documentation, scalable growth infrastructure, and a long-term adoption roadmap.",
      "This work represents the foundation phase, which is complete. The roadmap ahead moves through community and awareness building, the AIM Token launch supported by investor documentation and a market-ready narrative, AI platform build-out with industry integrations and strategic medical and real estate partnerships, and finally global scale with multi-region expansion and full multilingual AI deployment across all five verticals. AiMintz now starts from structural clarity, professional credibility, and strategic focus rather than from zero.",
    ],
    bodyImages: [
      { kind: "AIM Token ecosystem map", ratio: "16/9", src: "https://media.worksbuddy.ai/1781098442727-0393100d53b2-5.png?w=1200&h=675" },
      { kind: "Token utility and governance model", ratio: "16/9", src: "https://media.worksbuddy.ai/1781098506012-34115fc6dcee-6.png?w=1200&h=675" },
    ],
  },
];

export const SERVICES_IN_USE = Array.from(new Set(caseStudies.map((c) => c.service)));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function relatedCaseStudies(current: CaseStudy, limit = 2): CaseStudy[] {
  const sameService = caseStudies.filter((c) => c.slug !== current.slug && c.service === current.service);
  const sameIndustry = caseStudies.filter(
    (c) => c.slug !== current.slug && c.service !== current.service && c.industry === current.industry,
  );
  const rest = caseStudies.filter((c) => c.slug !== current.slug);
  const ordered = [...sameService, ...sameIndustry, ...rest];
  const seen = new Set<string>();
  const unique = ordered.filter((c) => (seen.has(c.slug) ? false : seen.add(c.slug)));
  return unique.slice(0, limit);
}
