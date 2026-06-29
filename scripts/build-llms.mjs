/**
 * Generates the LLM-readability layer from content/pages/*.md:
 *   public/llms.txt        - index for AI crawlers (llmstxt.org convention)
 *   public/llms-full.txt   - full page contents in one file
 *   public/<slug>.md       - markdown twin of each live page (url "/" -> index.md)
 * Run: npm run llms  (also runs on prebuild)
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "content/pages");
const PUB = join(ROOT, "public");
const BASE = "https://www.lbmsolution.com";

function parse(file) {
  const raw = readFileSync(join(SRC, file), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = Object.fromEntries(
    (m?.[1] ?? "").split("\n").map((l) => {
      const i = l.indexOf(":");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
  );
  return { ...fm, body: raw.slice(m?.[0].length ?? 0).trim() };
}

mkdirSync(PUB, { recursive: true });
const pages = readdirSync(SRC)
  .filter((f) => f.endsWith(".md"))
  .map(parse)
  .sort((a, b) => (a.url === "/" ? -1 : a.url.localeCompare(b.url)));

const intro = `# LBM Solutions

> Custom AI and blockchain engineering for B2B SaaS scale-ups and fintech teams (Series A to D), serving the US, UAE, Singapore, the UK, and clients worldwide. Production AI agents, custom software, and audited blockchain systems on a fixed scope.

Markdown versions of every page are available at the same path with .md (homepage: /index.md).
`;

writeFileSync(
  join(PUB, "llms.txt"),
  intro +
    "\n## Pages\n\n" +
    pages.map((p) => `- [${p.title}](${BASE}${p.url === "/" ? "" : p.url}): ${p.description}`).join("\n") +
    "\n\n## Contact\n\n- [Contact](" + BASE + "/contact): scope a build with the engineering team\n",
);

writeFileSync(
  join(PUB, "llms-full.txt"),
  intro + "\n" + pages.map((p) => `\n---\n\n# ${p.title}\nURL: ${BASE}${p.url}\n\n${p.body}`).join("\n"),
);

for (const p of pages) {
  const slug = p.url === "/" ? "index" : p.url.replace(/^\//, "").replace(/\//g, "-");
  writeFileSync(join(PUB, `${slug}.md`), `# ${p.title}\n\n${p.body}\n`);
}

console.log(`llms: ${pages.length} page(s) -> llms.txt, llms-full.txt, ${pages.length} md twin(s)`);
