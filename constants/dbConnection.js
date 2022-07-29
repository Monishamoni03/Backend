const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/Digital-Library',
    err => {
        if(err) throw err;
        console.log('Connected to MongoDB');
    });
};

module.exports = dbConnection;