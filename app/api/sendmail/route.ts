import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const { company_name, fullname, email, msg } = await req.json()
  // console.log(company_name)

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

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILER_USER,
    subject: `Message from ${fullname} - ${company_name}`,
    text: msg,
    html: `<p>${msg}</p>`
  }

  try {
    const info = await transporter.sendMail(mailOptions);
  
    // console.log('Email sent:', info.response);
    return NextResponse.json({ message: 'eMail sent' }, {status: 200});
  } catch (e) {
    console.error('Error sending email:', e);
    throw e;
  }
}