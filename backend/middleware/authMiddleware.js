// middleware/authMiddleware.js
const { verifyToken } = require('../utils/auth');

// Middleware to protect routes requiring authentication
const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Get the token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });  // If no token is found, return an error
  }

  try {
    // Verify the token
    const decoded = await verifyToken(token);
    req.user = decoded;  // Store the decoded data (e.g., userId) in the request object
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });  // If token is invalid or expired
  }
};

module.exports =  authenticate
