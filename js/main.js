/**
 * BLUE ROSE PRODUCTION - Main Agency JavaScript
 * Clean, realistic wedding planner business site
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
  renderServicesGrid();
  renderWeddingsGrid();
  renderGalleryGrid();
  renderReviewsGrid();
  initContactForm();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   HERO AUTOMATIC IMAGE SLIDESHOW (5 High-Res Photos, 4s interval)
   -------------------------------------------------------------------------- */
const HERO_SLIDESHOW_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85"
];

let currentHeroIndex = 0;
let heroTimer = null;

function initHeroSlideshow() {
  const imgEl = document.getElementById('hero-slideshow-img');
  if (!imgEl) return;

  // Start automatic timer cycling every 4 seconds
  heroTimer = setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % HERO_SLIDESHOW_IMAGES.length;
    updateHeroSlide(currentHeroIndex);
  }, 4000);
}

function setHeroSlide(idx) {
  currentHeroIndex = idx;
  updateHeroSlide(currentHeroIndex);

  // Reset timer on manual dot click
  if (heroTimer) {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      currentHeroIndex = (currentHeroIndex + 1) % HERO_SLIDESHOW_IMAGES.length;
      updateHeroSlide(currentHeroIndex);
    }, 4000);
  }
}

function updateHeroSlide(idx) {
  const imgEl = document.getElementById('hero-slideshow-img');
  const dots = document.querySelectorAll('.hero-dot');
  if (!imgEl) return;

  imgEl.style.opacity = '0';
  setTimeout(() => {
    imgEl.src = HERO_SLIDESHOW_IMAGES[idx];
    imgEl.style.opacity = '1';
  }, 300);

  dots.forEach((dot, i) => {
    if (i === idx) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

/* Render Services Grid */
function renderServicesGrid() {
  const container = document.getElementById('services-grid-container');
  if (!container || !BLUEROSE_DATA?.services) return;

  container.innerHTML = BLUEROSE_DATA.services.map(s => `
    <article class="agency-service-card">
      <span class="service-num">${s.number}</span>
      <h3 class="service-title">${s.title}</h3>
      <span class="service-sub">${s.subtitle}</span>
      <p class="service-desc">${s.desc}</p>
      <a href="#contact" onclick="preselectService('${s.title}')" class="service-link">
        <span>Inquire Service</span>
        <span class="link-arrow">→</span>
      </a>
    </article>
  `).join('');
}

function preselectService(title) {
  const selectEl = document.getElementById('inquiry-service-select');
  if (selectEl) selectEl.value = title;
}

/* Render Selected Weddings Portfolio */
function renderWeddingsGrid() {
  const container = document.getElementById('weddings-grid-container');
  if (!container || !BLUEROSE_DATA?.weddings) return;

  container.innerHTML = BLUEROSE_DATA.weddings.map(w => `
    <article class="agency-wedding-card">
      <a href="#contact" onclick="preselectService('Wedding Case Study - ${w.title}')" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; height:100%;">
        <div class="wedding-img-box">
          <img src="${w.image}" alt="${w.title}" loading="lazy">
        </div>
        <div class="wedding-card-body">
          <span class="wedding-location">📍 ${w.location}</span>
          <h3 class="wedding-title">${w.title}</h3>
          <span class="wedding-type">${w.type}</span>
          <p class="wedding-snippet">${w.snippet}</p>
        </div>
      </a>
    </article>
  `).join('');
}

/* Render Visual Gallery */
function renderGalleryGrid() {
  const container = document.getElementById('gallery-grid-container');
  if (!container || !BLUEROSE_DATA?.gallery) return;

  container.innerHTML = BLUEROSE_DATA.gallery.map(g => `
    <div class="agency-gallery-item">
      <img src="${g.image}" alt="${g.caption}" loading="lazy">
      <div class="gallery-overlay">
        <span>${g.caption}</span>
      </div>
    </div>
  `).join('');
}

/* Render Client Reviews */
function renderReviewsGrid() {
  const container = document.getElementById('reviews-grid-container');
  if (!container || !BLUEROSE_DATA?.reviews) return;

  container.innerHTML = BLUEROSE_DATA.reviews.map(r => `
    <article class="agency-review-card">
      <div class="quote-mark-bg">“</div>
      <div class="review-header">
        <img src="${r.avatar}" alt="${r.couple}" class="review-avatar" loading="lazy">
        <div>
          <h4 class="review-couple">${r.couple}</h4>
          <span class="review-event">${r.event}</span>
        </div>
      </div>
      <p class="review-quote">"${r.quote}"</p>
      <div class="review-stars">★★★★★</div>
    </article>
  `).join('');
}

/* Contact Form Initialization */
function initContactForm() {
  const form = document.getElementById('agency-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inquiry-name')?.value || 'Valued Client';
    alert(`Thank you, ${name}! Your wedding consultation request has been received. The BLUE ROSE PRODUCTION team will get in touch with you shortly.`);
    form.reset();
  });
}

/* Mobile Menu Navigation Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navInline = document.querySelector('.knot-nav-inline');
  if (!toggleBtn || !navInline) return;

  toggleBtn.addEventListener('click', () => {
    navInline.classList.toggle('mobile-active');
  });

  const navLinks = navInline.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navInline.classList.remove('mobile-active');
    });
  });
}
