const express = require('express');
const {
  addExam,
  getExams,
  getExamById,
  updateExam,
  deleteExam
} = require('../controllers/examController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to add a new exam (admin only)
router.post('/add', authMiddleware.protect, authMiddleware.isAdmin, addExam);

// Route to get all exams (admin only or public if needed)
router.get('/', authMiddleware.protect, authMiddleware.isAdmin, getExams);

// Route to get a specific exam by ID
router.get('/:id', authMiddleware.protect, getExamById);

// Route to update an exam (admin only)
router.put('/:id', authMiddleware.protect, authMiddleware.isAdmin, updateExam);

// Route to delete an exam (admin only)
router.delete('/:id', authMiddleware.protect, authMiddleware.isAdmin, deleteExam);

module.exports = router;
