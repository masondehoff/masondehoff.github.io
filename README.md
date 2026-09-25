# masondehoff.github.io

Source for my personal resume/portfolio site, live at [masondehoff.github.io](https://masondehoff.github.io).

Built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion. Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # lint check
```

## Content

Resume content (experience, education, skills, projects, contact info) lives in `src/data/` as plain data, separate from the components that render it — update it there rather than editing components directly.
