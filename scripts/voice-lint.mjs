/**
 * Voice lint (D1/D3): blocks em dashes and banned words in OUR source.
 * Blog scope fails the build; the rest of the repo warns (separate cleanup).
 * Run: node scripts/voice-lint.mjs   (wired into `npm run lint`)
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const BANNED = [
  "cutting-edge", "state-of-the-art", "world-class", "best-in-class", "pioneering",
  "renowned", "unparalleled", "revolutionary", "groundbreaking", "seamless",
  "holistic", "future-ready", "next-gen", "veteran team", "team of skilled experts",
  "extensive experience", "end-to-end solutions", "trusted partner", "unlock the power",
  "empower your business", "take your business to the next level", "fast-paced",
  "rapidly evolving landscape", "leverage our expertise", "one-stop solution",
  "results-driven", "client-centric", "Get Started", "Learn More", "Learn more",
  "Contact Us", "Free Consultation",
];
const STRICT = ["app/blog", "components/blog", "lib/blog", "lib/authors", "lib/voice", "content/pages"];
const SCAN = ["app", "components", "lib", "content"];
const EXT = /\.(tsx?|mjs|md|css)$/;

let errors = 0;
let warns = 0;

function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (EXT.test(e)) check(p);
  }
}

function check(file) {
  const src = readFileSync(file, "utf8");
  const strict = STRICT.some((s) => file.includes(s));
  const report = (line, msg) => {
    const tag = strict ? "ERROR" : "warn";
    console.log(`${tag} ${file}:${line} ${msg}`);
    if (strict) errors += 1;
    else warns += 1;
  };
  src.split("\n").forEach((l, i) => {
    // allow em dashes only in lint config itself and in code comments referencing the rule
    if (l.includes("—") && !file.endsWith("voice-lint.mjs") && !file.endsWith("voice.ts"))
      report(i + 1, "em dash");
    for (const b of BANNED) {
      if (file.endsWith("voice-lint.mjs")) continue;
      if (l.toLowerCase().includes(b.toLowerCase())) report(i + 1, `banned phrase: "${b}"`);
    }
  });
}

SCAN.forEach((d) => {
  try {
    walk(d);
  } catch {}
});

console.log(`voice-lint: ${errors} error(s), ${warns} warning(s)`);
if (errors > 0) process.exit(1);
