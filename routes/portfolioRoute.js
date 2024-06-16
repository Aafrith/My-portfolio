const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { Intro, About, Project, Experience, Certification, Contact } = require("../models/portfolioModel");

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find(); 
        const experiences = await Experience.find();
        const certifications = await Certification.find();

        console.log("Contacts:", contacts);

        res.status(200).json({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            certifications: certifications
        });

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.post('/send-email', async (req, res) => {
  const { senderEmail, message } = req.body;

  if (!senderEmail || !message) {
    return res.status(400).json({ error: "Please provide both email and message" });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: senderEmail,
    to: process.env.RECEIVER_EMAIL,
    subject: 'New Contact Form Message',
    text: `From: ${senderEmail}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending email" });
  }
});

module.exports = router;
