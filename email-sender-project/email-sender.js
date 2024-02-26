const nodemailer = require ('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'your email',
        password: 'your password',
    }
});
const mailOptions = {
    from: 'your email',
    to: 'recipient email',
    subject: 'Test Email',
    text: 'this is a test email from Node.js using nodemailer'
}
transporter.sendMail(mailOptions, (error,info) =>{
    if (error) {
        console.error('error occured:', error);
    } else {
        console.log('email sent', info.reponse);
    }
})