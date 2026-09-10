/**
 * QA Portfolio — Abid Ali
 * Bootstrap 5 + Vanilla JS
 */

// Data arrays
const expertise = [
  { icon: 'fa-clipboard-check', title: 'Manual Testing', desc: 'End-to-end manual validation of software functionality with detailed test cases and observation.' },
  { icon: 'fa-gears', title: 'Functional Testing', desc: 'Verifying that every feature works as intended against business requirements.' },
  { icon: 'fa-right-left', title: 'Regression Testing', desc: 'Re-testing existing features after changes to prevent new defects.' },
  { icon: 'fa-fire-flame-curved', title: 'Smoke Testing', desc: 'Quick checks to confirm core functionality is intact before deeper testing.' },
  { icon: 'fa-check-double', title: 'Sanity Testing', desc: 'Focused verification of specific changed areas after fixes.' },
  { icon: 'fa-palette', title: 'UI/UX Testing', desc: 'Assessing layout, usability, accessibility and visual consistency.' },
  { icon: 'fa-network-wired', title: 'API Testing', desc: 'Validating endpoints, status codes, responses and error handling with Postman.' },
  { icon: 'fa-database', title: 'Database Testing', desc: 'SQL queries, data integrity, schema validation and report verification.' },
  { icon: 'fa-globe', title: 'Cross-Browser Testing', desc: 'Ensuring consistent behavior across Chrome, Firefox, Edge and Safari.' },
  { icon: 'fa-mobile-screen', title: 'Cross-Platform Testing', desc: 'Testing on Windows, macOS, iOS, Android and responsive layouts.' },
  { icon: 'fa-bug-slash', title: 'Bug Reporting', desc: 'Clear, reproducible bug reports with steps, evidence and severity.' },
  { icon: 'fa-file-lines', title: 'Test Case Design', desc: 'Structured, maintainable test cases with preconditions, steps and expected results.' },
];

const tools = [
  { icon: 'fa-paper-plane', label: 'Postman', sub: 'API validation & endpoints' },
  { icon: 'fa-database', label: 'SQL', sub: 'Queries & data verification' },
  { icon: 'fa-ticket', label: 'Jira', sub: 'Bug tracking & tickets' },
  { icon: 'fa-robot', label: 'Selenium', sub: 'Basic automation exposure' },
  { icon: 'fa-play', label: 'Playwright', sub: 'Foundational automation skills' },
  { icon: 'fa-code-branch', label: 'Git', sub: 'Version control basics' },
  { icon: 'fa-chrome', label: 'Chrome DevTools', sub: 'Network, console, elements' },
];

const posModules = [
  { icon: 'fa-boxes-stacked', title: 'Inventory Management', desc: 'Stock tracking, quantity updates and low-stock alerts.' },
  { icon: 'fa-layer-group', title: 'Stock Management', desc: 'Real-time inventory with multi-location support.' },
  { icon: 'fa-cart-shopping', title: 'Online Orders', desc: 'Order flow from cart to kitchen to receipt.' },
  { icon: 'fa-credit-card', title: 'Payments', desc: 'Card, cash, split and refund scenarios.' },
  { icon: 'fa-file-invoice', title: 'Reports', desc: 'Sales, shift and end-of-day reports.' },
  { icon: 'fa-print', title: 'Receipt Printers', desc: 'Formatting, paper size and connectivity.' },
  { icon: 'fa-tv', title: 'Kitchen Display System', desc: 'Order routing and display accuracy.' },
  { icon: 'fa-truck-fast', title: 'Supplier Management', desc: 'Purchase orders and supplier records.' },
  { icon: 'fa-wifi', title: 'Offline Mode', desc: 'Local storage, sync and recovery.' },
];

const processSteps = [
  'Requirement Analysis', 'Test Planning', 'Test Case Creation', 'Test Execution', 'Bug Reporting', 'Bug Verification', 'Regression Testing', 'Final Validation'
];

const projects = [
  {
    title: 'Restaurant POS — Demo Project',
    desc: 'Sample restaurant POS testing project. Tested order entry, kitchen display, receipt printing, payments, inventory updates and offline recovery.',
    resp: 'Manual testing, regression, UI checks, payment flow, printer validation, offline mode.',
    types: 'Functional, UI/UX, Regression, POS',
    tools: 'Postman, SQL, Jira, Chrome DevTools',
    modules: 'Orders, Kitchen, Payments, Reports, Printers',
    note: 'Sample / demo project for portfolio.',
  },
  {
    title: 'Retail POS — Demo Project',
    desc: 'Sample retail POS project. Tested stock updates, barcode scanning, discounts, supplier records, reports and cross-browser consistency.',
    resp: 'Functional testing, database checks, cross-platform and regression.',
    types: 'Functional, Database, Cross-Platform, Regression',
    tools: 'Postman, SQL, Git, Chrome DevTools',
    modules: 'Inventory, Orders, Payments, Reports, Suppliers',
    note: 'Sample / demo project for portfolio.',
  },
  {
    title: 'Web App — Order Portal Demo',
    desc: 'Sample web order portal project. Tested login/session, form validation, API responses, responsive layout and accessibility.',
    resp: 'Manual, API, UI/UX, regression, cross-browser.',
    types: 'Functional, API, UI/UX, Cross-Browser',
    tools: 'Postman, Jira, Chrome DevTools',
    modules: 'Login, Orders, Profile, Dashboard',
    note: 'Sample / demo project for portfolio.',
  },
];

const bugs = [
  {
    id: 'BUG-001', title: 'Payment transaction failure', severity: 'Critical', priority: 'High', env: 'Windows / Chrome',
    steps: '1. Add item \n2. Choose card payment \n3. Confirm', expected: 'Payment completes with receipt.', actual: 'Transaction fails with error message.', status: 'Fixed',
  },
  {
    id: 'BUG-002', title: 'Inventory quantity mismatch', severity: 'High', priority: 'Medium', env: 'macOS / Safari',
    steps: '1. Deduct 5 items \n2. Refresh stock', expected: 'Stock decreases by 5.', actual: 'Stock unchanged until refresh.', status: 'Open',
  },
  {
    id: 'BUG-003', title: 'Printer not generating receipt', severity: 'Medium', priority: 'Medium', env: 'Windows / Edge',
    steps: '1. Complete order \n2. Click print', expected: 'Receipt prints.', actual: 'No output; printer shows offline.', status: 'In Progress',
  },
  {
    id: 'BUG-004', title: 'Online order not appearing on POS', severity: 'High', priority: 'High', env: 'iOS / Chrome',
    steps: '1. Place order online \n2. Open POS', expected: 'Order visible.', actual: 'Missing in order list.', status: 'Fixed',
  },
  {
    id: 'BUG-005', title: 'Login session expires early', severity: 'Medium', priority: 'Low', env: 'Android / Firefox',
    steps: '1. Log in \n2. Wait 15 min', expected: 'Session active.', actual: 'Redirected to login.', status: 'Open',
  },
];

const skills = [
  { name: 'Manual Testing', pct: 95 },
  { name: 'POS Testing', pct: 95 },
  { name: 'Functional Testing', pct: 90 },
  { name: 'Regression Testing', pct: 90 },
  { name: 'API Testing', pct: 75 },
  { name: 'SQL / Database Testing', pct: 70 },
  { name: 'Automation Testing', pct: 50 },
];

const whyPoints = [
  { icon: 'fa-magnifying-glass', title: 'Detail-Oriented Testing', desc: 'I focus on small details that impact user experience and business outcomes.' },
  { icon: 'fa-file-shield', title: 'Strong Bug Reporting', desc: 'Clear, reproducible reports help developers fix faster.' },
  { icon: 'fa-cash-register', title: 'Real-World POS Testing', desc: 'Actual restaurant and retail POS experience — orders, payments, printers, kitchen displays.' },
  { icon: 'fa-user-check', title: 'User-Focused Approach', desc: 'Testing from the user perspective to catch real-world issues.' },
  { icon: 'fa-laptop-code', title: 'Cross-Platform Experience', desc: 'Windows, macOS, mobile browsers and responsive layouts.' },
  { icon: 'fa-people-arrows', title: 'Collaboration', desc: 'Working closely with developers and product to improve quality.' },
];

// Build sections
function buildGrid(id, items, builder) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(builder).join('');
}

buildGrid('expertGrid', expertise.slice(0,5), (e, i) => {
  const cardClass = i === 4 ? 'col-12' : 'col-12 col-md-6';
  const detailsButton = i === 4
    ? '<div class="mt-3"><a href="expertise.html" class="btn btn-outline-light btn-sm rounded-pill px-4">View Full Details</a></div>'
    : '';
  return `<div class="${cardClass} card-expertise reveal-up" style="animation-delay:${i*60}ms">
    <div class="d-flex align-items-center gap-3 mb-3"><div class="icon-box"><i class="fa-solid ${e.icon}"></i></div><h3 class="h5 fw-bold m-0" style="font-family:var(--font-display)">${e.title}</h3></div>
    <p class="mb-0 text-white-75 small leading-relaxed">${e.desc}</p>
    ${detailsButton}
  </div>`;
});

buildGrid('toolGrid', tools, (t) => `
<div class="col-6 col-md-3"><div class="tool-card"><i class="fa-solid ${t.icon} fa-xl text-gradient mb-2"></i><h5 class="h6 fw-bold">${t.label}</h5><small class="text-white-75">${t.sub}</small></div></div>`);

buildGrid('posGrid', posModules, (p, i) => `
<div class="col-6 col-md-4 col-lg-3 reveal-up" style="animation-delay:${i*60}ms"><div class="pos-card"><i class="fa-solid ${p.icon} fa-2x text-gradient mb-2"></i><h5 class="h6 fw-bold">${p.title}</h5><p class="small text-white-75 mb-0">${p.desc}</p></div></div>`);

// Process
function buildProcess() {
  const el = document.getElementById('processSteps');
  if (!el) return;
  el.innerHTML = processSteps.map((s, i) => `
    <div class="process-step reveal-up" style="animation-delay:${i*100}ms">
      <div class="step-num">${i+1}</div>
      <h4 class="h6 fw-bold">${s}</h4>
    </div>`).join('');
}
buildProcess();

// Projects
buildGrid('projectGrid', projects, (pr, i) => `
<div class="col-md-6 col-lg-4 reveal-up" style="animation-delay:${i*100}ms">
  <article class="project-card h-100 d-flex flex-column">
    <div class="card-body d-flex flex-column flex-grow-1">
      <h3 class="fw-bold mb-2">${pr.title}</h3>
      <p class="small text-white-75 mb-2">${pr.desc}</p>
      <div class="mb-2"><strong class="small">Testing:</strong> <span class="small text-white-75">${pr.resp}</span></div>
      <div class="mb-2"><strong class="small">Types:</strong> <span class="small text-white-75">${pr.types}</span></div>
      <div class="mb-2"><strong class="small">Tools:</strong> <span class="small text-white-75">${pr.tools}</span></div>
      <div class="mb-3"><strong class="small">Modules:</strong> <span class="small text-white-75">${pr.modules}</span></div>
      <p class="small text-white-50 mb-2"><em>${pr.note}</em></p>
      <a href="#" class="btn btn-outline-light btn-sm rounded-pill mt-auto" onclick="alert('Project details coming soon.')">View Details</a>
    </div>
  </article>
</div>`);

// Bugs
buildGrid('bugGrid', bugs, (b, i) => `
<div class="bug-card reveal-up" style="animation-delay:${i*100}ms" data-bug="${b.id}">
  <div class="bug-summary d-flex justify-content-between align-items-center" onclick="toggleBug(this)">
    <div><h4 class="h6 fw-bold mb-1">${b.id} — ${b.title}</h4><div class="d-flex gap-2"><span class="badge bg-danger">${b.severity}</span><span class="badge bg-primary">${b.priority}</span><span class="badge bg-secondary">${b.status}</span></div></div>
    <i class="fa-solid fa-chevron-down chevron text-white-75"></i>
  </div>
  <div class="bug-detail px-3 pb-3">
    <div class="row g-2 text-sm">
      <div class="col-md-6"><strong>Environment:</strong> ${b.env}</div>
      <div class="col-12"><strong>Steps to Reproduce:</strong><br><pre class="small mb-1">${b.steps}</pre></div>
      <div class="col-md-6"><strong>Expected:</strong> ${b.expected}</div>
      <div class="col-md-6"><strong>Actual:</strong> ${b.actual}</div>
    </div>
  </div>
</div>`);

function toggleBug(el) {
  const card = el.closest('.bug-card');
  card.classList.toggle('open');
}

// Skills
function buildSkills() {
  const el = document.getElementById('skillsPanel');
  if (!el) return;
  el.innerHTML = `<h3 class="h5 fw-bold mb-3">Self-Assessed Skill Levels</h3>` + skills.map(s => `
    <div class="mb-3"><div class="d-flex justify-content-between mb-1"><span class="fw-semibold">${s.name}</span><span class="text-gradient fw-bold">${s.pct}%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="${s.pct}"></div></div></div>`).join('');
}
buildSkills();

// Why
buildGrid('whyGrid', whyPoints, (w, i) => `
<div class="col-md-6 col-lg-4 reveal-up" style="animation-delay:${i*100}ms"><div class="why-card"><i class="fa-solid ${w.icon} fa-xl text-gradient mb-3"></i><h4 class="h6 fw-bold">${w.title}</h4><p class="small text-white-75 mb-0">${w.desc}</p></div></div>`);

// Theme
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-bs-theme') === 'dark';
    html.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
    themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
  const saved = localStorage.getItem('theme');
  if (saved) { document.documentElement.setAttribute('data-bs-theme', saved); themeBtn.innerHTML = saved === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'; }
}

// Form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const n = document.getElementById('cfName').value.trim();
    const em = document.getElementById('cfEmail').value.trim();
    const sub = document.getElementById('cfSub').value.trim();
    const msg = document.getElementById('cfMsg').value.trim();
    if (!n || !em || !sub || !msg) { alert('Please fill all fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { alert('Please enter a valid email.'); return; }
    alert('Thank you ' + n + '. Message sent successfully (demo).');
    form.reset();
  });
}

// Skill bar animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach(f => { f.style.width = f.getAttribute('data-pct') + '%'; });
    }
  });
}, { threshold: 0.3 });

setTimeout(() => {
  const sp = document.getElementById('skillsPanel');
  if (sp) observer.observe(sp);
}, 500);

// Active nav link on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
// Active nav link on scroll + nav shadow
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (nav) { if (window.scrollY > 40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
  let current = '';
  sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id'); });
  navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === '#' + current) link.classList.add('active'); });
}, { passive: true });
