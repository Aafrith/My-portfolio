const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Remove useCreateindex option as it's no longer supported
});

const connection = mongoose.connection;

connection.on('error', (err) => {
    console.error('Error connecting to database:', err);
});

connection.once('open', () => {
    console.log('MongoDB connection successful');
});

module.exports = connection;
