const nodemailer = require("nodemailer");
const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = await nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    // secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "evangeline.hamill@ethereal.email",
      pass: "teX4GcPDuJufgJV5mQ",
    },
  });

  let info = await transporter.sendMail({
    from: '"Kamran Latif" <kami@gmail.com>', // sender address
    to: "kamranlatif98@gmail.com", // list of receivers
    subject: "Node Email", // Subject line
    text: "I am learning Node Js.", // plain text body
    html: "<b>I am learning Node Js.</b>", // html body
  });
  res.json(info);
};
//we need smtp server. Ethereal is a fake smtp server
module.exports = sendMail;
