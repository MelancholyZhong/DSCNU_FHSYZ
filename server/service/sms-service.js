const SMS_ID = process.env.SMS_ID;
const SMS_TOKEN = process.env.SMS_TOKEN;
const SMS_SENDER = process.env.SMS_SENDER;

const client = require("twilio")(SMS_ID, SMS_TOKEN);

const sendFirstSMS = (info) => {
  console.log("trying to send SMS");
  client.messages
    .create({ body: info.message_content, from: SMS_SENDER, to: info.phone })
    .then((message) => console.log(message.sid));
};

module.exports = { sendFirstSMS };
