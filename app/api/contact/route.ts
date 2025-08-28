import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../../../lib/mail';

export async function POST(req: NextRequest) {
     try {

          const { name, email, message } = await req.json();
          if (!name || !email || !message) {
               return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
          }

          const info = await sendMail({
               to: 'damjanovic.branislav@gmail.com',
               from: email,
               subject: `Portfolio Contact Form: ${name}`,
               text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
               html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`
          });

          return NextResponse.json({ success: true });
     } catch (error) {
          return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
     }
}
