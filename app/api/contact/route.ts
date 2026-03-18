import { NextRequest } from 'next/server'

interface ContactFormData {
  name: string
  company: string
  email: string
  challenge?: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, company, email, challenge } = body

    if (!name?.trim() || !company?.trim() || !email?.trim()) {
      return Response.json(
        { error: 'Missing required fields: name, company, email' },
        { status: 400 }
      )
    }

    if (name.length > 100 || company.length > 100 || email.length > 254 || (challenge && challenge.length > 2000)) {
      return Response.json({ error: 'Input exceeds maximum length' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return Response.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const safeName = escapeHtml(name)
    const safeCompany = escapeHtml(company)
    const safeEmail = escapeHtml(email)
    const safeChallenge = challenge ? escapeHtml(challenge) : ''

    const { error } = await resend.emails.send({
      from: 'DreamWise AI Website <hello@dreamwiseai.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Lead: ${safeName} from ${safeCompany}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1E3A8A;">New Lead from DreamWise AI Website</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;width:140px;">Name:</td><td style="padding:8px;">${safeName}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:8px;font-weight:bold;">Company:</td><td style="padding:8px;">${safeCompany}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            ${safeChallenge ? `<tr style="background:#f8fafc;"><td style="padding:8px;font-weight:bold;">Challenge:</td><td style="padding:8px;">${safeChallenge}</td></tr>` : ''}
          </table>
          <p style="color:#94a3b8;font-size:12px;margin-top:24px;">Submitted at ${new Date().toUTCString()}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
