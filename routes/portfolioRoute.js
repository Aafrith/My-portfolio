const express = require("express");
const router = express.Router();
const { Intro, About, Project, Experience, Certification, Contact } = require("../models/portfolioModel"); // Ensure the correct path

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const certifications = await Certification.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0], // This was misspelled before
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            certifications: certifications
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
