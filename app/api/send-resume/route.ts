import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const role = formData.get('role') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File | null

    // Prepare attachments if resume is provided
    const attachments = []
    if (resume) {
      const buffer = await resume.arrayBuffer()
      attachments.push({
        filename: resume.name,
        content: Buffer.from(buffer),
      })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Dewata Global Website <noreply@dewata-global.com>',
      to: ['info@dewata-global.com'],
      subject: `New Resume Submission: ${role} - ${name}`,
      html: `
        <h2>New Resume Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${role}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        ${resume ? `<p><strong>Resume:</strong> ${resume.name} (attached)</p>` : '<p><em>No resume attached</em></p>'}
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
