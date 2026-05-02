export function setupHero(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'hero';
  section.className = 'hero-section';

  section.innerHTML = `
    <div class="hero-content">
      <p class="hero-eyebrow">Available for work</p>
      <h1 class="hero-name">Abeer Ali Hassan</h1>
      <p class="hero-subtitle">Front-End Developer <span class="hero-subtitle-amp">&amp;</span> UI/UX Designer</p>
      <div class="hero-actions">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-view-cv">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
          View CV
        </a>
        <a href="/cv.pdf" download="Abeer_Hassan_CV.pdf" class="btn btn-cv">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
      </div>
    </div>
    <div class="hero-scroll-hint" aria-hidden="true">
      <span>Scroll</span>
      <div class="hero-scroll-line"></div>
    </div>
  `;

  container.appendChild(section);

  setTimeout(() => section.classList.add('hero-visible'), 80);
}
