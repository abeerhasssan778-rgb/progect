# Implementation Tasks

## Tasks

- [x] 1. Project setup and global styles
  - [x] 1.1 Update `index.html` title and meta tags
  - [x] 1.2 Rewrite `src/style.css` with design tokens, resets, typography, and animation utilities
  - [x] 1.3 Create `src/data/projects.ts` with placeholder project data
  - [x] 1.4 Create `src/data/skills.ts` with skills data grouped by category

- [x] 2. Navigation component
  - [x] 2.1 Create `src/components/nav.ts` — renders fixed nav with logo and section links
  - [x] 2.2 Add scroll listener to apply backdrop blur class when scrolled
  - [x] 2.3 Add hamburger toggle for mobile viewports

- [x] 3. Hero section
  - [x] 3.1 Create `src/components/hero.ts` — full-viewport hero with name, subtitle, CTA
  - [x] 3.2 Add entrance animation via CSS class applied on mount

- [x] 4. Projects section
  - [x] 4.1 Create `src/components/projects.ts` — renders project cards from data
  - [x] 4.2 Add `data-animate` attributes for scroll-triggered stagger animation

- [x] 5. Skills section
  - [x] 5.1 Create `src/components/skills.ts` — renders grouped skill badges from data
  - [x] 5.2 Add `data-animate` attributes for scroll-triggered fade-in

- [x] 6. Contact section
  - [x] 6.1 Create `src/components/contact.ts` — email link, social links, contact form
  - [x] 6.2 Implement client-side form validation with inline error messages
  - [x] 6.3 Implement success confirmation state on valid submit

- [x] 7. Main entry and scroll animations
  - [x] 7.1 Rewrite `src/main.ts` to mount all components into `#app`
  - [x] 7.2 Implement `IntersectionObserver` for `data-animate` elements
