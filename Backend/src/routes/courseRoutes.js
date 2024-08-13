const express = require('express');
const {
  addCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to add a new course (admin only)
router.post('/add', authMiddleware.protect, authMiddleware.isAdmin, addCourse);

// Route to get all courses (accessible by all users)
router.get('/', getCourses);

// Route to get a course by ID (accessible by all users)
router.get('/:id', getCourseById);

// Route to update a course (admin only)
router.put('/:id', authMiddleware.protect, authMiddleware.isAdmin, updateCourse);

// Route to delete a course (admin only)
router.delete('/:id', authMiddleware.protect, authMiddleware.isAdmin, deleteCourse);

module.exports = router;
