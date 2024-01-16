import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import { render } from '@react-email/render';
import { SlackConfirmEmail } from '@/emails/Confirm'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const { company_name, fullname, email, msg } = await req.json()
  // console.log(email)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.NODEMAILER_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
  });

  const emailTemplate = render(<SlackConfirmEmail msg={msg} fullname={fullname} />)

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: email,
    bcc: process.env.NODEMAILER_USER,
    subject: `Message from ${fullname} - ${company_name}`,
    html: emailTemplate
  }

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'eMail sent' }, {status: 200});
  } catch (e) {
    console.error('Error sending email:', e);
    throw e;
  }
}