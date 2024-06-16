const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config();

router.post('/send-email', async (req, res) => {
    const { senderEmail, message } = req.body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: senderEmail,
        to: process.env.RECEIVER_EMAIL,
        subject: 'New Contact Form Submission',
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

module.exports = router;
