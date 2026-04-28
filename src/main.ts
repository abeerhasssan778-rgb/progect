import './style.css';
import { setupNav } from './components/nav.ts';
import { setupHero } from './components/hero.ts';
import { setupProjects } from './components/projects.ts';
import { setupSkills } from './components/skills.ts';
import { setupContact } from './components/contact.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;

// Create semantic structure
const main = document.createElement('main');
const footer = document.createElement('footer');
footer.className = 'site-footer';
footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} Abeer Hassan</p>`;

// Mount nav into app (prepends itself)
setupNav(app);

// Mount sections into main
setupHero(main);
setupProjects(main);
setupSkills(main);
setupContact(main);

app.appendChild(main);
app.appendChild(footer);

// Scroll animations via IntersectionObserver
const animatedElements = document.querySelectorAll<HTMLElement>('[data-animate]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const index = parseInt(el.dataset['index'] ?? '0', 10);
        // Stagger delay based on index within its group
        el.style.transitionDelay = `${index * 100}ms`;
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.1 }
);

animatedElements.forEach((el) => {
  observer.observe(el);
});
