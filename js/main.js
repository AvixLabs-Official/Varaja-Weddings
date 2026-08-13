/**
 * THE KNOT - Official Interactive Orchestrator
 * Full replica of The Knot Wedding Planning suite
 */

let activeVendorCat = 'All Vendors';
let currentTotalBudget = 35000;

document.addEventListener('DOMContentLoaded', () => {
  renderPortalsGrid();
  renderChecklist();
  renderBudgetCalculator();
  renderVendorsGrid();
  renderRegistryGrid();
  renderRealWeddingsGrid();
});

/* --------------------------------------------------------------------------
   1. RENDER CORE PLANNING SUITE PORTALS
   -------------------------------------------------------------------------- */
function renderPortalsGrid() {
  const container = document.getElementById('knot-portals-container');
  if (!container || !THEKNOT_DATA?.planningPortals) return;

  container.innerHTML = THEKNOT_DATA.planningPortals.map(p => `
    <article class="knot-portal-card">
      <div class="knot-portal-icon-wrap">
        ${p.icon}
      </div>
      <h3 class="knot-portal-title">${p.title}</h3>
      <p class="knot-portal-desc">${p.desc}</p>
      <a href="${p.link}" class="btn-knot-outline" style="margin-top:auto; font-size:0.82rem; padding:8px 18px;">
        <span>${p.actionText}</span>
        <span>→</span>
      </a>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   2. RENDER 12-MONTH INTERACTIVE CHECKLIST
   -------------------------------------------------------------------------- */
function renderChecklist() {
  const container = document.getElementById('knot-checklist-container');
  const countTxt = document.getElementById('knot-checklist-count');
  const fillBar = document.getElementById('knot-checklist-fill');
  if (!container || !THEKNOT_DATA?.checklist) return;

  let total = 0;
  let completed = 0;

  THEKNOT_DATA.checklist.forEach(tf => {
    tf.items.forEach(item => {
      total++;
      if (item.completed) completed++;
    });
  });

  const pct = Math.round((completed / total) * 100);
  if (countTxt) countTxt.textContent = `${completed} of ${total} Tasks Completed (${pct}%)`;
  if (fillBar) fillBar.style.width = `${pct}%`;

  container.innerHTML = THEKNOT_DATA.checklist.map(tf => `
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
  THEKNOT_DATA.checklist.forEach(tf => {
    tf.items.forEach(item => {
      if (item.id === id) item.completed = isChecked;
    });
  });
  renderChecklist();
}

/* --------------------------------------------------------------------------
   3. RENDER BUDGET CALCULATOR
   -------------------------------------------------------------------------- */
function renderBudgetCalculator() {
  const container = document.getElementById('knot-budget-list');
  const inputEl = document.getElementById('knot-budget-input');
  if (!container || !THEKNOT_DATA?.budgetCategories) return;

  if (inputEl) inputEl.value = currentTotalBudget;

  container.innerHTML = THEKNOT_DATA.budgetCategories.map(cat => {
    const amount = Math.round((cat.percent / 100) * currentTotalBudget);
    return `
      <div class="knot-budget-cat-row">
        <div>
          <strong style="font-size:0.95rem; color:var(--knot-dark); display:block;">${cat.name} (${cat.percent}%)</strong>
          <span style="font-size:0.8rem; color:var(--knot-gray);">${cat.desc}</span>
        </div>
        <div style="text-align:right;">
          <strong style="font-family:var(--font-serif); font-size:1.25rem; color:var(--knot-coral);">$${amount.toLocaleString()}</strong>
        </div>
      </div>
    `;
  }).join('');
}

function updateBudgetTotal(val) {
  currentTotalBudget = parseInt(val) || 35000;
  renderBudgetCalculator();
}

/* --------------------------------------------------------------------------
   4. RENDER VENDOR MARKETPLACE
   -------------------------------------------------------------------------- */
function renderVendorsGrid() {
  const container = document.getElementById('knot-vendors-container');
  const tabsContainer = document.getElementById('knot-vendor-tabs');
  if (!container || !THEKNOT_DATA?.vendors) return;

  if (tabsContainer) {
    tabsContainer.innerHTML = THEKNOT_DATA.vendorCategories.map(cat => `
      <button class="btn-knot-outline ${cat === activeVendorCat ? 'active' : ''}" style="padding:8px 18px; font-size:0.8rem; ${cat === activeVendorCat ? 'background:var(--knot-dark); color:#FFF;' : ''}" onclick="filterVendorCat('${cat}')">
        ${cat}
      </button>
    `).join('');
  }

  const filtered = activeVendorCat === 'All Vendors'
    ? THEKNOT_DATA.vendors
    : THEKNOT_DATA.vendors.filter(v => v.category === activeVendorCat);

  container.innerHTML = filtered.map(v => `
    <article class="knot-vendor-card">
      <div class="knot-vendor-img">
        <img src="${v.image}" alt="${v.name}">
        <span style="position:absolute; top:12px; left:12px; background:rgba(26,26,26,0.85); color:#FFF; font-size:0.68rem; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:0.05em;">
          ${v.badge}
        </span>
      </div>
      <div class="knot-vendor-body">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--knot-coral);">${v.category}</span>
          <span style="font-size:0.8rem; font-weight:700; color:var(--knot-dark); display:inline-flex; align-items:center; gap:3px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#FD5B60" stroke="#FD5B60"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${v.rating} (${v.reviews})</span>
          </span>
        </div>

        <h3 style="font-family:var(--font-serif); font-size:1.35rem; font-weight:700; color:var(--knot-dark); margin-bottom:4px;">${v.name}</h3>
        <span style="font-size:0.82rem; color:var(--knot-gray); margin-bottom:10px;">📍 ${v.location}</span>
        <p style="font-size:0.85rem; color:var(--knot-gray); line-height:1.5; margin-bottom:20px; flex-grow:1;">${v.desc}</p>

        <div style="display:flex; justify-content:space-between; align-items:center; padding-top:14px; border-top:1px solid var(--border-light);">
          <strong style="font-family:var(--font-serif); font-size:1.15rem; color:var(--knot-dark);">${v.price}</strong>
          <button onclick="contactVendorModal('${v.name}')" class="btn-knot-primary" style="padding:8px 18px; font-size:0.78rem;">
            <span>Contact Vendor</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function filterVendorCat(cat) {
  activeVendorCat = cat;
  renderVendorsGrid();
}

function contactVendorModal(name) {
  alert(`Thank you for reaching out to ${name}! A representative from The Knot vendor team will connect with you shortly.`);
}

/* --------------------------------------------------------------------------
   5. RENDER REGISTRY STORE
   -------------------------------------------------------------------------- */
function renderRegistryGrid() {
  const container = document.getElementById('knot-registry-container');
  if (!container || !THEKNOT_DATA?.registryItems) return;

  container.innerHTML = THEKNOT_DATA.registryItems.map(r => `
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
  alert(`Thank you for contributing to "${title}" on The Knot Newlywed Fund!`);
}

/* --------------------------------------------------------------------------
   6. RENDER REAL WEDDINGS INSPIRATION
   -------------------------------------------------------------------------- */
function renderRealWeddingsGrid() {
  const container = document.getElementById('knot-real-container');
  if (!container || !THEKNOT_DATA?.realWeddings) return;

  container.innerHTML = THEKNOT_DATA.realWeddings.map(rw => `
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
