const nodemailer = require('nodemailer');
// const Email = require('../models/email.model');

const sendEmail = (req, res) => {
    body = req.body;
    let message = `
        nombre: ${body.name}\n
        correo: ${body.email}\n
        ${body.message}
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ojuelitass@gmail.com',
          pass: '2guitarras'
        }
    });

    let mailOptions = {
        from: body.email,
        to: 'sssistemas@universidadmexico.edu.mx',
        subject: body.name,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json(error);
        } else {
            res.json({
                info: info.response,
                message: 'Mensaje enviado'
            })
        }
    });
}

module.exports = {sendEmail}