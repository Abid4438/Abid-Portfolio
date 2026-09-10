/**
 * Abid Ali - Software Test Engineer (QA) Portfolio
 * High-Performance Interactive Logic & Dynamic Components
 */

// 1. Data Arrays
const expertiseData = [
  {
    category: 'core',
    icon: 'fa-clipboard-check',
    title: 'Manual & Functional Testing',
    desc: 'End-to-end manual validation of software features against business logic, user stories, acceptance criteria, and edge-case behaviors.',
    tags: ['Test Cases', 'Boundary Value', 'Equivalence Partitioning', 'Positive/Negative Paths']
  },
  {
    category: 'core',
    icon: 'fa-arrows-rotate',
    title: 'Regression & Smoke Testing',
    desc: 'Systematic regression suites ensuring new code deployments and hotfixes never break existing stable workflows or critical business functions.',
    tags: ['Smoke Runs', 'Sanity Checks', 'Release Sign-Off', 'Impact Analysis']
  },
  {
    category: 'pos',
    icon: 'fa-cash-register',
    title: 'POS & Hardware Testing',
    desc: 'Specialized QA for retail & restaurant POS systems: multi-store sync, thermal printer integrations, offline caching, and payment terminals.',
    tags: ['Hardware Testing', 'Thermal Printers', 'Offline Recovery', 'Kitchen Displays']
  },
  {
    category: 'api',
    icon: 'fa-network-wired',
    title: 'API Testing & Debugging',
    desc: 'Rigorous RESTful endpoint validation using Postman: inspecting status codes, payloads, error responses, authentication tokens, and rate limits.',
    tags: ['Postman', 'Payload Validation', 'Auth Tokens', 'Response Times']
  },
  {
    category: 'api',
    icon: 'fa-database',
    title: 'Database & SQL Integrity',
    desc: 'Database verification using SQL queries: validating data persistence, schema constraints, transaction rollbacks, and report data accuracy.',
    tags: ['SQL Queries', 'Data Integrity', 'CRUD Validation', 'Transactions']
  },
  {
    category: 'platform',
    icon: 'fa-laptop-code',
    title: 'Cross-Platform Validation',
    desc: 'Comprehensive multi-environment testing covering Electron desktop (Windows/macOS), native mobile (iOS/Android), and web platforms.',
    tags: ['Windows & macOS', 'iOS & Android', 'Electron Apps', 'Responsive Testing']
  },
  {
    category: 'platform',
    icon: 'fa-globe',
    title: 'Cross-Browser Compatibility',
    desc: 'Ensuring seamless visual and functional consistency across Chrome, Safari, Firefox, and Edge with DevTools debugging.',
    tags: ['Chrome DevTools', 'Safari WebKit', 'Firefox Gecko', 'Layout Consistency']
  },
  {
    category: 'process',
    icon: 'fa-bug-slash',
    title: 'Defect Hunting & Triage',
    desc: 'Clear, 100% reproducible bug reports formatted with exact steps, logs, expected vs actual behavior, severity tags, and video evidence.',
    tags: ['Redmine', 'Root-Cause Analysis', 'Severity/Priority', 'Dev Collaboration']
  },
  {
    category: 'process',
    icon: 'fa-file-shield',
    title: 'Test Case Design & Strategy',
    desc: 'Structured, maintainable test case suites with detailed preconditions, execution steps, expected outcomes, and traceability matrices.',
    tags: ['Test Matrices', 'Traceability', 'Risk-Based Testing', 'UAT Scenarios']
  },
  {
    category: 'core',
    icon: 'fa-magnifying-glass-chart',
    title: 'Exploratory & UAT Testing',
    desc: 'Unscripted intuitive user-journey exploration to catch unanticipated defects, UX friction points, and edge-case workflow anomalies.',
    tags: ['User Journeys', 'UX Friction', 'Ad-hoc Testing', 'User Acceptance']
  },
  {
    category: 'platform',
    icon: 'fa-mobile-screen-button',
    title: 'Mobile App Testing',
    desc: 'Native and hybrid mobile app validation covering gestures, background state handling, push notifications, network dropouts, and orientation.',
    tags: ['Gesture Testing', 'Network Drops', 'Push Alerts', 'App Lifecycle']
  },
  {
    category: 'core',
    icon: 'fa-code-compare',
    title: 'Developer Mindset QA',
    desc: 'Leveraging an ASP.NET Core & C# engineering foundation to read stack traces, inspect code changes, and isolate backend root causes quickly.',
    tags: ['C# / ASP.NET Core', 'Stack Traces', 'Console Debugging', 'Code Reviews']
  }
];

const toolsData = [
  { icon: 'fa-paper-plane', name: 'Postman', cat: 'API Testing', desc: 'REST API validation, endpoint tests, headers & auth tokens', badge: 'Expert' },
  { icon: 'fa-ticket', name: 'Redmine', cat: 'Defect Tracking', desc: 'Issue logging, lifecycle triage, attachments & ticket tracking', badge: 'Advanced' },
  { icon: 'fa-chrome', name: 'Chrome DevTools', cat: 'Inspection', desc: 'Console debugging, Network tab waterfall, responsive modes', badge: 'Advanced' },
  { icon: 'fa-code', name: 'VS Code Debugger', cat: 'Code Analysis', desc: 'Source code inspection, breakpoints & root-cause isolation', badge: 'Advanced' },
  { icon: 'fa-database', name: 'SQL / Databases', cat: 'Data Verification', desc: 'Complex SELECT queries, JOINs, transaction verification', badge: 'Advanced' },
  { icon: 'fa-cubes', name: 'C# / ASP.NET Core', cat: 'Development', desc: 'Backend architecture, MVC structure, OOP fundamentals', badge: 'Proficient' },
  { icon: 'fa-code-branch', name: 'Git & GitHub', cat: 'Version Control', desc: 'Branching, PR reviews, release tracking, commit history', badge: 'Advanced' },
  { icon: 'fa-wand-magic-sparkles', name: 'AI QA Acceleration', cat: 'Modern Tools', desc: 'Cursor, Claude & Codex for test script & scenario generation', badge: 'Proficient' }
];

const posModulesData = [
  { icon: 'fa-boxes-stacked', title: 'Inventory & Stock Control', desc: 'Real-time quantity updates, low-stock threshold alerts, warehouse-to-store transfers, and barcode scanning accuracy.' },
  { icon: 'fa-cart-shopping', title: 'Order Flow Lifecycle', desc: 'Validation from customer cart to kitchen ticket routing, table assignments, discounts, modifiers, and receipt generation.' },
  { icon: 'fa-credit-card', title: 'Payment Processing', desc: 'Cash handling, card terminals, split-bill mathematics, tips calculation, discount codes, and full/partial refund edge cases.' },
  { icon: 'fa-print', title: 'Receipt & Kitchen Printers', desc: 'Thermal ESC/POS printing, paper roll widths, network/USB/Bluetooth print queues, and formatting consistency under load.' },
  { icon: 'fa-tv', title: 'Kitchen Display System (KDS)', desc: 'Real-time order routing, color-coded preparation timers, bump bar interactions, and order status sync across stations.' },
  { icon: 'fa-wifi', title: 'Offline Mode & Sync', desc: 'Local storage offline transaction caching, auto-reconnect sync queues, conflict resolution, and zero data loss on network drops.' },
  { icon: 'fa-file-invoice-dollar', title: 'Shift & EOD Reports', desc: 'End-of-day financial reconciliation, cashier float registers, tax reports, item sales breakdown, and audit trails.' },
  { icon: 'fa-store', title: 'Multi-Store Management', desc: 'Centralized catalog updates, multi-branch price variations, supplier purchase orders, and user role permission limits.' }
];

const processStepsData = [
  {
    num: '01',
    icon: 'fa-magnifying-glass',
    title: 'Understand & Analyze',
    desc: 'Deeply analyze user stories, business logic, system architecture, and acceptance criteria to map all test boundaries.',
    deliv: 'Requirements Coverage & Risk Map'
  },
  {
    num: '02',
    icon: 'fa-compass',
    title: 'Plan & Prioritize',
    desc: 'Establish scope, critical path scenarios, platform matrix (Windows, Mac, iOS, Android), and test execution priority.',
    deliv: 'Test Strategy & Schedule'
  },
  {
    num: '03',
    icon: 'fa-file-circle-check',
    title: 'Design & Prepare Data',
    desc: 'Draft structured test cases with preconditions, actionable test steps, validation points, and reliable test dataset setup.',
    deliv: 'Standardized Test Cases'
  },
  {
    num: '04',
    icon: 'fa-play',
    title: 'Execute & Validate',
    desc: 'Run manual, functional, boundary, regression, and exploratory suites across live builds, hardware terminals, and devices.',
    deliv: 'Execution Logs & Test Matrix'
  },
  {
    num: '05',
    icon: 'fa-bug',
    title: 'Report & Triage',
    desc: 'Document reproducible defect tickets with step-by-step videos, screenshots, network payloads, severity tags, and error logs.',
    deliv: 'Actionable Bug Tickets'
  },
  {
    num: '06',
    icon: 'fa-shield-halved',
    title: 'Verify & Sign-Off',
    desc: 'Retest resolved defects, execute targeted regression cycles to prevent regression bugs, and provide final QA release approval.',
    deliv: 'Release Quality Sign-Off'
  }
];

const projectsData = [
  {
    role: 'Software Test Engineer (QA)',
    company: 'Arkhitech',
    location: 'Lahore, Pakistan',
    duration: 'Sep 2025 — Present',
    summary: 'Spearheading end-to-end manual QA for enterprise POS systems (Foodnerd & Howmuch) and Fruitfull, a modern team-management web application.',
    highlights: [
      'Executed full manual, functional, regression, sanity, exploratory and UAT test cycles across POS desktop, web and native mobile apps.',
      'Validated critical restaurant and retail POS workflows: inventory tracking, thermal printing, payment gateway flows, and offline sync.',
      'Collaborated closely with engineering squads to reproduce complex bugs, verify hotfixes, and maintain seamless release cycles.'
    ],
    types: ['Manual Testing', 'Regression QA', 'POS Hardware', 'API Testing', 'UAT', 'Cross-Platform'],
    tools: ['Postman', 'Redmine', 'Chrome DevTools', 'VS Code', 'Electron POS']
  },
  {
    role: 'Software Engineer — ASP.NET Core Developer',
    company: 'SirizApps',
    location: 'Lahore, Pakistan',
    duration: 'Jan 2024 — Jul 2025',
    summary: 'Engineered scalable backend solutions and web services utilizing ASP.NET Core, MVC architecture, C#, and Microsoft SQL Server.',
    highlights: [
      'Built and maintained MVC web applications with clean database relationships, CRUD modules, and secure RESTful endpoints.',
      'Conducted unit validation, code reviews, and debugging sessions to ensure code stability, security, and high application reliability.',
      'Gained deep full-stack insights into software architecture, enabling superior root-cause defect analysis in QA roles.'
    ],
    types: ['ASP.NET Core', 'C# Backend', 'SQL Database', 'REST APIs', 'Unit Verification'],
    tools: ['C#', 'ASP.NET Core', 'SQL Server', 'Visual Studio', 'Git']
  },
  {
    role: 'Web Developer',
    company: 'Perfect Solution',
    location: 'Islamabad, Pakistan',
    duration: 'Jun 2023 — Dec 2023',
    summary: 'Developed dynamic web applications, built responsive user interfaces, and conducted pre-release functional testing.',
    highlights: [
      'Designed responsive interfaces using Bootstrap, HTML5, CSS3, and JavaScript with cross-browser compatibility across all devices.',
      'Performed initial QA smoke checks and edge-case UI tests before handing deliverables over to client staging environments.'
    ],
    types: ['Web Development', 'UI/UX Testing', 'Responsive Design', 'Smoke QA'],
    tools: ['JavaScript', 'HTML5/CSS3', 'Bootstrap', 'C#', 'SQL']
  }
];

const bugTicketsData = [
  {
    id: 'BUG-104',
    title: 'POS Offline Split-Payment Calculation & Sync Discrepancy',
    severity: 'critical',
    severityLabel: 'Critical',
    env: 'Electron Desktop POS v2.4 / Windows 11',
    actual: 'When splitting payment 50/50 between Cash and Card while offline, the sync queue failed to reconcile total amount on reconnect, leading to a balance mismatch in the EOD register.',
    expected: 'Split payment transactions created offline must accurately store both split segments and reconcile correctly upon internet reconnection.',
    steps: '1. Launch POS in Offline Mode.\n2. Create an order with 3 items totaling $100.\n3. Select Split Payment: $50 Cash, $50 Card.\n4. Complete order and re-enable network connection.\n5. Check EOD shift summary report.',
    rootCause: 'JSON transaction payload was overwriting split payment sub-objects when queuing offline storage in IndexedDB.'
  },
  {
    id: 'BUG-102',
    title: 'Thermal Receipt Print Queue Hanging on Special / UTF-8 Characters',
    severity: 'high',
    severityLabel: 'High',
    env: 'EPSON TM-T88VI / USB Thermal Printer',
    actual: 'Receipt printing hung indefinitely when customer names contained non-ASCII characters or emojis, locking subsequent print jobs.',
    expected: 'Printer driver module should sanitize or correctly encode UTF-8 bytes to ESC/POS format without freezing the queue.',
    steps: '1. Place order with special character notes: "Table 5 — Spécial".\n2. Trigger Print Receipt command.\n3. Observe printer status in task manager.',
    rootCause: 'Raw socket byte stream was not handling multi-byte UTF-8 string encoding offsets properly.'
  },
  {
    id: 'BUG-098',
    title: 'API Auth Token Expiration Resulting in Silent Cart Reset',
    severity: 'medium',
    severityLabel: 'Medium',
    env: 'Fruitfull Web App / Chrome & Safari',
    actual: 'When JWT access token expired during checkout form completion, submitting the form redirected to login and wiped user form state without warning.',
    expected: 'Silent refresh token should seamlessly renew session in background or preserve user draft cart state upon re-login.',
    steps: '1. Add items to cart and wait 15 minutes for token expiry.\n2. Click "Proceed to Checkout".\n3. Observe auth interceptor behavior.',
    rootCause: 'Axios response interceptor lacked automatic 401 refresh token retry logic.'
  }
];

const skillsData = [
  { name: 'Manual & Functional Testing', pct: 95 },
  { name: 'POS Domain & Hardware Testing', pct: 95 },
  { name: 'Regression, Smoke & Sanity Testing', pct: 92 },
  { name: 'Bug Reporting & Test Case Design', pct: 92 },
  { name: 'Cross-Platform (Windows, Mac, Mobile)', pct: 90 },
  { name: 'API Testing & Debugging (Postman)', pct: 85 },
  { name: 'Database Testing & SQL Queries', pct: 82 },
  { name: 'ASP.NET Core & C# Development', pct: 75 }
];

const whyPointsData = [
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Meticulous Eye for Detail',
    desc: 'I spot subtle UI anomalies, edge-case race conditions, and boundary breakdowns that average testing overlooks.'
  },
  {
    icon: 'fa-code',
    title: 'Developer Mindset QA',
    desc: 'With my ASP.NET Core & C# background, I understand backend logic, inspect stack traces, and speak the developer\'s language.'
  },
  {
    icon: 'fa-cash-register',
    title: 'Real-World POS Domain Mastery',
    desc: 'Deep, hands-on experience validating complex restaurant & retail POS operations, kitchen displays, and hardware printers.'
  },
  {
    icon: 'fa-file-circle-check',
    title: '100% Reproducible Bug Logs',
    desc: 'Clear, comprehensive bug reports with steps, environment data, payloads, and expected vs actual outcomes save dev hours.'
  },
  {
    icon: 'fa-arrows-split-up-and-left',
    title: 'Multi-Platform Mastery',
    desc: 'Skilled in cross-platform validation across Windows, macOS, Android, iOS, and Electron desktop frameworks.'
  },
  {
    icon: 'fa-bolt',
    title: 'Fast Turnaround & Reliability',
    desc: 'Dedicated to rapid test execution, swift smoke check turnarounds, and dependable release verification on every build.'
  }
];

// 2. DOM Builder Functions
function populateExpertiseGrid(containerId, count, filterCategory) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let items = expertiseData;
  if (filterCategory && filterCategory !== 'all') {
    items = items.filter(e => e.category === filterCategory);
  }
  if (count && count > 0) {
    items = items.slice(0, count);
  }

  container.innerHTML = items.map((item, idx) => `
    <div class="col-12 col-md-6 col-lg-4 reveal-up" style="animation-delay: ${idx * 60}ms">
      <article class="glass-card expertise-card">
        <div class="expertise-top">
          <div class="expertise-icon-box">
            <i class="fa-solid ${item.icon}"></i>
          </div>
          <span class="expertise-index">#${String(idx + 1).padStart(2, '0')}</span>
        </div>
        <h3 class="text-white">${item.title}</h3>
        <p>${item.desc}</p>
        <div class="expertise-tags">
          ${item.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
      </article>
    </div>
  `).join('');
}

function populateToolsGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = toolsData.map((tool, idx) => `
    <div class="col-6 col-md-4 col-lg-3 reveal-up" style="animation-delay: ${idx * 50}ms">
      <div class="glass-card tool-card">
        <div class="tool-icon-wrapper">
          <i class="fa-solid ${tool.icon}"></i>
        </div>
        <h4 class="text-white">${tool.name}</h4>
        <p class="mb-2">${tool.desc}</p>
        <span class="tool-badge">${tool.cat}</span>
      </div>
    </div>
  `).join('');
}

function populatePosGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = posModulesData.map((pos, idx) => `
    <div class="col-12 col-md-6 col-lg-3 reveal-up" style="animation-delay: ${idx * 60}ms">
      <div class="glass-card pos-card">
        <div class="pos-icon-header">
          <div class="pos-icon">
            <i class="fa-solid ${pos.icon}"></i>
          </div>
          <h4 class="text-white">${pos.title}</h4>
        </div>
        <p>${pos.desc}</p>
        <div class="pos-card-footer">
          <i class="fa-solid fa-circle-check"></i>
          <span>Production Verified</span>
        </div>
      </div>
    </div>
  `).join('');
}

function populateProcessGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = processStepsData.map((step, idx) => `
    <div class="col-12 col-md-6 col-lg-4 reveal-up" style="animation-delay: ${idx * 80}ms">
      <div class="glass-card process-step-card">
        <div class="process-step-top">
          <span class="process-step-num">${step.num}</span>
          <div class="process-step-icon">
            <i class="fa-solid ${step.icon}"></i>
          </div>
        </div>
        <h4 class="text-white">${step.title}</h4>
        <p>${step.desc}</p>
        <div class="process-deliverable">
          <i class="fa-solid fa-cube me-1 text-primary-light"></i> <strong>Output:</strong> ${step.deliv}
        </div>
      </div>
    </div>
  `).join('');
}

function populateProjectsGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projectsData.map((proj, idx) => `
    <div class="col-12 col-lg-4 reveal-up" style="animation-delay: ${idx * 100}ms">
      <article class="glass-card project-card">
        <div class="project-badge-bar">
          <span class="project-role-badge">${proj.role.split('—')[0].trim()}</span>
          <span class="project-date"><i class="fa-regular fa-calendar-days me-1"></i>${proj.duration}</span>
        </div>
        <h3 class="text-white">${proj.company}</h3>
        <p class="project-summary">${proj.summary}</p>
        
        <ul class="project-highlights">
          ${proj.highlights.map(h => `
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>

        <div class="project-pills-group">
          <div class="pills-row mb-1">
            ${proj.types.map(t => `<span class="pill-item">${t}</span>`).join('')}
          </div>
          <div class="pills-row">
            ${proj.tools.map(t => `<span class="pill-item" style="color: #818cf8; background: rgba(99,102,241,0.12);"><i class="fa-solid fa-wrench me-1" style="font-size:0.65rem;"></i>${t}</span>`).join('')}
          </div>
        </div>
      </article>
    </div>
  `).join('');
}

function populateBugTickets(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = bugTicketsData.map((bug, idx) => `
    <div class="col-12 col-lg-4 reveal-up" style="animation-delay: ${idx * 90}ms">
      <article class="bug-ticket-card ${idx === 0 ? 'open' : ''}" data-bug-id="${bug.id}">
        <button class="bug-ticket-header" type="button" onclick="toggleBugTicket(this)" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <div class="bug-header-left">
            <div class="bug-meta-row">
              <span class="bug-id-tag">${bug.id}</span>
              <span class="severity-pill severity-${bug.severity}">${bug.severityLabel}</span>
            </div>
            <h4 class="bug-title-text">${bug.title}</h4>
            <small class="text-muted"><i class="fa-solid fa-desktop me-1"></i>${bug.env}</small>
          </div>
          <div class="bug-chevron-icon">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </button>
        <div class="bug-ticket-body">
          <div class="bug-detail-grid">
            <div class="bug-detail-box">
              <h5><i class="fa-solid fa-circle-xmark text-danger me-1"></i> Actual Defect</h5>
              <p>${bug.actual}</p>
            </div>
            <div class="bug-detail-box">
              <h5><i class="fa-solid fa-circle-check text-success me-1"></i> Expected Behavior</h5>
              <p>${bug.expected}</p>
            </div>
          </div>
          <div class="bug-steps-box mb-2">
            <h5><i class="fa-solid fa-list-ol me-1"></i> Reproduction Steps</h5>
            <pre>${bug.steps}</pre>
          </div>
          <div class="p-2 rounded" style="background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); font-size:0.8rem;">
            <strong class="text-primary-light"><i class="fa-solid fa-lightbulb me-1"></i> QA Root-Cause Note:</strong> ${bug.rootCause}
          </div>
        </div>
      </article>
    </div>
  `).join('');
}

function toggleBugTicket(btn) {
  const card = btn.closest('.bug-ticket-card');
  const isOpen = card.classList.contains('open');
  card.classList.toggle('open');
  btn.setAttribute('aria-expanded', (!isOpen).toString());
}

function populateSkills(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = skillsData.map(s => `
    <div class="skill-bar-wrapper">
      <div class="skill-info">
        <span class="skill-name"><i class="fa-solid fa-check text-success me-2"></i>${s.name}</span>
        <span class="skill-percent">${s.pct}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-progress" data-width="${s.pct}%"></div>
      </div>
    </div>
  `).join('');
}

function populateWhyGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = whyPointsData.map((item, idx) => `
    <div class="col-12 col-md-6 reveal-up" style="animation-delay: ${idx * 60}ms">
      <div class="glass-card why-card">
        <div class="why-icon-box">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div>
          <h4 class="text-white">${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Page Initialization
document.addEventListener('DOMContentLoaded', () => {
  populateExpertiseGrid('expertGrid', 6, 'all');
  populateToolsGrid('toolsGrid');
  populatePosGrid('posGrid');
  populateProcessGrid('processGrid');
  populateProjectsGrid('projectsGrid');
  populateBugTickets('bugGrid');
  populateSkills('skillsContainer');
  populateWhyGrid('whyGrid');

  // If on full expertise page
  populateExpertiseGrid('allExpertGrid', null, 'all');

  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      populateExpertiseGrid('allExpertGrid', null, cat);
      initScrollAnimations();
    });
  });

  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (nav) {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    let currentSection = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  initScrollAnimations();
  initSkillObserver();
  initContactForms();
});

function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.08 });

  reveals.forEach(el => observer.observe(el));
}

function initSkillObserver() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = container.querySelectorAll('.skill-progress');
        bars.forEach(bar => {
          bar.style.width = bar.getAttribute('data-width');
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(container);
}

function initContactForms() {
  const forms = ['contactForm', 'contactPageForm'];
  forms.forEach(formId => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const msgInput = form.querySelector('textarea');

      if (!nameInput || !nameInput.value.trim()) {
        showToast('Please provide your name.', 'warning');
        return;
      }
      if (!emailInput || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        showToast('Please provide a valid email address.', 'warning');
        return;
      }
      if (!msgInput || !msgInput.value.trim()) {
        showToast('Please enter your project message.', 'warning');
        return;
      }

      showToast(`Thank you, ${nameInput.value.trim()}! Your message has been received. I will respond within 24 hours.`, 'success');
      form.reset();
    });
  });
}

function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }

  const toastId = 'toast_' + Date.now();
  const bgClass = type === 'success' ? 'bg-success text-white' : 'bg-warning text-dark';
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation';

  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 show shadow-lg mb-2" role="alert" aria-live="assertive" aria-atomic="true" style="border-radius: 0.85rem;">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="fa-solid ${icon} fs-5"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onclick="this.closest('.toast').remove()"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  setTimeout(() => {
    const el = document.getElementById(toastId);
    if (el) el.remove();
  }, 5000);
}
