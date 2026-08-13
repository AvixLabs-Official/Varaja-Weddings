/**
 * BLUE ROSE PRODUCTION - Master Interactive Orchestrator
 * Features Royal Venues, Budget Estimator, FAQs Accordion, and Shehnai Audio Toggle
 */

let activeGalleryCategory = 'All';
let currentTestimonialIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initStatsCounter();
  renderServicesGrid();
  renderPortfolioGrid();
  renderVenuesGrid();
  renderGalleryGrid();
  initTestimonialsSlider();
  initFaqsAccordion();
  initBudgetEstimator();
  initInquiryForm();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER & HERO INTERACTIVE STAGE
   -------------------------------------------------------------------------- */
const HERO_PHOTOS = [
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85", caption: "Udaipur • Royal Palace Mandap" },
  { url: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=1200&q=85", caption: "Goa • Sunset Beachfront Ceremony" },
  { url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85", caption: "Kolkata • Heritage Rajbari Courtyard" },
  { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85", caption: "Jaipur • Palatial Sangeet Gala" }
];

const HERO_SUBTITLES = {
  palace: "From Udaipur to Jodhpur, we orchestrate royal heritage weddings across India's most coveted palaces with authentic Zamindari & Marwari majesty.",
  beach: "Ethereal beachfront mandaps, sunset vows, and chic oceanfront galas at 5-star coastal resorts in Goa, Kerala & Bali.",
  heritage: "Restoring historic havelis and ancestral estates into intimate candlelit wedding venues rich in culture and timeless romance.",
  intimate: "Bespoke private luxury celebrations for 80 to 200 guests with personalized butler service, custom keepsakes, and fine gastronomy."
};

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

function switchHeroEventType(typeKey, element) {
  document.querySelectorAll('.hero-type-pill').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');

  const subElement = document.getElementById('hero-dynamic-sub');
  if (subElement && HERO_SUBTITLES[typeKey]) {
    subElement.style.opacity = '0';
    setTimeout(() => {
      subElement.textContent = HERO_SUBTITLES[typeKey];
      subElement.style.opacity = '1';
    }, 200);
  }
}

function switchHeroPhoto(index) {
  const mainImg = document.getElementById('hero-arch-img');
  const captionTxt = document.getElementById('hero-arch-caption');
  const dots = document.querySelectorAll('.hero-thumb-dot');

  if (!mainImg || !HERO_PHOTOS[index]) return;

  dots.forEach(d => d.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');

  mainImg.style.opacity = '0.3';
  setTimeout(() => {
    mainImg.src = HERO_PHOTOS[index].url;
    mainImg.style.opacity = '1';
    if (captionTxt) captionTxt.textContent = HERO_PHOTOS[index].caption;
  }, 250);
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

let activeServiceCategory = 'All Offerings';

/* --------------------------------------------------------------------------
   4. RENDER SERVICES GRID WITH CATEGORY TABS
   -------------------------------------------------------------------------- */
function renderServicesGrid() {
  const container = document.getElementById('services-cards-container');
  const tabsContainer = document.getElementById('service-category-tabs');
  if (!container || !VARAJA_DATA?.services) return;

  const categories = VARAJA_DATA.serviceCategories || ['All Offerings'];

  if (tabsContainer) {
    tabsContainer.innerHTML = categories.map(cat => `
      <button class="service-cat-btn ${cat === activeServiceCategory ? 'active' : ''}" onclick="filterServices('${cat}')">
        ${cat}
      </button>
    `).join('');
  }

  const filtered = activeServiceCategory === 'All Offerings'
    ? VARAJA_DATA.services
    : VARAJA_DATA.services.filter(s => s.category === activeServiceCategory);

  container.innerHTML = filtered.map((service, idx) => `
    <article class="service-card-item reveal-on-scroll stagger-delay-${(idx % 3) + 1}">
      <span class="service-card-num-badge">${service.number}</span>
      <div class="service-img-wrap">
        <img src="${service.image}" alt="${service.title}" loading="lazy">
      </div>
      <div class="service-card-body">
        <span class="service-card-subtitle">${service.subtitle}</span>
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.description}</p>
        
        <div class="service-deliverables-list">
          ${service.features.map(f => `
            <div class="service-deliverable-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" stroke-width="2.5" style="flex-shrink:0; margin-top:3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>

        <a href="#contact" onclick="preselectService('${service.title}')" class="btn btn-outline-gold" style="padding:12px 20px; font-size:0.75rem; margin-top:auto; align-self:stretch; justify-content:center;">
          <span>Inquire This Service</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </article>
  `).join('');

  initScrollAnimations();
}

function filterServices(cat) {
  activeServiceCategory = cat;
  renderServicesGrid();
}

function preselectService(serviceTitle) {
  const eventSelect = document.getElementById('enquiry-event');
  if (eventSelect) {
    for (let i = 0; i < eventSelect.options.length; i++) {
      if (eventSelect.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase()) || serviceTitle.toLowerCase().includes(eventSelect.options[i].text.toLowerCase())) {
        eventSelect.selectedIndex = i;
        break;
      }
    }
  }
}

/* --------------------------------------------------------------------------
   5. RENDER PORTFOLIO & CASE STUDY MODAL
   -------------------------------------------------------------------------- */
function renderPortfolioGrid() {
  const container = document.getElementById('portfolio-grid-container');
  if (!container || !VARAJA_DATA?.projects) return;

  container.innerHTML = VARAJA_DATA.projects.map((project, idx) => `
    <article class="project-card-item reveal-scale stagger-delay-${(idx % 3) + 1}" onclick="openCaseStudyModal('${project.id}')">
      <div class="project-thumb-wrap">
        <img src="${project.coverImage}" alt="${project.title}" loading="lazy">
        <div class="project-overlay-content">
          <span class="royal-badge" style="background:rgba(33,28,24,0.6); color:#FFF; border-color:rgba(255,255,255,0.3); margin-bottom:8px; align-self:flex-start;">
            ${project.eventType}
          </span>
          <h3 class="project-couple-name">${project.title}</h3>
          <span class="project-sub-location">${project.location}</span>
        </div>
      </div>
    </article>
  `).join('');

  initScrollAnimations();
}

/* --------------------------------------------------------------------------
   6. RENDER ROYAL VENUES SHOWCASE
   -------------------------------------------------------------------------- */
function renderVenuesGrid() {
  const container = document.getElementById('venues-cards-container');
  if (!container || !VARAJA_DATA?.venues) return;

  container.innerHTML = VARAJA_DATA.venues.map((v, idx) => `
    <article class="venue-card-item reveal-on-scroll stagger-delay-${(idx % 3) + 1}">
      <div class="venue-thumb-wrap">
        <img src="${v.image}" alt="${v.name}" loading="lazy">
        <span class="royal-badge" style="position:absolute; top:16px; left:16px; background:rgba(33,28,24,0.78); color:var(--color-gold-light); border-color:var(--color-gold);">
          ${v.badge}
        </span>
      </div>
      <div class="venue-card-body">
        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-gold-dark);">${v.type}</span>
        <h3 style="font-family:var(--font-serif); font-size:1.4rem; font-weight:600; color:var(--text-primary); margin:4px 0 12px;">${v.name}</h3>
        <div style="font-size:0.85rem; color:var(--text-secondary); display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid var(--border-color-light);">
          <span style="display:inline-flex; align-items:center; gap:6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${v.location}</span>
          </span>
          <span style="display:inline-flex; align-items:center; gap:6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
            <span>${v.capacity}</span>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  initScrollAnimations();
}

/* --------------------------------------------------------------------------
   7. CELEBRATION INVESTMENT CALCULATOR
   -------------------------------------------------------------------------- */
function initBudgetEstimator() {
  const guestsInput = document.getElementById('calc-guests');
  const daysInput = document.getElementById('calc-days');
  const tierInput = document.getElementById('calc-tier');
  const resultDisplay = document.getElementById('calc-result-val');

  if (!guestsInput || !daysInput || !tierInput || !resultDisplay) return;

  const calculateEstimate = () => {
    const guests = parseInt(guestsInput.value) || 250;
    const days = parseInt(daysInput.value) || 3;
    const tier = parseFloat(tierInput.value) || 1.0;

    // Base cost formula: Base ~ ₹12,000/guest/day * tier multiplier
    const totalMin = Math.round((guests * days * 11000 * tier) / 100000);
    const totalMax = Math.round((guests * days * 15000 * tier) / 100000);

    let formattedResult = `₹${totalMin} Lakhs – ₹${totalMax} Lakhs`;
    if (totalMin >= 100) {
      formattedResult = `₹${(totalMin / 100).toFixed(1)} Cr – ₹${(totalMax / 100).toFixed(1)} Cr`;
    }

    resultDisplay.textContent = formattedResult;
  };

  guestsInput.addEventListener('change', calculateEstimate);
  daysInput.addEventListener('change', calculateEstimate);
  tierInput.addEventListener('change', calculateEstimate);

  calculateEstimate();
}

/* --------------------------------------------------------------------------
   8. RENDER GALLERY & LIGHTBOX
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

  container.innerHTML = filtered.map((item, idx) => `
    <div class="gallery-photo-item reveal-on-scroll stagger-delay-${(idx % 3) + 1}" onclick="openLightbox('${item.image}', '${item.title}', '${item.location}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 50%, rgba(33,28,24,0.88) 100%); padding:20px; display:flex; flex-direction:column; justify-content:flex-end; color:#FFF;">
        <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-gold-light);">${item.category} • ${item.location}</span>
        <h4 style="font-family:var(--font-serif); font-size:1.3rem; font-weight:600;">${item.title}</h4>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
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
   9. FAQS ACCORDION
   -------------------------------------------------------------------------- */
function initFaqsAccordion() {
  const container = document.getElementById('faqs-accordion-container');
  if (!container || !VARAJA_DATA?.faqs) return;

  container.innerHTML = VARAJA_DATA.faqs.map((faq, idx) => `
    <div class="faq-item-box ${idx === 0 ? 'active' : ''}">
      <div class="faq-question-head" onclick="toggleFaqItem(this)">
        <span>${faq.q}</span>
        <div class="faq-toggle-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>
      <div class="faq-answer-body">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaqItem(element) {
  const item = element.parentElement;
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item-box').forEach(el => el.classList.remove('active'));

  if (!isActive) {
    item.classList.add('active');
  }
}

/* --------------------------------------------------------------------------
   10. TESTIMONIALS SLIDER
   -------------------------------------------------------------------------- */
function initTestimonialsSlider() {
  renderTestimonialCard();
}

function renderTestimonialCard() {
  const container = document.getElementById('testimonial-slider-card');
  if (!container || !VARAJA_DATA?.testimonials) return;

  const t = VARAJA_DATA.testimonials[currentTestimonialIndex];

  container.style.opacity = '0';
  container.style.transform = 'translateY(12px)';
  container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  setTimeout(() => {
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
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 150);
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
   11. CONSULTATION INQUIRY FORM SUBMISSION
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
          <div style="font-size:0.85rem; margin-top:4px;">Our event concierge will contact you via WhatsApp & Email within 12 hours.</div>
        `;
        form.reset();
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
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

    <div style="background-color:var(--bg-secondary); padding:28px; border-radius:var(--radius-md); border:1px solid var(--border-color); margin-bottom:32px;">
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
        <span>Plan Your Event Like This</span>
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
   12. INTERSECTION OBSERVER FOR SCROLL REVEALS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-in, .reveal-scale, .gold-divider');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}
