import { skillCategories } from '../data/skills.ts';

export function setupSkills(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'skills';
  section.className = 'skills-section';

  const groups = skillCategories.map((group, index) => `
    <div class="skill-group" data-animate data-index="${index}">
      <p class="skill-category">${group.category}</p>
      <ul class="skill-list" aria-label="${group.category} skills">
        ${group.skills.map((skill) => `<li class="skill-badge">${skill}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="section-container">
      <div class="section-header" data-animate data-index="0">
        <span class="section-label">What I work with</span>
        <h2 class="section-title">Skills</h2>
      </div>
      <div class="skills-grid">
        ${groups}
      </div>
    </div>
  `;

  container.appendChild(section);
}
