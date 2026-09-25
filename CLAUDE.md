# masondehoff.github.io

Personal resume / portfolio single-page application, served at `https://masondehoff.github.io`.

## Stack

- Vite + React + TypeScript
- Tailwind CSS for styling
- Framer Motion for animation
- Deployed via GitHub Actions to GitHub Pages (not the "deploy from branch" method — Pages source is set to "GitHub Actions" in repo settings)

## Structure

- `src/data/` — all resume content (experience, education, skills, projects, contact info) as typed data, kept separate from presentation components so content can be updated without touching layout/animation code.
- `src/components/` — presentational/section components (Hero, About, Experience, Projects, Skills, Contact, etc.)
- `.github/workflows/` — CI build + Pages deploy workflow, triggers on push to `main`.

## Content status

Resume content is currently **placeholder data**, not Mason's real work history/education/projects/contact info. Do not treat placeholder content (e.g. example emails, generic project descriptions) as real, and flag it clearly if asked to "finalize" or ship the site — real content needs to be swapped in first.

## Conventions

- No comments unless explaining a non-obvious WHY (a workaround, a subtle constraint) — never restate what the code does.
- Functional components + hooks only, no class components.
- Styling via Tailwind utility classes; avoid introducing a second styling system (CSS modules, styled-components, etc.).
- Respect `prefers-reduced-motion` in animations — Framer Motion variants should degrade gracefully rather than being skipped entirely.
- Keep content data and layout/animation logic separate (see Structure above) — this is a design decision the user cares about, not incidental structure.

## Before calling a task done

- `npm run build` must succeed (catches TS errors too, since `tsc` runs as part of build).
- `npm run lint` should be clean.
- For visual/animation changes, actually look at the page (dev server / browser) rather than relying on the build passing — a green build does not mean the design looks right.

## Git operations

The user handles all commits and pushes themselves — this has no exceptions, including if asked directly to "commit this" or "push this." Never run `git commit`, `git push`, `git add`, or any other command that stages or stores changes. Read-only git commands (`status`, `log`, `diff`, `show`, `blame`, etc.) are fine and encouraged for understanding context. When help is wanted, provide commit message text or a plan of what to do, and let the user run the actual commands.

## Deployment

Push to `main` triggers the GitHub Actions workflow, which builds the app and deploys the `dist/` output to GitHub Pages. There is a one-time manual step (already done, or to confirm if the site isn't updating): repo Settings → Pages → Build and deployment → Source = "GitHub Actions".
