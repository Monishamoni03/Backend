const jwt = require('jsonwebtoken');

const jwtToken = userId => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '10d',
  });
};

module.exports = jwtToken;