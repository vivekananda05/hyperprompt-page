// ---- Copy BibTeX ----
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const text = document.getElementById('bibtex').innerText;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    }
    copyBtn.textContent = 'Copied ✓';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = 'Copy';
      copyBtn.classList.remove('copied');
    }, 1800);
  });
}

// ---- Reveal sections on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .tldr-strip').forEach(el => observer.observe(el));

// ---- Active nav link highlight ----
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href')));

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((sec) => {
    if (sec && window.scrollY >= sec.offsetTop - 120) current = '#' + sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === current ? 'var(--text)' : '';
  });
});
