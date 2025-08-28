import nodemailer from 'nodemailer';

export async function sendMail({ to, from, subject, text, html }: { to: string; from: string; subject: string; text?: string; html?: string }) {
     // Configure the transporter with your SMTP settings
     const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
               user: 'damjanovic.branislav@gmail.com',
               pass: process.env.SMTP_PASS,
          },
     });
     console.log('Transporter created:', process.env.SMTP_PASS);

     // Send mail with defined transport object
     const info = await transporter.sendMail({
          from,
          to,
          subject,
          text,
          html,
     });
     console.log('Email sent:', info);

     return info;
}
