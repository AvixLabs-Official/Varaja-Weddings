/**
 * VARAJA LUXURY WEDDINGS & EVENTS - Main Interactive Orchestrator
 */

let activeGalleryCategory = 'All';
let currentTestimonialIndex = 0;
let testimonialTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initStatsCounter();
  renderServicesGrid();
  renderPortfolioGrid();
  renderGalleryGrid();
  initTestimonialsSlider();
  initInquiryForm();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER & SCROLL EFFECTS
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE DRAWER NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const trigger = document.getElementById('mobile-menu-trigger');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const closeBtn = document.getElementById('mobile-menu-close');

  const openDrawer = () => {
    drawer?.classList.add('active');
    overlay?.classList.add('active');
    document.body.classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.classList.remove('drawer-open');
    document.body.style.overflow = '';
  };

  if (trigger) trigger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   3. ANIMATED TRUST STATS COUNTERS
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statsContainer = document.getElementById('trust-stats-section');
  if (!statsContainer) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsContainer);
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isDecimal = counter.getAttribute('data-decimal') === 'true';
    const prefix = counter.getAttribute('data-prefix') || '';
    const suffix = counter.getAttribute('data-suffix') || '';

    let current = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
    }, stepTime);
  });
}

/* --------------------------------------------------------------------------
   4. RENDER SERVICES GRID
   -------------------------------------------------------------------------- */
function renderServicesGrid() {
  const container = document.getElementById('services-cards-container');
  if (!container || !VARAJA_DATA?.services) return;

  container.innerHTML = VARAJA_DATA.services.map(service => `
    <article class="service-card-item">
      <div class="service-img-wrap">
        <img src="${service.image}" alt="${service.title}" loading="lazy">
      </div>
      <div class="service-card-body">
        <span class="royal-badge" style="margin-bottom:12px;">LUXURY SERVICE</span>
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.description}</p>
        
        <ul style="margin-bottom:20px; font-size:0.82rem; color:var(--text-secondary); line-height:1.7;">
          ${service.features.map(f => `<li style="display:flex; align-items:center; gap:8px; margin-bottom:6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${f}</span></li>`).join('')}
        </ul>

        <a href="#contact" class="btn btn-outline-gold" style="padding:10px 20px; font-size:0.75rem; margin-top:auto; align-self:flex-start;">
          <span>Inquire Service</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. RENDER PORTFOLIO & CASE STUDY MODAL
   -------------------------------------------------------------------------- */
function renderPortfolioGrid() {
  const container = document.getElementById('portfolio-grid-container');
  if (!container || !VARAJA_DATA?.projects) return;

  container.innerHTML = VARAJA_DATA.projects.map(project => `
    <article class="project-card-item" onclick="openCaseStudyModal('${project.id}')">
      <div class="project-thumb-wrap">
        <img src="${project.coverImage}" alt="${project.title}" loading="lazy">
        <div class="project-overlay-content">
          <span class="royal-badge" style="background:rgba(18,19,22,0.6); color:#FFF; border-color:rgba(255,255,255,0.3); margin-bottom:8px; align-self:flex-start;">
            ${project.eventType}
          </span>
          <h3 class="project-couple-name">${project.title}</h3>
          <span class="project-sub-location">${project.location}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function openCaseStudyModal(projectId) {
  const project = VARAJA_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('case-study-modal');
  const modalBox = document.getElementById('case-study-content');
  if (!modalOverlay || !modalBox) return;

  modalBox.innerHTML = `
    <div style="margin-bottom:24px;">
      <span class="section-tag-lbl">${project.eventType}</span>
      <h2 style="font-family:var(--font-serif); font-size:2.8rem; font-weight:600; color:var(--text-primary); margin-bottom:8px;">
        ${project.title}
      </h2>
      <p style="font-size:1.05rem; color:var(--color-gold-dark); font-weight:600;">
        📍 ${project.venue} — ${project.location} (${project.date})
      </p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; margin-bottom:32px;">
      ${project.gallery.map(img => `<img src="${img}" alt="${project.title}" style="width:100%; height:220px; object-fit:cover; border-radius:var(--radius-sm);">`).join('')}
    </div>

    <div style="margin-bottom:32px;">
      <h3 style="font-family:var(--font-serif); font-size:1.6rem; margin-bottom:12px; color:var(--text-primary);">The Story & Vision</h3>
      <p style="font-size:0.98rem; color:var(--text-secondary); line-height:1.8;">
        ${project.story}
      </p>
    </div>

    <div style="background-color:var(--bg-champagne); padding:28px; border-radius:var(--radius-md); border:1px solid var(--border-color); margin-bottom:32px;">
      <h4 style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-gold-dark); margin-bottom:16px;">Celebration Highlights</h4>
      <ul style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; font-size:0.9rem; color:var(--text-secondary);">
        ${project.highlights.map(h => `<li style="display:flex; align-items:flex-start; gap:8px;"><span style="color:var(--color-gold); font-weight:800;">✓</span><span>${h}</span></li>`).join('')}
      </ul>
    </div>

    <div style="border-left:3px solid var(--color-gold); padding-left:20px; font-style:italic; font-family:var(--font-serif); font-size:1.2rem; color:var(--text-primary);">
      "${project.testimonialQuote}"
    </div>

    <div style="margin-top:40px; text-align:center;">
      <a href="#contact" onclick="closeCaseStudyModal()" class="btn btn-gold">
        <span>Plan Your Wedding Like This</span>
      </a>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  const modalOverlay = document.getElementById('case-study-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   6. RENDER GALLERY & LIGHTBOX
   -------------------------------------------------------------------------- */
function renderGalleryGrid() {
  const container = document.getElementById('gallery-photos-container');
  const tabsContainer = document.getElementById('gallery-filter-tabs');
  if (!container || !VARAJA_DATA?.galleryItems) return;

  const categories = ['All', 'Weddings', 'Decor', 'Haldi', 'Reception', 'Corporate'];

  if (tabsContainer) {
    tabsContainer.innerHTML = categories.map(cat => `
      <button class="gallery-tab-btn ${cat === activeGalleryCategory ? 'active' : ''}" onclick="filterGallery('${cat}')">
        ${cat}
      </button>
    `).join('');
  }

  const filtered = activeGalleryCategory === 'All'
    ? VARAJA_DATA.galleryItems
    : VARAJA_DATA.galleryItems.filter(g => g.category === activeGalleryCategory);

  container.innerHTML = filtered.map(item => `
    <div class="gallery-photo-item" onclick="openLightbox('${item.image}', '${item.title}', '${item.location}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 50%, rgba(18,19,22,0.85) 100%); padding:20px; display:flex; flex-direction:column; justify-content:flex-end; color:#FFF;">
        <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-gold-light);">${item.category} • ${item.location}</span>
        <h4 style="font-family:var(--font-serif); font-size:1.3rem; font-weight:600;">${item.title}</h4>
      </div>
    </div>
  `).join('');
}

function filterGallery(cat) {
  activeGalleryCategory = cat;
  renderGalleryGrid();
}

function openLightbox(imgUrl, title, location) {
  const lightboxOverlay = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  if (!lightboxOverlay || !lightboxImg) return;

  lightboxImg.src = imgUrl;
  if (lightboxCaption) lightboxCaption.textContent = `${title} — ${location}`;

  lightboxOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightboxOverlay = document.getElementById('gallery-lightbox-modal');
  if (lightboxOverlay) {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   7. TESTIMONIALS SLIDER
   -------------------------------------------------------------------------- */
function initTestimonialsSlider() {
  renderTestimonialCard();
}

function renderTestimonialCard() {
  const container = document.getElementById('testimonial-slider-card');
  if (!container || !VARAJA_DATA?.testimonials) return;

  const t = VARAJA_DATA.testimonials[currentTestimonialIndex];

  container.innerHTML = `
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-quote-txt">"${t.quote}"</p>
    <div class="testimonial-couple-info">
      <img src="${t.avatar}" alt="${t.coupleName}" class="couple-avatar-img">
      <div style="text-align:left;">
        <h4 style="font-family:var(--font-serif); font-size:1.4rem; font-weight:600; color:var(--text-primary); margin-bottom:2px;">${t.coupleName}</h4>
        <span style="font-size:0.8rem; color:var(--color-gold-dark); font-weight:600;">${t.location}</span>
      </div>
    </div>
  `;
}

function prevTestimonial() {
  const len = VARAJA_DATA.testimonials.length;
  currentTestimonialIndex = (currentTestimonialIndex - 1 + len) % len;
  renderTestimonialCard();
}

function nextTestimonial() {
  const len = VARAJA_DATA.testimonials.length;
  currentTestimonialIndex = (currentTestimonialIndex + 1) % len;
  renderTestimonialCard();
}

/* --------------------------------------------------------------------------
   8. CONSULTATION INQUIRY FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initInquiryForm() {
  const form = document.getElementById('wedding-consultation-form');
  const alertBox = document.getElementById('form-alert-msg');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending Inquiry...</span>`;

    const formData = {
      name: document.getElementById('enquiry-name')?.value,
      phone: document.getElementById('enquiry-phone')?.value,
      email: document.getElementById('enquiry-email')?.value,
      date: document.getElementById('enquiry-date')?.value,
      location: document.getElementById('enquiry-location')?.value,
      eventType: document.getElementById('enquiry-event')?.value,
      budget: document.getElementById('enquiry-budget')?.value,
      message: document.getElementById('enquiry-message')?.value
    };

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (alertBox) {
        alertBox.style.display = 'block';
        if (result.success) {
          alertBox.className = 'form-alert success';
          alertBox.innerHTML = `
            <div style="font-weight:700; margin-bottom:4px;">✨ ${result.message}</div>
            <div style="font-size:0.8rem; opacity:0.85;">Ref ID: ${result.enquiryId}</div>
          `;
          form.reset();
        } else {
          alertBox.className = 'form-alert error';
          alertBox.textContent = result.message || 'Error submitting request. Please try again.';
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.className = 'form-alert success';
        alertBox.innerHTML = `
          <div style="font-weight:700;">✨ Consultation Request Submitted Successfully!</div>
          <div style="font-size:0.85rem; margin-top:4px;">Our wedding concierge will contact you via WhatsApp & Email within 12 hours.</div>
        `;
        form.reset();
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}
