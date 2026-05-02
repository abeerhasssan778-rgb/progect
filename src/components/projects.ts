import { projects } from '../data/projects.ts';

export function setupProjects(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'projects-section';

  const cards = projects.map((project, index) => `
    <article class="project-card" data-animate data-index="${index}">
      <div class="project-card-top">
        <span class="project-year">${project.year}</span>
        <a
          href="${project.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="project-arrow"
          aria-label="View ${project.title}"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="project-tags" aria-label="Technologies">
        ${project.tags.map((tag) => `<li class="project-tag">${tag}</li>`).join('')}
      </ul>
      <div class="project-links">
        <a
          href="${project.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn primary"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Live Demo
        </a>
        <a
          href="${project.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        </a>
      </div>
    </article>
  `).join('');

  section.innerHTML = `
    <div class="section-container">
      <div class="section-header" data-animate data-index="0">
        <span class="section-label">Selected Work</span>
        <h2 class="section-title">Projects</h2>
      </div>
      <div class="projects-grid">
        ${cards}
      </div>
    </div>
  `;

  container.appendChild(section);
}
