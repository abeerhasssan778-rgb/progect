export function setupContact(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'contact-section';

  section.innerHTML = `
    <div class="section-container">
      <div class="section-header" data-animate data-index="0">
        <span class="section-label">Let's talk</span>
        <h2 class="section-title">Contact</h2>
      </div>

      <div class="contact-layout" data-animate data-index="1">
        <div class="contact-info">
          <p class="contact-tagline">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
          <div class="contact-links">
            <a href="mailto:abeerhs809@gmail.com" class="contact-link">
              <span class="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <span>abeerhs809@gmail.com</span>
            </a>
            <a href="https://github.com/abeerhassan" target="_blank" rel="noopener noreferrer" class="contact-link">
              <span class="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/abeerhassan" target="_blank" rel="noopener noreferrer" class="contact-link">
              <span class="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form class="contact-form" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label for="contact-name">Name</label>
              <input type="text" id="contact-name" name="name" placeholder="Your name" required />
              <span class="field-error" role="alert"></span>
            </div>
            <div class="form-field">
              <label for="contact-email">Email</label>
              <input type="email" id="contact-email" name="email" placeholder="your@email.com" required />
              <span class="field-error" role="alert"></span>
            </div>
          </div>
          <div class="form-field">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            <span class="field-error" role="alert"></span>
          </div>
          <button type="submit" class="btn btn-primary form-submit">Send Message</button>
        </form>

        <p class="form-success" style="display:none">Thank you! I'll be in touch soon.</p>
      </div>
    </div>
  `;

  container.appendChild(section);

  const form = section.querySelector<HTMLFormElement>('.contact-form')!;
  const success = section.querySelector<HTMLParagraphElement>('.form-success')!;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = form.querySelectorAll<HTMLSpanElement>('.field-error');
    errors.forEach((s) => { s.textContent = ''; });

    const nameEl = form.querySelector<HTMLInputElement>('#contact-name')!;
    const emailEl = form.querySelector<HTMLInputElement>('#contact-email')!;
    const msgEl = form.querySelector<HTMLTextAreaElement>('#contact-message')!;

    let valid = true;

    if (!nameEl.value.trim()) {
      nameEl.parentElement!.querySelector<HTMLSpanElement>('.field-error')!.textContent = 'Name is required';
      valid = false;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailEl.value.trim()) {
      emailEl.parentElement!.querySelector<HTMLSpanElement>('.field-error')!.textContent = 'Email is required';
      valid = false;
    } else if (!emailRe.test(emailEl.value.trim())) {
      emailEl.parentElement!.querySelector<HTMLSpanElement>('.field-error')!.textContent = 'Enter a valid email';
      valid = false;
    }
    if (!msgEl.value.trim()) {
      msgEl.parentElement!.querySelector<HTMLSpanElement>('.field-error')!.textContent = 'Message is required';
      valid = false;
    }

    if (valid) {
      form.style.display = 'none';
      success.style.display = 'block';
    }
  });
}
