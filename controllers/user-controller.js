const User = require('../models/User');
const jwtToken = require('../utils/jwtToken');

//register
const register =  async (req, res) => {    //handling as promise
    const { firstName, lastName, email, password } = req.body;
    const userExist = await User.findOne({ email: email});
    if(userExist) {
        res.send('Existing User');
        // throw new Error('Existing user');
    } 
    const userCreated = await User.create({ firstName, lastName, email, password });
    res.json({
        __id: userCreated.__id,
        firstName: userCreated.firstName,
        lastName: userCreated.lastName,
        email: userCreated.email,
        password: userCreated.password,
        token: jwtToken(userCreated._id),
    });
}

//login
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if(user && (await user.isPasswordMatch(password))) {
        res.status(200);
        res.json({
         _id: user._id,
         name: user.name,
         password: user.password,
         email: user.email,
         token: jwtToken(user._id),
        });
    } else {
        res.status(401);
        // throw new Error('Invalid login credentials');
        res.send('Invalid login credentials');
    }
}

//update
const update = async (req,res) => {
    const user = await User.findById( req.user.id);
    if(user) {
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        if(req.body.password) {
            user.password = req.body.password || user.password;
        }
    }
    const updateUser = await user.save();
    res.json({
        __id: updateUser.__id,
        firstName: updateUser.firstName,
        lastName: userCreated.lastName,
        email: userCreated.email,
        password: userCreated.password,
        token: jwtToken(userCreated._id),
       });
}

module.exports = {
    register : register,
    login : login,
    update: update
}