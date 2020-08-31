const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const sendEmail = async opts => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY
    })
  );

  const mailOptions = {
    from: opts.from,
    to: opts.to,
    subject: opts.subject,
    text: opts.text
  };

  transport.sendMail(mailOptions);
};

module.exports = sendEmail;
