const { configDotenv } = require("dotenv");
const nodemailer = require("nodemailer");
configDotenv();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  console.log("start");
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"OE" <demo@objectexpression.com>', // sender address
    to: "aamirudinkom@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);