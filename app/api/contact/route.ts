// export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    // Professional email template for site owner
    const ownerEmailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
          }
          .header h1 { font-size: 28px; margin-bottom: 10px; }
          .header p { opacity: 0.9; font-size: 16px; }
          .content { padding: 40px 30px; }
          .message-card { 
            background: #f8fafc; 
            border-left: 4px solid #667eea; 
            padding: 25px; 
            margin: 20px 0; 
            border-radius: 0 8px 8px 0;
          }
          .sender-info { 
            background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%); 
            padding: 20px; 
            border-radius: 8px; 
            margin: 20px 0; 
          }
          .info-row { display: flex; margin: 10px 0; align-items: center; }
          .info-label { 
            font-weight: 600; 
            color: #4a5568; 
            min-width: 100px; 
            display: inline-flex; 
            align-items: center; 
          }
          .info-value { color: #2d3748; }
          .footer { 
            background: #2d3748; 
            color: #cbd5e0; 
            padding: 30px; 
            text-align: center; 
            font-size: 14px; 
          }
          .timestamp { 
            background: #e2e8f0; 
            padding: 15px; 
            border-radius: 6px; 
            text-align: center; 
            color: #4a5568; 
            font-size: 14px; 
            margin: 20px 0; 
          }
          .priority-badge { 
            background: #f56565; 
            color: white; 
            padding: 4px 12px; 
            border-radius: 20px; 
            font-size: 12px; 
            font-weight: 600; 
            display: inline-block; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Contact Form Submission</h1>
            <p>Someone reached out through your portfolio website</p>
          </div>
          
          <div class="content">
            <div class="timestamp">
              📅 Received on ${currentDate}
            </div>
            
            <div class="sender-info">
              <h3 style="color: #2d3748; margin-bottom: 15px;">👤 Sender Information</h3>
              <div class="info-row">
                <span class="info-label">📧 Email:</span>
                <span class="info-value">${email}</span>
              </div>
              <div class="info-row">
                <span class="info-label">👨‍💻 Name:</span>
                <span class="info-value">${fullName}</span>
              </div>
              <div class="info-row">
                <span class="info-label">📝 Subject:</span>
                <span class="info-value">${subject}</span>
              </div>
            </div>
            
            <div class="message-card">
              <h3 style="color: #2d3748; margin-bottom: 15px;">💬 Message Content</h3>
              <p style="color: #4a5568; white-space: pre-wrap; font-size: 15px;">${message}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}?subject=Re: ${subject}" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; 
                        padding: 12px 30px; 
                        text-decoration: none; 
                        border-radius: 25px; 
                        font-weight: 600; 
                        display: inline-block;">
                ✉️ Reply to ${firstName}
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>🌟 This email was sent from your portfolio contact form</p>
            <p style="margin-top: 10px; opacity: 0.7;">Shrawan Kumar - Full Stack Developer</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Professional confirmation email template for user
    const userConfirmationTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message Received - Shrawan Kumar</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 12px; overflow: hidden; }
          .header { 
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); 
            color: white; 
            padding: 50px 30px; 
            text-align: center; 
            position: relative;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="3" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="white" opacity="0.1"/></svg>');
          }
          .header-content { position: relative; z-index: 1; }
          .header h1 { font-size: 32px; margin-bottom: 10px; font-weight: 700; }
          .header p { opacity: 0.9; font-size: 18px; }
          .profile-badge { 
            width: 80px; 
            height: 80px; 
            background: rgba(255,255,255,0.2); 
            border-radius: 50%; 
            margin: 0 auto 20px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 36px; 
          }
          .content { padding: 40px 30px; color: #e2e8f0; }
          .greeting { 
            font-size: 20px; 
            color: #60a5fa; 
            margin-bottom: 20px; 
            font-weight: 600; 
          }
          .message-summary { 
            background: linear-gradient(135deg, #1e40af20 0%, #7c3aed20 100%); 
            border: 1px solid #374151; 
            padding: 25px; 
            border-radius: 12px; 
            margin: 25px 0; 
          }
          .original-message { 
            background: #374151; 
            padding: 20px; 
            border-radius: 8px; 
            border-left: 4px solid #60a5fa; 
            margin: 20px 0; 
          }
          .response-time { 
            background: linear-gradient(135deg, #059669 0%, #0d9488 100%); 
            color: white; 
            padding: 15px 20px; 
            border-radius: 8px; 
            text-align: center; 
            margin: 25px 0; 
            font-weight: 600; 
          }
          .social-links { 
            text-align: center; 
            margin: 30px 0; 
          }
          .social-links a { 
            display: inline-block; 
            margin: 0 10px; 
            padding: 12px; 
            background: #374151; 
            color: #9ca3af; 
            border-radius: 50%; 
            text-decoration: none; 
            transition: all 0.3s ease; 
            width: 44px; 
            height: 44px; 
            line-height: 20px; 
          }
          .footer { 
            background: #111827; 
            color: #6b7280; 
            padding: 30px; 
            text-align: center; 
            font-size: 14px; 
          }
          .footer a { color: #60a5fa; text-decoration: none; }
          .tech-stack { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 8px; 
            justify-content: center; 
            margin: 20px 0; 
          }
          .tech-tag { 
            background: #374151; 
            color: #9ca3af; 
            padding: 6px 12px; 
            border-radius: 20px; 
            font-size: 12px; 
            border: 1px solid #4b5563; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-content">
              <div class="profile-badge">👨‍💻</div>
              <h1>Message Received!</h1>
              <p>Thank you for reaching out</p>
            </div>
          </div>
          
          <div class="content">
            <div class="greeting">Hi ${firstName}! 👋</div>
            
            <p>Thank you for contacting me through my portfolio! I'm excited to connect with you.</p>
            
            <div class="message-summary">
              <h3 style="color: #60a5fa; margin-bottom: 15px;">📋 Message Summary</h3>
              <div style="margin: 10px 0;">
                <strong style="color: #9ca3af;">Subject:</strong> 
                <span style="color: #e2e8f0;">${subject}</span>
              </div>
              <div style="margin: 10px 0;">
                <strong style="color: #9ca3af;">Date:</strong> 
                <span style="color: #e2e8f0;">${currentDate}</span>
              </div>
            </div>
            
            <div class="original-message">
              <h4 style="color: #60a5fa; margin-bottom: 10px;">Your Message:</h4>
              <p style="color: #d1d5db; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div class="response-time">
              ⚡ I typically respond within 24-48 hours
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <h3 style="color: #60a5fa; margin-bottom: 15px;">🚀 What I Do</h3>
              <div class="tech-stack">
                <span class="tech-tag">⚛️ React</span>
                <span class="tech-tag">🟢 Node.js</span>
                <span class="tech-tag">📱 Next.js</span>
                <span class="tech-tag">🎨 TypeScript</span>
                <span class="tech-tag">🎯 MongoDB</span>
                <span class="tech-tag">☁️ AWS</span>
              </div>
            </div>
            
            <div class="social-links">
              <h4 style="color: #9ca3af; margin-bottom: 15px;">Connect with me:</h4>
              <a href="https://github.com/shrawan7650" title="GitHub">🐱</a>
              <a href="https://linkedin.com/shrawan-kumar-rai" title="LinkedIn">💼</a>
              <a href="https://www.instagram.com/inspitech/" title="Instagram">📷</a>
              <a href="mailto:shrawan2401@gmail.com" title="Email">✉️</a>
            </div>
            
            <div style="background: #374151; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <p style="color: #9ca3af;">💡 <strong>Pro Tip:</strong> Feel free to check out my latest projects on GitHub while you wait for my response!</p>
            </div>
          </div>
          
          <div class="footer">
            <p>🌟 This is an automated confirmation email</p>
            <p style="margin: 10px 0;">
              <strong>Shrawan Kumar</strong> - Full Stack Developer<br>
              📍 Dhanbad, Jharkhand | 📧 <a href="mailto:shrawan2401@gmail.com">shrawan2401@gmail.com</a>
            </p>
            <p style="margin-top: 15px; opacity: 0.7;">
              Made with ❤️ and lots of ☕ | Portfolio: 
              <a href="https://your-portfolio-url.com">your-portfolio-url.com</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 1️⃣ Send email to site owner
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `🚀 New Portfolio Contact: ${subject}`,
      text: `New message from ${fullName} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: ownerEmailTemplate,
    });

    // 2️⃣ Send confirmation email to user
    await transporter.sendMail({
      from: `"Shrawan Kumar - Portfolio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `✅ Message Received: ${subject}`,
      text: `Hi ${firstName},\n\nThank you for contacting me! I have received your message and will get back to you within 24-48 hours.\n\nYour message:\n${message}\n\nBest regards,\nShrawan Kumar\nFull Stack Developer`,
      html: userConfirmationTemplate,
    });

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully! You'll receive a confirmation email shortly." 
    });

  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send email. Please try again or contact me directly." 
      },
      { status: 500 }
    );
  }
}