# Yoganandh Madhuranthakam — personal website

A responsive, static portfolio for acoustics research and NVH engineering. Built with HTML, CSS, and a small amount of JavaScript; no build step or package installation is required.

## Preview

From this directory, run `python -m http.server 4173` and open http://localhost:4173.

## Edit content

- `index.html`: biography, research, publications, experience, education, and contact.
- `style.css`: layout, typography, colors, mobile and print styles.
- `script.js`: mobile navigation, active section, publication filtering, and year.
- `profile.jpg`: portrait, reused from the original repository.
- `images/inversion.jpg`: original research figure, reused from the repository.
- `images/wave-field.svg`: original decorative wave illustration; not a scientific simulation or measured result.
- `CV_Yoganandh_Madhuranthakam.pdf`: replacement CV supplied as CV (5).pdf, with no phone number or telephone link.

Publications are present in the HTML and remain readable without JavaScript. Update `data-category` for filters (`ultrasonics` or `dynamics`) and the displayed total when adding publications. Manuscripts in preparation are separate from published work. DOI links use the identifiers provided in the CV; publisher access policies may apply.

## Hosting

Compatible with GitHub Pages at `/Bio/` or another static host. All local links are relative. Publish the repository root using the existing GitHub Pages settings. `.nojekyll` prevents Jekyll processing. The legacy `education.html`, `research.html`, and `skills.html` URLs redirect to the corresponding sections.

No analytics, contact-form backend, or external JavaScript is used. Google Fonts supplies DM Sans and Manrope, with system fallbacks when unavailable.

## Content notes

The supplied CV is the source of professional details. The MSU Graduate Research Assistant end date remains “Present” as supplied, although the doctorate is dated August 2025; confirm that date before final publication. Full-paper PDFs are not included; publication links point to the supplied DOIs.

The design takes broad navigation and portfolio-structure inspiration from Brittany Chiang and Sunwoo Kang, with original styling, copy, and vector artwork.

## Research and industry imagery

The research section uses original figures extracted from the defense deck for immersion testing, the unified layered-wave model, and the reference-method fixture. A dedicated Industry section describes current NVH work. A separate master’s research feature explains SEA for rectangular duct breakout noise. Generated illustrations are labeled as conceptual. See ASSET_SOURCES.md for exact slide references and image-generation prompts.
