const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vishalagajera@gmail.com',
        pass: 'aiwzyftarolruzpp'
    }
});

const sendMail = async (from, subject, html) => {
    try {
        const MailOption = {
            from,
            to: "vimalbhesaniya007@gmail.com",
            subject,
            html
        };
        const info = await transporter.sendMail(MailOption);
        console.log('Email sent: ' + info.response);
        return { success: true, message: 'Email sent successfully' };
    } catch(error) {
        console.error(error);
        return { success: false, message: 'Error sending email' };
    }
}

module.exports={sendMail}