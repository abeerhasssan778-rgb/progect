import { projects } from '../data/projects.ts';

export function setupProjects(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'projects-section';

  const cards = projects
    .map(
      (project, index) => `
    <article class="project-card" data-animate data-index="${index}">
      <div class="project-card-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <ul class="project-tags" aria-label="Technologies used">
          ${project.tags.map((tag) => `<li class="project-tag">${tag}</li>`).join('')}
        </ul>
      </div>
      <a
        href="${project.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
        aria-label="View ${project.title} project"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    </article>
  `
    )
    .join('');

  section.innerHTML = `
    <div class="section-container">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        ${cards}
      </div>
    </div>
  `;

  container.appendChild(section);
}
