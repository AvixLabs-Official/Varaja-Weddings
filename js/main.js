/**
 * BLUE ROSE PRODUCTION - Master Interactive Agency Orchestrator
 */

let currentTotalBudgetLakhs = 50;

document.addEventListener('DOMContentLoaded', () => {
  renderServicesGrid();
  renderVenuesGrid();
  renderTestimonialsGrid();
  renderChecklist();
  renderBudgetCalculator();
  renderRegistryGrid();
  renderRealWeddingsGrid();
  initInquiryForm();
});

/* --------------------------------------------------------------------------
   1. RENDER AGENCY SERVICES & CAPABILITIES
   -------------------------------------------------------------------------- */
function renderServicesGrid() {
  const container = document.getElementById('agency-services-container');
  if (!container || !BLUEROSE_DATA?.services) return;

  container.innerHTML = BLUEROSE_DATA.services.map(s => `
    <article class="knot-portal-card" style="align-items:flex-start; text-align:left;">
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:16px;">
        <div class="knot-portal-icon-wrap" style="margin-bottom:0;">
          ${s.icon}
        </div>
        <span style="font-family:var(--font-serif); font-size:1.4rem; font-weight:700; color:var(--knot-coral);">${s.number}</span>
      </div>
      <h3 class="knot-portal-title" style="font-size:1.3rem;">${s.title}</h3>
      <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--knot-coral); margin-bottom:8px; display:block;">${s.subtitle}</span>
      <p class="knot-portal-desc" style="font-size:0.88rem; line-height:1.6; margin-bottom:20px; flex-grow:1;">${s.desc}</p>
      <a href="#contact" onclick="preselectAgencyService('${s.title}')" class="btn-knot-outline" style="font-size:0.78rem; padding:8px 18px;">
        <span>Inquire Capability</span>
        <span>→</span>
      </a>
    </article>
  `).join('');
}

function preselectAgencyService(title) {
  const selectEl = document.getElementById('contact-service-select');
  if (selectEl) selectEl.value = title;
}

/* --------------------------------------------------------------------------
   2. RENDER CURATED ROYAL VENUES
   -------------------------------------------------------------------------- */
function renderVenuesGrid() {
  const container = document.getElementById('agency-venues-container');
  if (!container || !BLUEROSE_DATA?.venues) return;

  container.innerHTML = BLUEROSE_DATA.venues.map(v => `
    <article class="knot-vendor-card">
      <div class="knot-vendor-img">
        <img src="${v.image}" alt="${v.name}">
        <span style="position:absolute; top:12px; left:12px; background:rgba(26,26,26,0.85); color:#FFF; font-size:0.68rem; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:0.05em;">
          ${v.badge}
        </span>
      </div>
      <div class="knot-vendor-body">
        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--knot-coral); margin-bottom:4px;">📍 ${v.location}</span>
        <h3 style="font-family:var(--font-serif); font-size:1.35rem; font-weight:700; color:var(--knot-dark); margin-bottom:8px;">${v.name}</h3>
        <span style="font-size:0.85rem; color:var(--knot-gray); margin-bottom:20px; display:block;">👥 ${v.capacity}</span>

        <a href="#contact" onclick="preselectAgencyService('Venue Booking - ${v.name}')" class="btn-knot-primary" style="width:100%; justify-content:center; padding:10px 18px; font-size:0.8rem; margin-top:auto;">
          <span>Reserve Venue Date</span>
        </a>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   3. RENDER CLIENT TESTIMONIALS & ROYAL PRAISE
   -------------------------------------------------------------------------- */
function renderTestimonialsGrid() {
  const container = document.getElementById('agency-testimonials-container');
  if (!container || !BLUEROSE_DATA?.testimonials) return;

  container.innerHTML = BLUEROSE_DATA.testimonials.map(t => `
    <article class="knot-real-card" style="padding:32px 28px; display:flex; flex-direction:column; background:#FFFFFF;">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:20px;">
        <img src="${t.avatar}" alt="${t.couple}" style="width:54px; height:54px; border-radius:50%; object-fit:cover; border:2px solid var(--knot-coral);">
        <div>
          <h4 style="font-family:var(--font-serif); font-size:1.2rem; font-weight:700; color:var(--knot-dark);">${t.couple}</h4>
          <span style="font-size:0.78rem; color:var(--knot-coral); font-weight:600;">📍 ${t.event}</span>
        </div>
      </div>
      <p style="font-style:italic; font-size:0.92rem; color:var(--knot-gray-dark); line-height:1.6; flex-grow:1; margin-bottom:16px;">
        "${t.quote}"
      </p>
      <div style="color:#FFB800; font-size:0.9rem;">★★★★★</div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. RENDER 12-MONTH INTERACTIVE CHECKLIST
   -------------------------------------------------------------------------- */
function renderChecklist() {
  const container = document.getElementById('knot-checklist-container');
  const countTxt = document.getElementById('knot-checklist-count');
  const fillBar = document.getElementById('knot-checklist-fill');
  if (!container || !BLUEROSE_DATA?.checklist) return;

  let total = 0;
  let completed = 0;

  BLUEROSE_DATA.checklist.forEach(tf => {
    tf.items.forEach(item => {
      total++;
      if (item.completed) completed++;
    });
  });

  const pct = Math.round((completed / total) * 100);
  if (countTxt) countTxt.textContent = `${completed} of ${total} Tasks Completed (${pct}%)`;
  if (fillBar) fillBar.style.width = `${pct}%`;

  container.innerHTML = BLUEROSE_DATA.checklist.map(tf => `
    <div class="knot-task-card">
      <span class="knot-section-tag" style="margin-bottom:4px;">TIMEFRAME</span>
      <h3 style="font-family:var(--font-serif); font-size:1.35rem; font-weight:700; color:var(--knot-dark); margin-bottom:16px;">
        ${tf.timeframe}
      </h3>
      <div>
        ${tf.items.map(item => `
          <label class="knot-task-row">
            <input type="checkbox" class="knot-checkbox" ${item.completed ? 'checked' : ''} onchange="toggleChecklistTask('${item.id}', this.checked)">
            <span style="${item.completed ? 'text-decoration:line-through; color:var(--knot-gray);' : 'color:var(--knot-dark);'} font-weight:500;">
              ${item.task}
            </span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleChecklistTask(id, isChecked) {
  BLUEROSE_DATA.checklist.forEach(tf => {
    tf.items.forEach(item => {
      if (item.id === id) item.completed = isChecked;
    });
  });
  renderChecklist();
}

/* --------------------------------------------------------------------------
   5. RENDER BUDGET CALCULATOR
   -------------------------------------------------------------------------- */
function renderBudgetCalculator() {
  const container = document.getElementById('knot-budget-list');
  const inputEl = document.getElementById('knot-budget-input');
  if (!container || !BLUEROSE_DATA?.budgetCategories) return;

  if (inputEl) inputEl.value = currentTotalBudgetLakhs;

  const totalRupees = currentTotalBudgetLakhs * 100000;

  container.innerHTML = BLUEROSE_DATA.budgetCategories.map(cat => {
    const allocated = Math.round((cat.percent / 100) * totalRupees);
    const lakhsVal = (allocated / 100000).toFixed(2);
    return `
      <div class="knot-budget-cat-row">
        <div>
          <strong style="font-size:0.95rem; color:var(--knot-dark); display:block;">${cat.name} (${cat.percent}%)</strong>
          <span style="font-size:0.8rem; color:var(--knot-gray);">${cat.desc}</span>
        </div>
        <div style="text-align:right;">
          <strong style="font-family:var(--font-serif); font-size:1.25rem; color:var(--knot-coral);">₹${lakhsVal} Lakhs</strong>
        </div>
      </div>
    `;
  }).join('');
}

function updateBudgetTotal(val) {
  currentTotalBudgetLakhs = parseFloat(val) || 50;
  renderBudgetCalculator();
}

/* --------------------------------------------------------------------------
   6. RENDER REGISTRY STORE
   -------------------------------------------------------------------------- */
function renderRegistryGrid() {
  const container = document.getElementById('knot-registry-container');
  if (!container || !BLUEROSE_DATA?.registryItems) return;

  container.innerHTML = BLUEROSE_DATA.registryItems.map(r => `
    <article class="knot-registry-card">
      <div class="knot-registry-img">
        <img src="${r.image}" alt="${r.title}">
      </div>
      <div class="knot-registry-body">
        <span style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--knot-coral); margin-bottom:4px;">${r.category}</span>
        <h4 style="font-family:var(--font-serif); font-size:1.15rem; font-weight:700; color:var(--knot-dark); margin-bottom:12px; line-height:1.3;">${r.title}</h4>
        
        <div style="margin-top:auto; padding-top:12px; border-top:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:1.05rem; color:var(--knot-dark);">${r.price}</strong>
          <span style="font-size:0.75rem; color:var(--knot-gray); font-weight:600;">${r.funded}</span>
        </div>

        <button onclick="giftItem('${r.title}')" class="btn-knot-primary" style="width:100%; justify-content:center; padding:8px 14px; font-size:0.78rem; margin-top:12px;">
          <span>Contribute / Gift</span>
        </button>
      </div>
    </article>
  `).join('');
}

function giftItem(title) {
  alert(`Thank you for contributing to "${title}" on BLUE ROSE PRODUCTION Registry Fund!`);
}

/* --------------------------------------------------------------------------
   7. RENDER REAL WEDDINGS INSPIRATION
   -------------------------------------------------------------------------- */
function renderRealWeddingsGrid() {
  const container = document.getElementById('knot-real-container');
  if (!container || !BLUEROSE_DATA?.realWeddings) return;

  container.innerHTML = BLUEROSE_DATA.realWeddings.map(rw => `
    <article class="knot-real-card">
      <div class="knot-real-img">
        <img src="${rw.image}" alt="${rw.couple}">
      </div>
      <div class="knot-real-body">
        <h3 style="font-family:var(--font-serif); font-size:1.4rem; font-weight:700; color:var(--knot-dark); margin-bottom:4px;">${rw.couple}</h3>
        <span style="font-size:0.82rem; color:var(--knot-gray); display:block; margin-bottom:12px;">📍 ${rw.location}</span>
        <p style="font-size:0.85rem; color:var(--knot-gray); line-height:1.5;">${rw.snippet}</p>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   8. HERO PHOTO SWITCHER & PRIVATE CONSULTATION INQUIRY
   -------------------------------------------------------------------------- */
const HERO_PHOTOS = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85"
];

function switchHeroPhoto(idx) {
  const mainImg = document.getElementById('hero-arch-img');
  const dots = document.querySelectorAll('.knot-thumb-dot');
  if (!mainImg || !HERO_PHOTOS[idx]) return;

  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = HERO_PHOTOS[idx];
    mainImg.style.opacity = '1';
  }, 250);

  dots.forEach((d, i) => {
    if (i === idx) d.classList.add('active');
    else d.classList.remove('active');
  });
}

function initInquiryForm() {
  const form = document.getElementById('agency-consultation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inquiry-name')?.value;
    alert(`Thank you, ${name || 'Valued Client'}! Your private consultation inquiry has been submitted to BLUE ROSE PRODUCTION. Our senior director will connect with you within 24 hours.`);
    form.reset();
  });
}
