/**
 * THE KNOT - Master Interactive Orchestrator (Couple Planning & Guest RSVP Suite)
 */

let currentTotalBudget = 35000;

document.addEventListener('DOMContentLoaded', () => {
  renderPortalsGrid();
  renderChecklist();
  renderBudgetCalculator();
  renderGuestsGrid();
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
   4. RENDER GUESTS & RSVP MANAGER SUITE
   -------------------------------------------------------------------------- */
function renderGuestsGrid() {
  const container = document.getElementById('knot-guests-table-body');
  if (!container || !THEKNOT_DATA?.guestList) return;

  container.innerHTML = THEKNOT_DATA.guestList.map(g => `
    <tr style="border-bottom:1px solid var(--border-light);">
      <td style="padding:16px 20px; font-weight:600; color:var(--knot-dark);">${g.name}</td>
      <td style="padding:16px 20px; color:var(--knot-gray);">${g.party}</td>
      <td style="padding:16px 20px;">
        <span style="padding:4px 12px; border-radius:20px; font-size:0.75rem; font-weight:700; ${g.rsvpStatus === 'Attending' ? 'background:#E8F5E9; color:#2E7D32;' : 'background:#FFF3E0; color:#E65100;'}">
          ${g.rsvpStatus}
        </span>
      </td>
      <td style="padding:16px 20px; color:var(--knot-gray);">${g.meal}</td>
      <td style="padding:16px 20px; font-weight:600; color:var(--knot-dark);">${g.table}</td>
    </tr>
  `).join('');
}

function addNewGuestPrompt() {
  const name = prompt("Enter guest full name:");
  if (name) {
    THEKNOT_DATA.guestList.push({
      id: "g" + (THEKNOT_DATA.guestList.length + 1),
      name: name,
      party: "Party of 2",
      rsvpStatus: "Attending",
      meal: "Chef Special",
      table: "Table " + (THEKNOT_DATA.guestList.length + 1)
    });
    renderGuestsGrid();
    alert(`Guest "${name}" added to your interactive RSVP manager!`);
  }
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

/* --------------------------------------------------------------------------
   7. HERO PHOTO SWITCHER
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
