const express = require('express');
const ejs = require('ejs');
const nodeMailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

function mailer(props) {
    let template = fs.readFileSync(path.join(__dirname, '../public/Templates/mailExport.ejs'), ('utf-8'));
    let render = ejs.render(template, props);

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'endavaproject@gmail.com',
            pass: 'endavajuan'
        }
    });

    const mailOptions = {
        from: '"Chicas en Tecnología" <GrandesMujeres@cet.org>', // sender address (what the receiver sees)
        to: props.emailCandidata, // list of receivers
        subject: props.subject, // Subject line
        html: render
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

module.exports = mailer;