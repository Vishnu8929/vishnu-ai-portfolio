const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('site-menu');
const navItems = [...document.querySelectorAll('.nav-links a')];

// Mobile menu
const setMenu = (open, { restoreFocus = false } = {}) => {
  menu.classList.toggle('is-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  if (!open && restoreFocus) menuBtn.focus();
};

menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));

menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') setMenu(false, { restoreFocus: true });
});

document.addEventListener('click', (e) => {
  if (menuBtn?.getAttribute('aria-expanded') === 'true' && !e.target.closest('.site-header')) setMenu(false);
});

window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

// Reveal sections once as they scroll into view
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Highlight the nav link for the section in view
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navItems.forEach(item => {
      if (item.getAttribute('href') === `#${entry.target.id}`) item.setAttribute('aria-current', 'location');
      else item.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-35% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

// Only animate diagrams while they are on screen
const diagramObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => entry.target.classList.toggle('is-running', entry.isIntersecting));
});
document.querySelectorAll('.diagram').forEach(el => diagramObserver.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
