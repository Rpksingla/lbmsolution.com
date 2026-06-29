/**
 * Author roles and credentials (B5/C4). Real people only; values not yet
 * supplied by the founder stay as {{PLACEHOLDER}} and render only on the
 * article author block, never on index cards. Do not invent credentials.
 */

export type AuthorMeta = {
  role: string;
  credential?: string;
  /** bio or LinkedIn URL; omit until a real URL is supplied (no dead links) */
  link?: string;
};

export const AUTHOR_META: Record<string, AuthorMeta> = {
  "Manjit Parmar": {
    role: "{{PLACEHOLDER: role, e.g. Smart contract audit lead}}",
    credential: "{{PLACEHOLDER: e.g. audited contracts securing $Xm in TVL}}",
  },
  "Rahul Sharma": {
    role: "{{PLACEHOLDER: role}}",
    credential: "{{PLACEHOLDER: credential}}",
  },
};

export const isPlaceholder = (s?: string) => !s || s.includes("{{PLACEHOLDER");

/** Card-safe role: real roles only, otherwise the truthful generic. */
export function cardRole(name: string): string | null {
  const meta = AUTHOR_META[name];
  if (meta && !isPlaceholder(meta.role)) return meta.role;
  return "LBM Solutions engineering";
}
