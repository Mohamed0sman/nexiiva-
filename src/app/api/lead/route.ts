import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const NOTIFICATION_EMAIL = 'Mostafa.adel.esmaiel@gmail.com';
const WHATSAPP_NUMBER = '01004131154';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Spam honeypot protection
    if (data.honeypot) {
      return NextResponse.json({ success: true, message: 'Received' });
    }

    const timestamp = new Date().toISOString();
    const leadRecord = {
      timestamp,
      notificationTarget: NOTIFICATION_EMAIL,
      ...data,
    };

    // 1. Persist lead to disk in data/leads.jsonl
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.appendFileSync(
        path.join(dataDir, 'leads.jsonl'),
        JSON.stringify(leadRecord) + '\n',
        'utf8'
      );
    } catch (fsErr) {
      console.error('[Nexiiva Lead Storage Error]', fsErr);
    }

    console.log('=== [NEXIIVA NEW LEAD TRANSMISSION] ===');
    console.log(`To: ${NOTIFICATION_EMAIL}`);
    console.log(`WhatsApp Contact: ${WHATSAPP_NUMBER}`);
    console.log(JSON.stringify(leadRecord, null, 2));

    // 2. Optional SMTP dispatch if environment variables are provided
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    let emailSent = false;
    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost || 'smtp.gmail.com',
          port: smtpHost ? Number(process.env.SMTP_PORT || 587) : 465,
          secure: !smtpHost || process.env.SMTP_PORT === '465',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const subject =
          data.type === 'pilot'
            ? `[Nexiiva Pilot Request] ${data.companyName || ''} - ${data.fullName || ''}`
            : `[Nexiiva Contact Inquiry] ${data.subject || ''} from ${data.name || ''}`;

        const html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <div style="background-color: #0284C7; padding: 16px; border-radius: 6px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">NEXIIVA · NEW INQUIRY</h2>
            </div>
            <div style="padding: 20px 0;">
              <p style="font-size: 14px; color: #475569;">Received at: <strong>${timestamp}</strong></p>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${Object.entries(data)
                  .filter(([k]) => k !== 'honeypot')
                  .map(
                    ([k, v]) => `
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: bold; width: 35%; text-transform: capitalize;">${k}</td>
                    <td style="padding: 8px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${v}</td>
                  </tr>
                `
                  )
                  .join('')}
              </table>
            </div>
            <div style="background-color: #f8fafc; padding: 12px; border-radius: 6px; font-size: 12px; color: #64748b; text-align: center;">
              This notification was generated from Nexiiva Web Platform for Eng. Mostafa Adel.
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Nexiiva Operations" <${smtpUser}>`,
          to: NOTIFICATION_EMAIL,
          subject,
          html,
        });
        emailSent = true;
      } catch (mailErr) {
        console.error('[Nexiiva Email Dispatch Notice]', mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      notificationEmail: NOTIFICATION_EMAIL,
      whatsappNumber: WHATSAPP_NUMBER,
      message: 'Inquiry registered and dispatched.',
    });
  } catch (error) {
    console.error('[Nexiiva API Lead Error]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server processing error' },
      { status: 500 }
    );
  }
}
