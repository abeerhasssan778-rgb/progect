export function setupNav(container: HTMLElement): void {
  const header = document.createElement('header');
  header.className = 'nav-header';

  // Apply saved theme before render to avoid flash
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const isDark = (): boolean => {
    const t = document.documentElement.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  header.innerHTML = `
    <div class="nav-container">
      <a href="#hero" class="nav-logo" aria-label="Abeer Ali Hassan — home">Abeer Ali Hassan</a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="nav-actions">
        <button class="theme-toggle" aria-label="Toggle dark/light mode" title="Toggle theme">
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        </button>
        <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  container.prepend(header);

  // Update icon visibility based on current theme
  const updateThemeIcon = (): void => {
    const dark = isDark();
    const moon = header.querySelector<SVGElement>('.icon-moon')!;
    const sun = header.querySelector<SVGElement>('.icon-sun')!;
    moon.style.display = dark ? 'none' : 'block';
    sun.style.display = dark ? 'block' : 'none';
  };

  updateThemeIcon();

  // Theme toggle
  const themeBtn = header.querySelector<HTMLButtonElement>('.theme-toggle')!;
  themeBtn.addEventListener('click', () => {
    const dark = isDark();
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon();
  });

  // Scroll → glassmorphism
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger
  const hamburger = header.querySelector<HTMLButtonElement>('.nav-hamburger')!;
  hamburger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  header.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
