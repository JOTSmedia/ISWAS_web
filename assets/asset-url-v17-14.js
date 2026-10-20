/* Resolve site-relative assets from this module, including after client navigation. */
const siteRoot = new URL('../', import.meta.url);
export function assetPath(path) {
  const url = new URL(String(path).replace(/^\/+/, ''), siteRoot);
  return url.pathname + url.search + url.hash;
}
