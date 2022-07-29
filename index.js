const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
const error = require('./middleware/errorMiddleware');
const userRoute = require('./routes/userRoute');
dotenv.config();
require('./constants/dbConnection')();

const app = express();


//passing data
app.use(express.json());

app.use(cors('http://localhost:3500'));
// app.use(cors('env'));
//routes
app.use('/api/users', userRoute);

console.log(process.env);

//middleware error
app.use(error.errorMiddleware);

//server
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});