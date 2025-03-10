const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Function to hash a password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Function to compare a plain password with a hashed password
const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

const generateToken = (user) => {
  const payload = { userId: user._id };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};


// Function to verify a token
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(new Error('Token is not valid'));  // If token verification fails
      } else {
        resolve(decoded);  // If token is valid, resolve with decoded data
      }
    });
  });
};


module.exports = { verifyToken, hashPassword , comparePassword, generateToken };
