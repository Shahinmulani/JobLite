require('dotenv').config()
const nodemailer = require('nodemailer')

module.exports.sendMail = async (mailOptions) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.GMAIL}`,
                pass: process.env.GMAIL_PASS
            }
        })
        await transporter.sendMail(mailOptions)
    }
    catch (err) {
        console.log(err) 
    }
}