import nodeemailer from "nodemailer"
export const Sendmail = async (email) => {
    const transport = nodeemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    const html =`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome to VITAcademic</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; font-family: 'Outfit', sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; margin-top: 50px; overflow: hidden; box-shadow: 0 0 12px rgba(0,0,0,0.1);">
          <tr>
            <td align="center" style="background-color: #33A491; color: white; padding: 35px 20px;">
              <h1 style="margin: 0; font-size: 28px;">Welcome to <span style="font-weight: 700;">VITAcademic 🎓</span></h1>
              <p style="margin: 8px 0 0; font-size: 16px;">Learn smart. Prepare better.</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 35px 40px; color: #333333; font-size: 16px; line-height: 1.6;">
              <p>Hi there 👋,</p>
              <p>Welcome to <strong>VITAcademic</strong> – a personal initiative by your seniors to support first-year students like you.</p>
              <p>We know that college lectures can sometimes be confusing, especially when you're just starting out. That’s why we built this platform to help you with:</p>
              <ul style="padding-left: 20px; margin-top: 10px;">
                <li>📚 Clear and simple Notes</li>
                <li>📝 Practice Materials for exam prep</li>
                <li>💡 Peer Guidance and Tips from Seniors</li>
              </ul>
              <p>Let’s make studying less stressful and more effective. You’re not alone – we're here to help you master the syllabus confidently.</p>
              <p style="text-align: center; margin: 30px 0;">
                <a href="https://vitacadeemic.onrender.com" style="background-color: #33A491; color: white; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; display: inline-block;">Start Learning Now</a>
              </p>
              <p>Stay focused. Stay confident. Stay prepared. 💪</p>
              <p style="margin-top: 20px;">– Team VITAcademic</p>
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              <p style="font-size: 14px; color: #888;">
                <strong>Note:</strong> VITAcademic is an unofficial student-led platform. It is <strong>not affiliated with or endorsed by VIT College</strong>. It is a personal initiative to help fellow students.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="background-color: #f1f1f1; padding: 20px; font-size: 12px; color: #777;">
              © 2025 VITAcademic · Built by VITians, for VITians 💚
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
   await transport.sendMail({
    from: `"VITAcademic Team 🎓" <${process.env.EMAIL}>`,
    to: email,
    subject: "🎓 Welcome to VITAcademic – Let's Ace Your First Year!",
    html
  });
}