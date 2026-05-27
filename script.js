// Jasmis Website Redesign - JavaScript functions
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// JavaScript example 1: Lightbox image gallery
const galleryButtons = document.querySelectorAll('[data-lightbox]');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    if (!lightbox || !lightboxImage || !img) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    if (lightboxCaption) lightboxCaption.textContent = button.dataset.caption || img.alt;
    lightbox.classList.add('open');
    closeLightbox?.focus();
  });
});
function hideLightbox(){
  if (lightbox) lightbox.classList.remove('open');
}
closeLightbox?.addEventListener('click', hideLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) hideLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') hideLightbox();
});

// JavaScript example 2: Branch filter/search
const branchSearch = document.querySelector('#branchSearch');
const branchCards = document.querySelectorAll('.branch');
if (branchSearch) {
  branchSearch.addEventListener('input', () => {
    const searchValue = branchSearch.value.toLowerCase().trim();
    branchCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.hidden = !text.includes(searchValue);
    });
  });
}

// JavaScript example 3: Order estimate calculator
const orderForm = document.querySelector('#orderForm');
const orderTotal = document.querySelector('#orderTotal');
if (orderForm && orderTotal) {
  orderForm.addEventListener('input', () => {
    const meal = Number(orderForm.meal.value || 0);
    const quantity = Number(orderForm.quantity.value || 1);
    const delivery = Number(orderForm.delivery.value || 0);
    const total = (meal * quantity + delivery).toFixed(3);
    orderTotal.textContent = `BD ${total}`;
  });
}

// Contact form confirmation without alert messages
const contactForm = document.querySelector('#contactForm');
const successMessage = document.querySelector('#successMessage');
if (contactForm && successMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    successMessage.classList.add('show');
    contactForm.reset();
  });
}
