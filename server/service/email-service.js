const sgMail = require("@sendgrid/mail");

const sendFirstEmail = (info) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: info.email, // Change to your recipient
    from: process.env.SECRET_SENDER, // Change to your verified sender
    subject: "Your emergency code is scanned!",
    text: info.message_content,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendFirstEmail };
