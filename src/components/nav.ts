export function setupNav(container: HTMLElement): void {
  const header = document.createElement('header');
  header.className = 'nav-header';

  header.innerHTML = `
    <div class="nav-container">
      <a href="#hero" class="nav-logo">AH</a>
      <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="nav-links">
        <a href="#hero">Hero</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  `;

  container.prepend(header);

  // Scroll listener — adds 'scrolled' class for backdrop blur
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Hamburger toggle for mobile
  const hamburger = header.querySelector<HTMLButtonElement>('.nav-hamburger')!;
  hamburger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu when a nav link is clicked
  const navLinks = header.querySelectorAll<HTMLAnchorElement>('.nav-links a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
