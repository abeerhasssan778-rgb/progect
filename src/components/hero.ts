export function setupHero(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'hero';
  section.className = 'hero-section';

  section.innerHTML = `
    <div class="hero-content">
      <h1 class="hero-name">Abeer Hassan</h1>
      <p class="hero-subtitle">Front-End Developer &amp; UI/UX Designer</p>
      <a href="#projects" class="hero-cta">View Work</a>
    </div>
  `;

  container.appendChild(section);

  // Entrance animation — apply class after short delay to trigger CSS transition
  setTimeout(() => {
    section.classList.add('hero-visible');
  }, 50);
}
