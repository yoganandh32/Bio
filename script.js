const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
const filters = document.querySelector('.publication-filters');
const publications = [...document.querySelectorAll('.publication')];
filters.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  publications.forEach(publication => {
    publication.hidden = button.dataset.filter !== 'all' && publication.dataset.category !== button.dataset.filter;
    if (!publication.hidden) visible++;
  });
  document.querySelector('#publication-count').textContent = `${visible} publications shown`;
});
const links = [...navigation.querySelectorAll('a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
let scheduled = false;
function updateActiveLink() {
  let current = null;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= 150) current = index;
  });
  links.forEach((link, index) => {
    if (index === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateActiveLink); }
}, { passive: true });
updateActiveLink();
document.querySelector('#year').textContent = new Date().getFullYear();
