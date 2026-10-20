/* Hosting bootstrap: derive the site folder from this script, never a fixed domain. */
(() => {
  const base = new URL('../', document.currentScript.src).pathname;
  const path = location.pathname;
  let canonical = path.replace(/index\.html$/, '');
  if (!canonical.endsWith('/')) canonical += '/';
  if (canonical !== path) {
    location.replace(canonical + location.search + location.hash);
    return;
  }
  const route = canonical.slice(base.length).replace(/\/$/, '');
  const section = route !== '';
  window.__ISWAS_BASE = base;
  window.__ISWAS_ROUTE = section ? '/' + route : '/';
  window.__lockIndex = true;
  window.__wallReady = 0;
  window.__showLodge = false;
  window.__morganInitialAtLibrary = !section;
  if (!section && innerWidth < 768) {
    window.__morganInitialMobilePerch = true;
    document.documentElement.classList.add('morgan-mobile-intro');
  }
  window.__atLibrary = !section;
  if (section) {
    window.__loadN = 100;
    window.__shelvesFilled = true;
    window.__veilT = performance.now() - 8000;
    document.documentElement.classList.add('iswas-chrome');
  }
  ['plates/hitchcock.webp', 'plates/peele.webp', 'plates/lynch.webp'].forEach(file => {
    const image = new Image();
    image.src = base + file;
  });
})();
