const express = require('express');
const bodyParser = require('body-parser');
const emailRoute = require('./routes/email');

const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig"); // Ensure this path is correct
const portfolioRoute = require("./routes/portfolioRoute"); // Ensure this path is correct

app.use(express.json());
app.use("/api/portfolio", portfolioRoute);
app.use(bodyParser.json());
app.use('/api/portfolio', emailRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
