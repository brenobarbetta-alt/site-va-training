// ── Header: dark sobre hero, light ao rolar ──────
const header  = document.getElementById('header');
const logoImg = document.getElementById('nav-logo-img');
const heroEl  = document.getElementById('inicio');

const LOGO_DARK  = 'assets/logo-horizontal.jpg';
const LOGO_LIGHT = 'assets/logo-performance.jpg';

function updateHeader() {
  const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight - 80 : 300;
  const isLight    = window.scrollY > heroBottom;
  header.classList.toggle('light', isLight);
  if (logoImg) logoImg.src = isLight ? LOGO_LIGHT : LOGO_DARK;
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// ── Active nav link ──────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const y = window.scrollY + 100;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      const hit = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (hit) hit.classList.add('active');
    }
  });
}, { passive: true });

// ── Mobile menu ──────────────────────────────────
const toggle  = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  toggle.classList.toggle('open', open);
});

navMenu.querySelectorAll('.nav-link').forEach(l =>
  l.addEventListener('click', () => {
    navMenu.classList.remove('open');
    toggle.classList.remove('open');
  })
);

// ── Reveal ao rolar ──────────────────────────────
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el  = entry.target;
    const siblings = [...(el.parentElement?.querySelectorAll('.reveal:not(.in)') ?? [])];
    const delay = Math.max(0, siblings.indexOf(el)) * 80;
    setTimeout(() => el.classList.add('in'), delay);
    obs.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── WhatsApp flutuante ───────────────────────────
const waBtn  = document.getElementById('wa-btn');
const waOpts = document.getElementById('wa-opts');
let open = false;

waBtn.addEventListener('click', e => {
  e.stopPropagation();
  open = !open;
  waOpts.classList.toggle('open', open);
});

document.addEventListener('click', () => {
  if (open) { open = false; waOpts.classList.remove('open'); }
});
