ISWAS v17.14 — PORTABLE STATIC RELEASE

This is the finished static website. No install or build step is required.
Extract the archive and upload its CONTENTS into the publishing folder; index.html
must be at the root of that folder. Keep every asset folder and .nojekyll.
Do not upload the ZIP itself as the website.

GitHub Pages: publish main / (root), if that is your chosen branch-based source.
Keep CNAME containing itstartedwithascream.com for the existing custom domain.
Use Settings > Pages to confirm the publishing source and custom domain, finish
certificate provisioning, then enable Enforce HTTPS.

The same assets work at a domain root or any subfolder, including /ISWAS_web/.
GitHub redirects its project URL to the custom domain while that domain is configured.
To publish an independent project-URL-only copy, clear that copy's Pages custom-domain
setting and omit its CNAME. CNAME is hosting configuration, not an asset path.

Use HTTP(S); double-clicking index.html as a file is unsupported because of ES modules.
The 3D gallery needs WebGL. The presentation and recovery controls remain available
when browser graphics cannot start. Fonts, images, audio, and modules are local.
Social sharing metadata deliberately uses the official absolute HTTPS domain.

Changes: site base detected from the hosting script; one module-based asset resolver;
57 root-style asset literals made relative; gallery navigation fallback respects the
site folder; canonical static links; restored .nojekyll; v17.14 module/CSS names prevent
mixing cached releases; removed macOS metadata. Existing WebP and local font assets
are retained. No external runtime or server rewrite is required for the seven pages.

See the separate diagnosis and upload guide for hosting findings and validation.
