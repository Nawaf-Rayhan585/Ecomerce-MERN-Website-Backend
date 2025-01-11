// const nodemailer = require('nodemailer');

// const EmailSend = async (EmailTo,EmailText,EmailSubject) => {
//     let transport = nodemailer.createTransport({
//         host: "mail.teamrabbil.com",
//         port: 25,
//         secure: false,
//         auth: {user: "nawafnanjiba@gmail.com", pass: '~sR4[bhaC[Qs'},
//         tls:{rejectUnauthorized:false}
//     })


//     let mailOption = {
//         from:'MERN ECOMMERCE SOLUTION <info@teamrabbil.com>',
//         to:EmailTo,
//         subject: EmailSubject,
//         text: EmailText
//     }   
//     return await transport.sendMail(mailOption)
// }

// module.exports = EmailSend;


//----------------------------

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "nawafnanjiba@gmail.com",
    pass: "fdukwzjnebbevjxw",
  },
});

const EmailSend = async (to, sub, code) => {
  transporter.sendMail({
    to,
    subject: sub,
    text: code,
  });
};
 
module.exports = EmailSend;
