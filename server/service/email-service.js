// const fs = require('fs');
// const path = require('path');
// const {google} = require('googleapis');
// const MailComposer = require('nodemailer/lib/mail-composer');
// const key = require(path.join(__dirname, 'hackathon-email-370609-f523e162e57c'));

// const SCOPES = [
//   'https://mail.google.com/',
//   'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
//   'https://www.googleapis.com/auth/gmail.readonly',
//   'https://www.googleapis.com/auth/gmail.send',
//   'https://www.googleapis.com/auth/gmail.modify',
//   'https://www.googleapis.com/auth/gmail.compose'];
// const SENDER_EMAIL = 'admin@fshyz.com';

// const gmail = () => {
//   const JWT = google.auth.JWT;
//   const authClient = new JWT({
//     email: key.client_email,
//     key: key.private_key,
//     scopes: SCOPES,
//     subject: SENDER_EMAIL,
//   });
//   return google.gmail({version: 'v1', auth: authClient});
// }

// const encodeMessage = (message) => {
//   return Buffer.from(message).toString('base64');
// }

// const createMail = async (options) => {
//   const composer = new MailComposer(options);
//   const message = await composer.compile().build();
//   return encodeMessage(message);
// }

// const sendFirstEmail = async (info) => {
//   const gmail = gmail();
//   const messageOptions = {
//     subject: 'Your emergency code is scanned!',
//     textEncoding: 'base64',
//   }
//   messageOptions.from = SENDER_EMAIL;
//   messageOptions.to = info.email;
//   messageOptions.text = info.message_content;
//   const rawMessage = await createMail(options);
//   const res = await gmail.users.messages.send({
//     userId: 'me',
//     requestBody: {
//       "raw": rawMessage,
//     },
//   });
//   console.log(res.data);
// };

// module.exports = { sendFirstEmail };
