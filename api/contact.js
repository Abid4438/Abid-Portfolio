const RECIPIENT_EMAIL = 'abidaliaslam282@gmail.com';
const FROM_EMAIL = 'Portfolio Contact Form <onboarding@resend.dev>';

function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderPills(items) {
  if (!Array.isArray(items) || items.length === 0) return '<span style="color:#94a3b8;font-style:italic;">None specified</span>';
  return items
    .map(
      (item) =>
        `<span style="display:inline-block;padding:4px 10px;margin:2px 4px 2px 0;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.35);border-radius:999px;font-size:12px;color:#c7d2fe;font-weight:600;">${escapeHtml(item)}</span>`
    )
    .join(' ');
}

function buildBlueprintHtml(blueprint, name, email, subject) {
  const bp = blueprint || {};
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:24px;background-color:#080c17;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#f8fafc;">
  <div style="max-width:680px;margin:0 auto;background:#0f172a;border:1px solid rgba(148,163,184,0.2);border-radius:16px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.5);">
    
    <!-- Header Banner -->
    <div style="background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 50%,#c026d3 100%);padding:32px 28px;text-align:left;">
      <div style="display:inline-block;padding:4px 12px;background:rgba(255,255,255,0.2);border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#ffffff;margin-bottom:8px;">
        🚀 Project Discovery Blueprint
      </div>
      <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;line-height:1.2;">
        ${escapeHtml(bp.projectName || 'New Project Scope Intake')}
      </h1>
      <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.85);">
        Submitted by <strong>${escapeHtml(name)}</strong> (${escapeHtml(bp.company || 'Individual / Direct Client')})
      </p>
    </div>

    <div style="padding:28px;">

      <!-- 1. Client Details -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:20px;">
        <h3 style="margin:0 0 14px;font-size:15px;color:#818cf8;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:8px;">
          👤 Client &amp; Stakeholder Details
        </h3>
        <table style="width:100%;font-size:13px;color:#cbd5e1;border-collapse:collapse;">
          <tr>
            <td style="padding:4px 0;width:35%;color:#94a3b8;"><strong>Name:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Email:</strong></td>
            <td style="padding:4px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#38bdf8;text-decoration:none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Phone / WhatsApp:</strong></td>
            <td style="padding:4px 0;color:#ffffff;"><a href="tel:${escapeHtml(bp.phone || '')}" style="color:#34d399;text-decoration:none;">${escapeHtml(bp.phone || 'N/A')}</a></td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Company / Org:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(bp.company || 'N/A')}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Location &amp; Timezone:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(bp.location || 'N/A')}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Preferred Comm:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(bp.preferredCommunication || 'Email')}</td>
          </tr>
        </table>
      </div>

      <!-- 2. Project Classification -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:20px;">
        <h3 style="margin:0 0 14px;font-size:15px;color:#38bdf8;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:8px;">
          📦 Project Identity &amp; Status
        </h3>
        <table style="width:100%;font-size:13px;color:#cbd5e1;border-collapse:collapse;margin-bottom:12px;">
          <tr>
            <td style="padding:4px 0;width:35%;color:#94a3b8;"><strong>Industry Domain:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(bp.industryDomain || 'N/A')}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Current Lifecycle Stage:</strong></td>
            <td style="padding:4px 0;color:#fbbf24;font-weight:600;">${escapeHtml(bp.projectStage || 'N/A')}</td>
          </tr>
        </table>
        <div style="margin-bottom:14px;">
          <div style="font-size:12px;color:#94a3b8;margin-bottom:6px;"><strong>Project Categories:</strong></div>
          ${renderPills(bp.projectCategories)}
        </div>
        <div>
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Product Overview &amp; Primary Goal:</strong></div>
          <div style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);padding:12px;border-radius:8px;font-size:13px;color:#f1f5f9;line-height:1.6;white-space:pre-wrap;">${escapeHtml(bp.projectOverview || 'N/A')}</div>
        </div>
      </div>

      <!-- 3. Technical Stack -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:20px;">
        <h3 style="margin:0 0 14px;font-size:15px;color:#34d399;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:8px;">
          ⚙️ Technical Architecture &amp; Integrations
        </h3>
        <div style="margin-bottom:12px;">
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Frontend:</strong></div>
          ${renderPills(bp.frontendStack)}
        </div>
        <div style="margin-bottom:12px;">
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Backend &amp; APIs:</strong></div>
          ${renderPills(bp.backendStack)}
        </div>
        <div style="margin-bottom:12px;">
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Database &amp; Cache:</strong></div>
          ${renderPills(bp.databaseStack)}
        </div>
        <div>
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Hardware &amp; POS Peripherals:</strong></div>
          ${renderPills(bp.hardwareStack)}
        </div>
      </div>

      <!-- 4. QA Scope & Target Matrix -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:20px;">
        <h3 style="margin:0 0 14px;font-size:15px;color:#c084fc;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:8px;">
          🛡️ Required QA Scope &amp; Device Matrix
        </h3>
        <div style="margin-bottom:12px;">
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Services Needed:</strong></div>
          ${renderPills(bp.qaServices)}
        </div>
        <div style="margin-bottom:12px;">
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Target Platforms &amp; Browsers:</strong></div>
          ${renderPills(bp.targetMatrix)}
        </div>
        <div>
          <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Known Bugs &amp; Risk Areas:</strong></div>
          <div style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);padding:12px;border-radius:8px;font-size:13px;color:#f1f5f9;line-height:1.6;white-space:pre-wrap;">${escapeHtml(bp.knownPainPoints || 'None specified')}</div>
        </div>
      </div>

      <!-- 5. Timeline, Budget & Links -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:20px;">
        <h3 style="margin:0 0 14px;font-size:15px;color:#fbbf24;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:8px;">
          ⏱️ Timeline, Budget &amp; Assets
        </h3>
        <table style="width:100%;font-size:13px;color:#cbd5e1;border-collapse:collapse;margin-bottom:12px;">
          <tr>
            <td style="padding:4px 0;width:35%;color:#94a3b8;"><strong>Start Urgency:</strong></td>
            <td style="padding:4px 0;color:#34d399;font-weight:600;">${escapeHtml(bp.targetTimeline || 'Immediate')}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Target Release:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(bp.targetDeadline || 'Flexible')}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Engagement Model:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(bp.engagementModel || 'N/A')}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;color:#94a3b8;"><strong>Budget Range:</strong></td>
            <td style="padding:4px 0;color:#ffffff;">${escapeHtml(bp.estimatedBudget || 'N/A')}</td>
          </tr>
        </table>
        ${
          bp.assetLinks
            ? `<div style="margin-bottom:12px;"><div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Asset &amp; Spec URLs:</strong></div><div style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:8px;font-size:13px;color:#38bdf8;word-break:break-all;">${escapeHtml(bp.assetLinks)}</div></div>`
            : ''
        }
        ${
          bp.additionalNotes
            ? `<div><div style="font-size:12px;color:#94a3b8;margin-bottom:4px;"><strong>Additional Notes:</strong></div><div style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:8px;font-size:13px;color:#cbd5e1;line-height:1.5;">${escapeHtml(bp.additionalNotes)}</div></div>`
            : ''
        }
      </div>

    </div>

    <!-- Footer -->
    <div style="padding:16px 28px;background:rgba(0,0,0,0.4);border-top:1px solid rgba(255,255,255,0.08);text-align:center;font-size:12px;color:#64748b;">
      Submitted via <strong>Abid Ali QA Portfolio Project Planner</strong> • Direct Reply to: <a href="mailto:${escapeHtml(email)}" style="color:#818cf8;text-decoration:none;">${escapeHtml(email)}</a>
    </div>

  </div>
</body>
</html>
  `.trim();
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const formData = req.body || {};
  const name = String(formData.name || '').trim();
  const email = String(formData.email || '').trim();
  const subject = String(formData.subject || 'New portfolio enquiry').trim();
  const message = String(formData.message || '').trim();
  const isBlueprint = Boolean(formData.isBlueprint || formData.blueprint);
  const blueprintData = formData.blueprint || null;

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Please provide valid contact details.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.');
    return res.status(500).json({ success: false, error: 'Email service is not configured.' });
  }

  const emailHtml = isBlueprint && blueprintData
    ? buildBlueprintHtml(blueprintData, name, email, subject)
    : `
      <div style="font-family:sans-serif;padding:20px;background:#080c17;color:#f8fafc;border-radius:12px;max-width:600px;">
        <h2 style="color:#818cf8;margin-top:0;">New Portfolio Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#38bdf8;">${escapeHtml(email)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <div style="margin-top:16px;padding:16px;background:rgba(255,255,255,0.05);border-radius:8px;border:1px solid rgba(255,255,255,0.1);">
          <strong style="color:#cbd5e1;">Message:</strong>
          <p style="margin:8px 0 0;white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'abid-portfolio-contact-form/1.0',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `Portfolio: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      console.error('Resend error:', await resendResponse.text());
      return res.status(502).json({ success: false, error: 'Unable to send your message right now.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, error: 'Unable to send your message right now.' });
  }
};
