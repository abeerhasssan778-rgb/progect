import './style.css';
import { setupNav } from './components/nav.ts';
import { setupHero } from './components/hero.ts';
import { setupAbout } from './components/about.ts';
import { setupProjects } from './components/projects.ts';
import { setupSkills } from './components/skills.ts';
import { setupContact } from './components/contact.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;

// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.setAttribute('aria-hidden', 'true');
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`;
}, { passive: true });

// Semantic structure
const main = document.createElement('main');
const footer = document.createElement('footer');
footer.className = 'site-footer';
footer.innerHTML = `
  <div class="footer-inner">
    <span class="footer-logo">Abeer Ali Hassan</span>
    <p>&copy; ${new Date().getFullYear()} Abeer Ali Hassan. All rights reserved.</p>
  </div>
`;

setupNav(app);
setupHero(main);
setupAbout(main);
setupProjects(main);
setupSkills(main);
setupContact(main);

app.appendChild(main);
app.appendChild(footer);

// IntersectionObserver for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const idx = parseInt(el.dataset['index'] ?? '0', 10);
        el.style.transitionDelay = `${idx * 80}ms`;
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
  observer.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll<HTMLElement>('section[id]');
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => navObserver.observe(s));
