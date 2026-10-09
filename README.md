# Vishnu Bhargav Kotte — AI Engineering Portfolio

A single-page static site: `index.html`, `styles.css`, `script.js`, and `favicon.svg`. No framework, package manager, or build step.

## Run locally

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

Vercel serves the repository root as a static site. No build command or `vercel.json` is required.

## Maintenance notes

- **Résumé:** every résumé link has the class `resume-link` and points to `assets/Vishnu_Bhargav_Kotte_Resume.docx`. To switch to a PDF, add the PDF to `assets/` and replace that path in `index.html`.
- **GitHub:** link lists (`.link-list`) in the header, hero, contact section, and footer each contain a commented-out GitHub `<li>`. Uncomment them and insert the profile URL; the layout adapts to any number of links.
- **Canonical URL and social image:** commented placeholders in the `<head>` of `index.html`. Fill them in once the production URL is confirmed.
- **Diagrams:** inline SVGs share a visual language through the `.dg-*` classes in `styles.css`. Diagrams with a `diagram--wide` and `diagram--narrow` pair switch layouts on small screens.
