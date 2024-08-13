const express = require('express');
const {
  register,
  login,
  getCurrentUser
} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware to protect routes

const router = express.Router();

// Route to register a new user
router.post('/register', register);

// Route to login a user
router.post('/login', login);

// Route to get current user's info (protected route)
router.get('/me', authMiddleware.protect, getCurrentUser);

module.exports = router;
