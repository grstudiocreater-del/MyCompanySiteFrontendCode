import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only: true when a local asset (e.g. "/images/products/x.webp") exists in /public.
 * Remote URLs are trusted as-is. Lets components show a placeholder instead of a broken image.
 */
export function assetExists(src: string | undefined): src is string {
  if (!src) return false;
  if (/^https?:\/\//.test(src)) return true;
  return existsSync(join(process.cwd(), "public", src));
}
