/**
 * Validates whether an asset path is specified.
 * Works across local dev, node runtime, and edge/serverless environments (like Cloudflare Workers)
 * where local filesystem access via node:fs is not available because static files are served via CDN/ASSETS.
 */
export function assetExists(src: string | undefined | null): src is string {
  if (!src || typeof src !== "string" || src.trim() === "") return false;
  return src.startsWith("/") || /^https?:\/\//.test(src);
}
