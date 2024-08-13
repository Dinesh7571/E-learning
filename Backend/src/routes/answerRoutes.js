const express = require('express');
const {
  submitAnswers,
  getAnswersByExam,
  getAnswerById,
  updateAnswer,
  deleteAnswer
} = require('../controllers/answerController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to submit answers (protected route if needed)
router.post('/submit', authMiddleware.protect, submitAnswers);

// Route to get all answers for a specific exam
router.get('/exam/:examId', authMiddleware.protect, getAnswersByExam);

// Route to get a specific answer by ID
router.get('/:id', authMiddleware.protect, getAnswerById);

// Route to update an answer
router.put('/:id', authMiddleware.protect, updateAnswer);

// Route to delete an answer
router.delete('/:id', authMiddleware.protect, deleteAnswer);

module.exports = router;
