/**
 * Voice sanitation for CMS-sourced text (D1). Em dashes are banned sitewide;
 * CMS titles, excerpts, and bodies still contain them. We fix at render and
 * scripts/voice-lint.mjs keeps them out of our own source.
 */

/** Replace em/en dashes used as separators with a comma; never touches code blocks. */
export function deDash(text: string): string {
  return text
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/,\s*,/g, ", ")
    .replace(/\s+,/g, ",");
}

/** Sanitize article HTML without altering <pre>/<code> contents. */
export function deDashHtml(html: string): string {
  const parts = html.split(/(<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>)/g);
  return parts.map((p, i) => (i % 2 === 1 ? p : deDash(p))).join("");
}
