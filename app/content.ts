export const email = "kabufredrick9@gmail.com";

export const skills = [
  "Solidity",
  "Move",
  "Rust",
  "Foundry",
  "Hardhat",
  "TypeScript",
  "EVM",
  "Sui",
  "Hedera",
  "Monad",
  "Chainlink",
  "ERC-4337",
  "Haskell",
  "Node.js",
];

export const projects = [
  {
    name: "Vigil",
    href: "https://github.com/U-GOD/vigil",
    stack: ["Solidity", "Monad", "Foundry"],
    summary:
      "A clearing protocol for the hours equity markets are closed. Closure Notes are minted in pairs: two fully collateralized tokens that split a capped close-to-open return. The vault holds one unit of collateral per pair, and settlement uses the official opening print.",
  },
  {
    name: "SuiIntents",
    href: "https://github.com/U-GOD/Intent",
    stack: ["Move", "Sui", "DeepBook"],
    summary:
      "Users sign the trade they want, not a route. Solvers compete in a Dutch auction and settle in one Programmable Transaction Block against DeepBook V3. The solver pays the gas, and the intent stays out of the public mempool until execution.",
  },
  {
    name: "ClaimState",
    href: "https://github.com/U-GOD/ClaimState",
    stack: ["Hedera", "TypeScript", "Solidity"],
    summary:
      "A privacy-preserving obligation lifecycle. Invoice terms stay off-chain; Hedera stores a Merkle root and a blind commitment. Funding and the reservation lock land in one batch, so a second financier reverts without learning who holds the slot.",
  },
  {
    name: "StableGuard",
    href: "https://github.com/U-GOD/StableGuard",
    stack: ["Solidity", "Chainlink", "Foundry"],
    summary:
      "Chainlink CRE workflows that score USDC and USDT reserves against GENIUS Act checks: backing ratio, permitted assets, rehypothecation, and audit freshness. Reports are written to a ComplianceOracle on Sepolia, and a second workflow grades the alert.",
  },
  {
    name: "Cascading Revocation",
    href: "https://github.com/U-GOD/cascading-revocation-network",
    stack: ["Solidity", "ERC-8004", "EIP-7702"],
    summary:
      "Hierarchical permissions for agents. A master agent re-delegates to children, and one revokeAllChildren call tears the tree down instead of one transaction per grant. Built around an ERC-8004 registry and an EIP-7702 batch controller.",
  },
  {
    name: "HieroBlockBridge",
    href: "https://github.com/U-GOD/hiero-block-bridge",
    stack: ["TypeScript", "HIP-1056", "Hedera"],
    summary:
      "A library for the Mirror Node to Block Node transition. It mocks HIP-1056 block streams locally, falls back to the Mirror Node REST API, and scans a codebase for Hedera APIs that are going away. Installed as a package, not shipped as an app.",
  },
];

export const experience = [
  {
    dates: "Dec 2025 - Jan 2026",
    role: "Blockchain Developer",
    org: "Velsync",
    summary:
      "Smart contract internship. Solidity and Foundry, reading an existing protocol codebase, and writing tests around the paths that move value.",
  },
];
