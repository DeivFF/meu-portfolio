/** ==========Efeito digitação======== */

const nome = document.querySelector(".nome")

function typeWrite(elemento){
    const nomeArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    nomeArray.forEach((nome, index)=> {
        setTimeout(function(){
            elemento.innerHTML += nome;
        }, 80 * index)
    })
}
typeWrite(nome)


/**NODEMAILER */

const nodemailer = require("nodemailer")

const SMTP_CONFIG = require('./config/smtp')

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    }
})

async function run(){
    const mailSent = await transporter.sendMail({
       text: 'Texto do e-email',
       subject: 'Assunto do e-mail',
    })
}

run();
