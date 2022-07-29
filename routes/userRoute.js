const express = require('express');
const User = require('../models/User');
const { register, login, update } = require('../controllers/user-controller');

const userRoute = express.Router();

//register
userRoute.post('/register',register);

//login
userRoute.post('/login', login);

//update user
userRoute.put('/update', update);

//delete user
userRoute.delete('/:id', (req, res) => {
    res.send('Delete Route');
});

//fetch user
userRoute.get('/', (req, res) => {
    res.send('Fetch Users');
});

module.exports = userRoute;