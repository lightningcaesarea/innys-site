const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.navbar nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Highlight the current page in the nav
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Gallery category filter (only present on gallery.html)
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length && galleryItems.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  });
}

// Contact form (static hosting — no backend, so just confirm submission)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    if (status) {
      status.textContent = "Thanks! This form isn't wired to a backend yet — reach out via the links above in the meantime.";
    }
    contactForm.reset();
  });
}
