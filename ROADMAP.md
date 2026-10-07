# Portfolio Redesign 2026 — Roadmap

This document is the **source of truth** for the modernization of Daniel García's personal portfolio hosted at:

- https://danieldge.github.io/
- Repository: `DanielDGe/danieldge.github.io`

It should be updated as work progresses so that the current state, decisions, pending work and completed milestones remain clear.

---

## Current status

**Project status:** Planning  
**Current public site:** Legacy portfolio  
**Current source branch:** `main`  
**Current deployment branch:** `gh-pages`  
**Target stack:** React + Vite  
**Target deployment:** GitHub Actions + GitHub Pages

The current portfolio was originally created with Create React App and deployed using the `gh-pages` npm package.

The redesign will preserve the existing repository and public URL while replacing the legacy implementation with a modern portfolio.

---

## Core decisions

- Keep the repository name `DanielDGe/danieldge.github.io`.
- Keep the public URL `https://danieldge.github.io/`.
- Preserve the old portfolio in a dedicated legacy branch before replacing the current source.
- Develop the new portfolio in a separate feature branch.
- Keep the existing `gh-pages` branch untouched while the new portfolio is under development.
- Replace Create React App with React + Vite.
- Replace the manual `gh-pages -d build` deployment with GitHub Actions once the new portfolio is ready.
- Do not expose unnecessary personal information such as a public phone number.
- Do not publish a downloadable CV containing excessive personal information.
- Prefer current, representative projects over older tutorial or university exercises.

---

# Roadmap

## Phase 1 — Repository preparation

**Status:** ⬜ Pending

### Tasks

- [ ] Create `legacy-portfolio-2022` from the current legacy source.
- [ ] Create `feature/portfolio-redesign-2026`.
- [ ] Confirm `gh-pages` remains unchanged.
- [ ] Confirm the current public site still works.
- [ ] Establish the new feature branch as the active development branch.

### Exit criteria

- Legacy source is safely preserved.
- New work can proceed without affecting the current production portfolio.

---

## Phase 2 — Modernize the technical foundation

**Status:** ⬜ Pending

### Tasks

- [ ] Replace Create React App with Vite.
- [ ] Keep React as the frontend framework.
- [ ] Remove obsolete CRA files and dependencies.
- [ ] Remove the old `gh-pages` npm deployment configuration from the new implementation.
- [ ] Remove obsolete Bootstrap/jQuery/Popper integration.
- [ ] Define a clean project structure for:
  - components
  - sections
  - assets
  - data/content
  - styles
- [ ] Confirm local development works with:
  - `npm install`
  - `npm run dev`
- [ ] Confirm production build works with:
  - `npm run build`

### Exit criteria

- Modern Vite-based application runs locally.
- Build completes without errors.
- Legacy application code is no longer required by the new implementation.

---

## Phase 3 — Define the visual system and layout

**Status:** ⬜ Pending

### Planned sections

- [ ] Navigation
- [ ] Hero
- [ ] About
- [ ] Experience
- [ ] Tech stack
- [ ] Featured projects
- [ ] Education
- [ ] Contact
- [ ] Footer

### Visual requirements

- [ ] Modern professional software-engineering aesthetic.
- [ ] Responsive desktop / tablet / mobile layout.
- [ ] Dark and light mode.
- [ ] Clear typography and visual hierarchy.
- [ ] Subtle animations and motion.
- [ ] Consistent cards, spacing, borders and accent colors.
- [ ] Avoid excessive effects or decorative clutter.

### Exit criteria

- Main layout and visual language are defined.
- All major sections have an approved structure.

---

## Phase 4 — Update professional content

**Status:** ⬜ Pending

### Profile

- [ ] Update professional headline and introduction.
- [ ] Reflect current Software Engineer / Programmer Analyst profile.
- [ ] Highlight backend and frontend experience.
- [ ] Highlight architecture and systems integration interests.

### Current technologies

Prioritize representative technologies such as:

- Java 17
- Spring Boot
- React
- Material UI
- C#
- ASP.NET Core
- Angular
- TypeScript
- PostgreSQL
- MariaDB / MySQL
- Oracle
- RabbitMQ
- Keycloak
- Docker
- Git / GitLab
- GitHub Actions
- Maven

Avoid percentage-based skill bars.

### Experience

- [ ] ZTECH SOLUTIONS | Grupo ZM S.A.
- [ ] Tigo Panamá.
- [ ] Universidad Tecnológica de Panamá technical support experience.
- [ ] Keep descriptions professional and avoid exposing internal or sensitive project details.

### Education

- [ ] B.Sc. in Software Development.
- [ ] Specialization in Software Engineering.
- [ ] M.Sc. in Software Engineering.
- [ ] M.Sc. in Higher Education Teaching — in progress.
- [ ] Teaching degree / previous relevant education where appropriate.

### Privacy

- [ ] Remove public phone number.
- [ ] Avoid exposing unnecessary personal documents.
- [ ] Do not restore the old downloadable CV PDF.
- [ ] Prefer LinkedIn / GitHub / email contact actions.

### Exit criteria

- Portfolio content accurately represents Daniel's 2026 profile.
- No obsolete or unnecessarily sensitive information remains.

---

## Phase 5 — Featured projects

**Status:** ⬜ Pending

### Priority projects

#### Task Manager Full Stack
- [ ] Add as a primary public project.
- [ ] Java 17 / Spring Boot / React / PostgreSQL.
- [ ] Mention Keycloak, OpenID Connect, JWT, Flyway, Docker and automated tests where useful.
- [ ] Link public repository.

#### FleetPulse
- [ ] Add as a featured private project.
- [ ] Describe architecture and technologies without exposing private source code.
- [ ] ASP.NET Core / Angular / MQTT / SignalR / PostgreSQL / PostGIS / observability stack.
- [ ] No private repository link.

#### Digital Portfolio — Higher Education Assessment
- [ ] Add as a current React/Vite/Material UI project.
- [ ] Mention responsive navigation, themes, reading progress and custom PDF viewer.
- [ ] Link public repository if retained as public.

#### Professional Portfolio
- [ ] The redesigned portfolio itself may be represented as a project after launch.

### Later enhancement

- [ ] Add project screenshots.
- [ ] Add short demos / GIFs where they improve the experience.

### Exit criteria

- Featured projects represent current technical ability rather than old exercises.

---

## Phase 6 — Technical polish

**Status:** ⬜ Pending

### SEO and metadata

- [ ] Replace generic `Portfolio` title.
- [ ] Add meaningful meta description.
- [ ] Add Open Graph metadata.
- [ ] Add social preview image.
- [ ] Update favicon and application metadata.
- [ ] Review robots metadata.

### Quality

- [ ] Accessibility review.
- [ ] Keyboard navigation.
- [ ] Semantic HTML.
- [ ] Color contrast.
- [ ] Reduced-motion support where appropriate.
- [ ] Optimize images and assets.
- [ ] Check external links.
- [ ] Remove dead code and obsolete assets.
- [ ] Remove obsolete CRA test/template files.
- [ ] Review bundle size and runtime performance.

### Exit criteria

- Portfolio is polished, accessible, performant and ready for production.

---

## Phase 7 — GitHub Pages deployment modernization

**Status:** ⬜ Pending

### Tasks

- [ ] Add GitHub Actions workflow for Vite build.
- [ ] Configure GitHub Pages deployment using Actions.
- [ ] Validate production build artifact.
- [ ] Merge approved redesign into `main`.
- [ ] Switch GitHub Pages deployment to GitHub Actions.
- [ ] Confirm `https://danieldge.github.io/` serves the new portfolio.
- [ ] Test direct navigation and refresh behavior.

### Exit criteria

- Every approved update to `main` can deploy automatically.
- Public URL remains unchanged.
- New portfolio is live and stable.

---

## Phase 8 — Legacy cleanup and documentation

**Status:** ⬜ Pending

### Tasks

- [ ] Confirm production is stable before removing anything.
- [ ] Keep `legacy-portfolio-2022` as historical backup.
- [ ] Delete the old `gh-pages` branch only after the new deployment is confirmed.
- [ ] Remove obsolete deployment dependencies and scripts.
- [ ] Replace the default Create React App README with project documentation.
- [ ] Document local development and deployment.
- [ ] Verify links from GitHub profile and LinkedIn.

### Exit criteria

- Repository contains a clean modern source tree.
- Legacy version remains recoverable.
- Deployment and development instructions are documented.

---

# Development workflow

The redesign will be implemented incrementally.

For each step:

1. Implement a focused change on `feature/portfolio-redesign-2026`.
2. Push the change to GitHub.
3. Pull the branch locally.
4. Run and test the portfolio locally.
5. Review screenshots / behavior.
6. Apply corrections.
7. Mark the corresponding roadmap items as complete.
8. Continue to the next milestone.

The public production site should remain unchanged until the redesign has been reviewed and approved.

---

# Progress log

## 2026-10-06

- Reviewed the legacy repository and deployment approach.
- Confirmed Create React App implementation.
- Confirmed `gh-pages` deployment using `gh-pages -d build`.
- Confirmed branches `main` and `gh-pages`.
- Identified obsolete content, metadata, dependencies and portfolio projects.
- Confirmed the repository and public GitHub Pages URL will be preserved.
- Defined the redesign roadmap.
