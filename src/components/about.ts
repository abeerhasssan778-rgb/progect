export function setupAbout(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about-section';

  section.innerHTML = `
    <div class="section-container">
      <div class="section-header" data-animate data-index="0">
        <span class="section-label">Who I am</span>
        <h2 class="section-title">About Me</h2>
      </div>

      <div class="about-text" data-animate data-index="1">
        <p>
          Information Engineer and UI/UX Designer with experience in customer service,
          CRM systems, and digital design. I combine a technical background with a passion
          for clean, user-friendly interfaces using Figma, Canva, and Photoshop.
        </p>
        <p>
          B.Sc. Information Engineering — University of Damascus (2016).
          Fluent in Arabic, good level of English.
        </p>
        <div class="about-stats">
          <div class="about-stat">
            <span class="about-stat-number">8+</span>
            <span class="about-stat-label">Years Experience</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-number">2</span>
            <span class="about-stat-label">Companies</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-number">2</span>
            <span class="about-stat-label">Languages</span>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(section);
}
