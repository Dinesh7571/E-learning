const express = require('express');
const {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to add a new student (admin only)
router.post('/add', authMiddleware.protect, authMiddleware.isAdmin, addStudent);

// Route to get all students (admin only or with specific permissions)
router.get('/', authMiddleware.protect, authMiddleware.isAdmin, getStudents);

// Route to get a student by ID (admin only or with specific permissions)
router.get('/:id', authMiddleware.protect, authMiddleware.isAdmin, getStudentById);

// Route to update student details (admin only)
router.put('/:id', authMiddleware.protect, authMiddleware.isAdmin, updateStudent);

// Route to delete a student (admin only)
router.delete('/:id', authMiddleware.protect, authMiddleware.isAdmin, deleteStudent);

module.exports = router;
