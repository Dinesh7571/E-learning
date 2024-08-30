const Student = require('../models/Student');
const User = require('../models/User');
const Answer = require('../models/Answer');
const Exam = require('../models/Exam');
const Course = require('../models/Course');



// Enroll student in a course
exports.enrollCourse = async (req, res) => {
  try {
    const { studentId} = req.body;
    const  courseId =req.params.id

    const student = await Student.findOne({ user: studentId });
    if (student) {
      await student.enrollCourse(courseId);
      res.json({ message: 'Course enrolled', student });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to enroll course', details: error });
  }
};

// Remove student from a course
exports.removeCourse = async (req, res) => {
  try {
    const { studentId } = req.body;
    const  courseId =req.params.id

    const student = await Student.findOne({ user: studentId });
    if (student) {
      await student.removeCourse(courseId);
      res.json({ message: 'Course removed', student });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove course', details: error });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('user');
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students', details: error });
  }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({ user: req.params.id }).populate('user');
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student', details: error });
  }
};

// Update student details
exports.updateStudent = async (req, res) => {
  try {
    const { name, email, enrolledCourses } = req.body;

    // Update user details
    const user = await User.findOneAndUpdate(
      { _id: req.params.id, role: 'student' },
      { name, email },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Update student details
    const student = await Student.findOneAndUpdate(
      { user: req.params.id },
      { enrolledCourses },
      { new: true }
    ).populate('user');

    res.json({ user, student });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student', details: error });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    // Delete user
    const user = await User.findOneAndDelete({ _id: req.params.id, role: 'student' });

    if (!user) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Delete student details
    await Student.findOneAndDelete({ user: req.params.id });

    res.json({ message: 'Student removed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student', details: error });
  }
};
