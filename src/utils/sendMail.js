const nodemailer = require("nodemailer");

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASSWORD,
  },
});

// Function to send an email
async function sendEmail(to, subject, text) {
  try {
    const mailOptions = {
      from: process.env.GMAIL,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    // console.log("Email sent:", info.response);
    if (info.accepted && info.accepted.length > 0) {
      return {
        success: true,
        message: "Email sent successfully",
        info: info.response,
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = { sendEmail };
