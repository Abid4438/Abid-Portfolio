const RECIPIENT_EMAIL = 'abidaliaslam282@gmail.com';
const FROM_EMAIL = 'Portfolio Contact Form <onboarding@resend.dev>';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ success: false, error: 'Method not allowed.' }) };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.');
    return { statusCode: 500, body: JSON.stringify({ success: false, error: 'Email service is not configured.' }) };
  }

  let formData;
  try {
    formData = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ success: false, error: 'Invalid form data.' }) };
  }

  const name = String(formData.name || '').trim();
  const email = String(formData.email || '').trim();
  const subject = String(formData.subject || 'New portfolio enquiry').trim();
  const message = String(formData.message || '').trim();

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ success: false, error: 'Please provide valid contact details.' }) };
  }

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
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `<h2>New portfolio message</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!resendResponse.ok) {
      console.error('Resend error:', await resendResponse.text());
      return { statusCode: 502, body: JSON.stringify({ success: false, error: 'Unable to send your message right now.' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Contact form error:', error);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: 'Unable to send your message right now.' }) };
  }
};
