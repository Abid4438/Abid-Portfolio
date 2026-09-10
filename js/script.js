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
  { icon: 'fa-ticket', label: 'Redmine', sub: 'Bug tracking & tickets' },
  { icon: 'fa-code', label: 'VS Code Debugger', sub: 'Root-cause analysis' },
  { icon: 'fa-wand-magic-sparkles', label: 'AI QA Tools', sub: 'Cursor, Claude & Codex' },
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
  { title: 'Understand', desc: 'Review requirements, flows and acceptance criteria.', icon: 'fa-magnifying-glass' },
  { title: 'Plan', desc: 'Define scope, risk areas and practical test scenarios.', icon: 'fa-compass' },
  { title: 'Design', desc: 'Create clear test cases with expected outcomes.', icon: 'fa-file-circle-check' },
  { title: 'Execute', desc: 'Validate functionality across supported platforms.', icon: 'fa-play' },
  { title: 'Report', desc: 'Log reproducible defects with useful evidence.', icon: 'fa-bug' },
  { title: 'Verify', desc: 'Confirm fixes and protect the release with regression testing.', icon: 'fa-shield-halved' },
];

const projects = [
  {
    title: 'Software Test Engineer (QA) — Arkhitech',
    desc: 'End-to-end manual QA for Foodnerd and Howmuch POS systems and Fruitfull, a team-management web app.',
    resp: 'Feature validation, bug reproduction, triage, regression, UAT and cross-platform testing.',
    types: 'Functional, Regression, Smoke, Sanity, Exploratory, UAT, E2E',
    tools: 'Postman, Redmine, Chrome DevTools, VS Code Debugger',
    modules: 'POS, Electron desktop, native mobile and web platforms',
    note: 'Software Test Engineer (QA), Arkhitech, Lahore · Sep 2025–Present',
  },
  {
    title: 'Software Engineer — ASP.NET Core Developer',
    desc: 'Developed and maintained web applications using ASP.NET Core, MVC and SQL.',
    resp: 'Backend feature development, debugging, code review and application reliability.',
    types: 'ASP.NET Core, MVC, SQL, Web Development',
    tools: 'C#, JavaScript, SQL, Git',
    modules: 'Web applications and backend features',
    note: 'Software Engineer — ASP.NET Core Developer, SirizApps, Lahore · Jan 2024–Jul 2025',
  },
  {
    title: 'Web Developer — Perfect Solution',
    desc: 'Developed full-stack web features and helped test and validate new functionality before release.',
    resp: 'Feature development, validation and early QA workflow support.',
    types: 'Full-Stack Web Development, Functional Validation',
    tools: 'C#, JavaScript, HTML, Bootstrap',
    modules: 'Web application features',
    note: 'Web Developer, Perfect Solution, Islamabad · Jun 2023–Dec 2023',
  },
];

const bugs = [
  {
    id: 'QA-001', title: 'Defect reporting & tracking', severity: 'Core Skill', priority: 'High', env: 'Redmine',
    steps: '1. Reproduce issue \n2. Document clear steps \n3. Attach evidence \n4. Prioritize and track', expected: 'Developers can reproduce and resolve the defect.', actual: 'Clear, actionable QA reporting workflow.', status: 'Professional Practice',
  },
  {
    id: 'QA-002', title: 'API validation & debugging', severity: 'Core Skill', priority: 'High', env: 'Postman / Chrome DevTools / VS Code',
    steps: '1. Validate endpoint \n2. Inspect response \n3. Investigate issue \n4. Escalate evidence', expected: 'Reliable API behavior and root-cause context.', actual: 'API testing and issue isolation before escalation.', status: 'Professional Practice',
  },
  {
    id: 'QA-003', title: 'Cross-platform coverage', severity: 'Core Skill', priority: 'High', env: 'Windows / macOS / Android / iOS',
    steps: '1. Execute test scenarios \n2. Compare platform behavior \n3. Report compatibility issues', expected: 'Consistent behavior across supported platforms.', actual: 'Cross-OS, mobile and browser testing coverage.', status: 'Professional Practice',
  },
];

const skills = [
  { name: 'Manual & Functional Testing', pct: 95 },
  { name: 'Regression, Smoke & Sanity Testing', pct: 90 },
  { name: 'Exploratory, UAT & E2E Testing', pct: 90 },
  { name: 'Cross-Browser & Cross-Platform Testing', pct: 90 },
  { name: 'API Testing & Debugging', pct: 80 },
  { name: 'Bug Reporting & Test Case Design', pct: 90 },
  { name: 'ASP.NET Core Development', pct: 75 },
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

buildGrid('expertGrid', expertise.slice(0,6), (e, i) => {
  return `<div class="col-12 col-md-6 col-lg-4 reveal-up" style="animation-delay:${i*60}ms">
    <article class="card expertise-card h-100 border-0">
      <div class="card-body p-4"><div class="expertise-card-top"><div class="expertise-card-icon"><i class="fa-solid ${e.icon}"></i></div><span>0${i + 1}</span></div>
      <h3 class="h5 fw-bold mb-2">${e.title}</h3><p class="mb-0 text-white-75 small">${e.desc}</p></div>
    </article>
  </div>`;
});

buildGrid('toolGrid', tools, (t, i) => `
<div class="col-6 col-md-4 col-lg-3"><div class="tool-card tool-card-${i}"><div class="tool-icon"><i class="fa-solid ${t.icon}"></i></div><h5 class="h6 fw-bold mb-1">${t.label}</h5><small class="text-white-75">${t.sub}</small></div></div>`);

buildGrid('posGrid', posModules, (p, i) => `
<div class="col-6 col-md-4 col-lg-3 reveal-up" style="animation-delay:${i*60}ms"><div class="pos-card"><i class="fa-solid ${p.icon} fa-2x text-gradient mb-2"></i><h5 class="h6 fw-bold">${p.title}</h5><p class="small text-white-75 mb-0">${p.desc}</p></div></div>`);

// Process
function buildProcess() {
  const el = document.getElementById('processSteps');
  if (!el) return;
  el.innerHTML = processSteps.map((s, i) => `
    <div class="process-step reveal-up" style="animation-delay:${i*100}ms">
      <span class="step-num">0${i+1}</span><div class="process-icon"><i class="fa-solid ${s.icon}"></i></div>
      <h4 class="h6 fw-bold mb-2">${s.title}</h4><p class="small text-white-75 mb-0">${s.desc}</p>
    </div>`).join('');
}
buildProcess();

// Projects
buildGrid('projectGrid', projects, (pr, i) => `
<div class="col-md-6 col-lg-4 reveal-up" style="animation-delay:${i*100}ms">
  <article class="project-card h-100 d-flex flex-column">
    <div class="card-body d-flex flex-column flex-grow-1">
      <div class="experience-top"><span class="experience-number">0${i + 1}</span><span class="experience-date">${pr.note}</span></div>
      <h3 class="fw-bold mb-2">${pr.title}</h3><p class="small text-white-75 mb-3">${pr.desc}</p>
      <div class="experience-detail"><i class="fa-solid fa-circle-check"></i><span>${pr.resp}</span></div>
      <div class="experience-tags"><span>${pr.types}</span><span>${pr.tools}</span><span>${pr.modules}</span></div>
    </div>
  </article>
</div>`);

// Bugs
buildGrid('bugGrid', bugs, (b, i) => `
<div class="col-md-6 reveal-up" style="animation-delay:${i*100}ms"><article class="bug-card" data-bug="${b.id}">
  <button class="bug-summary" type="button" aria-expanded="false" onclick="toggleBug(this)">
    <span><span class="bug-id">${b.id}</span><h4 class="h6 fw-bold mb-1">${b.title}</h4><small>${b.env}</small></span><i class="fa-solid fa-chevron-down chevron"></i>
  </button>
  <div class="bug-detail"><div class="bug-detail-inner"><p><strong>What I do:</strong> ${b.actual}</p><p><strong>Goal:</strong> ${b.expected}</p><div class="bug-steps"><strong>Approach</strong><pre>${b.steps}</pre></div></div></div>
</article></div>`);

function toggleBug(el) {
  const card = el.closest('.bug-card');
  card.classList.toggle('open');
  el.setAttribute('aria-expanded', card.classList.contains('open'));
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
<div class="col-md-6 reveal-up" style="animation-delay:${i*80}ms"><div class="why-card h-100"><div class="why-icon"><i class="fa-solid ${w.icon}"></i></div><h4 class="h6 fw-bold">${w.title}</h4><p class="small text-white-75 mb-0">${w.desc}</p></div></div>`);

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
