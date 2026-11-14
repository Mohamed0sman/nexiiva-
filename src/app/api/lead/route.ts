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
            ? `[Nexiiva Pilot Request] ${data.companyName || data.company || ''} - ${data.fullName || data.name || ''}`
            : `[Nexiiva Inquiries] ${data.interest || data.subject || 'New Contact'} from ${data.name || ''} (${data.company || ''})`;

        const html = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="background-color: #0084d3; padding: 18px 24px; border-radius: 8px; text-align: left;">
              <h2 style="color: #ffffff; margin: 0; font-size: 18px; letter-spacing: 0.5px; font-weight: 700;">NEXIIVA · OPERATOR TRAINING SIMULATOR</h2>
              <p style="color: #e0f2fe; margin: 4px 0 0 0; font-size: 13px;">New Web Lead & Direct Inquiries Notification</p>
            </div>
            
            <div style="padding: 24px 0;">
              <p style="font-size: 13px; color: #64748b; margin-top: 0;">Received at: <strong style="color: #0f172a;">${timestamp}</strong></p>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; width: 30%;">Full Name</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 700;">${data.name || data.fullName || '—'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Client Email</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0084d3; font-weight: 600;">
                    ${data.email ? `<a href="mailto:${data.email}" style="color: #0084d3; text-decoration: underline;">${data.email}</a>` : '—'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Phone / WhatsApp</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">
                    ${data.phone ? `<a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #059669; text-decoration: underline;">${data.phone}</a>` : '—'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Company / Facility</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.company || data.companyName || '—'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Interested In / Plan</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${data.interest || data.subject || data.type || 'General'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; vertical-align: top;">Message / Scope</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; white-space: pre-wrap; line-height: 1.6;">${data.message || '—'}</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 14px 18px; border-radius: 8px; font-size: 13px; color: #475569;">
              <p style="margin: 0 0 6px 0; font-weight: 600; color: #0f172a;">Quick Actions for Eng. Mostafa Adel:</p>
              <ul style="margin: 0; padding-left: 20px; color: #475569;">
                <li>Click <strong>Reply</strong> in your email client to respond directly to <a href="mailto:${data.email}">${data.email || 'the client'}</a>.</li>
                ${data.phone ? `<li>Open WhatsApp: <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #059669; font-weight: 600;">Chat with client on WhatsApp</a></li>` : ''}
              </ul>
            </div>
            
            <div style="margin-top: 20px; font-size: 11px; color: #94a3b8; text-align: center;">
              Dispatched automatically by Nexiiva Web Engine to Eng. Mostafa Adel (mostafa.adel.esmaiel@gmail.com).
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Nexiiva Lead System" <${smtpUser}>`,
          to: NOTIFICATION_EMAIL,
          replyTo: data.email || undefined,
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
      message: emailSent
        ? 'Inquiry registered and email dispatched to Mostafa Adel.'
        : 'Inquiry registered in database. Configure GMAIL_APP_PASSWORD to enable real-time email dispatch.',
    });
  } catch (error) {
    console.error('[Nexiiva API Lead Error]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server processing error' },
      { status: 500 }
    );
  }
}
