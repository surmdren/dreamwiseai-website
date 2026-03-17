import { NextRequest } from 'next/server'

interface ContactFormData {
  name: string
  company: string
  email: string
  challenge?: string
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

    const { error } = await resend.emails.send({
      from: 'DreamWise AI Website <noreply@dreamwiseai.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Lead: ${name} from ${company}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1E3A8A;">New Lead from DreamWise AI Website</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;width:140px;">Name:</td><td style="padding:8px;">${name}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:8px;font-weight:bold;">Company:</td><td style="padding:8px;">${company}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
            ${challenge ? `<tr style="background:#f8fafc;"><td style="padding:8px;font-weight:bold;">Challenge:</td><td style="padding:8px;">${challenge}</td></tr>` : ''}
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
