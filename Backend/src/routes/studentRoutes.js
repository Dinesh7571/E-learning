const express = require('express');
const {
 
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  enrollCourse,
  removeCourse,
 
} = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


// Route to get all students (admin only or with specific permissions)
router.get('/', authMiddleware.protect, authMiddleware.isAdmin, getStudents);

// Route to get a student by ID (admin only or with specific permissions)
router.get('/:id', authMiddleware.protect, authMiddleware.isAdmin, getStudentById);

// Route to update student details (admin only)
router.put('/:id', authMiddleware.protect, authMiddleware.isAdmin, updateStudent);

// Route to delete a student (admin only)
router.delete('/:id', authMiddleware.protect, authMiddleware.isAdmin, deleteStudent);

// Route to enroll a student in a course 
router.put('/:id/enroll', authMiddleware.protect, enrollCourse);

// Route to remove a student from a course (admin only)
router.put('/:id/remove-course', authMiddleware.protect, authMiddleware.isAdmin, removeCourse);



module.exports = router;
