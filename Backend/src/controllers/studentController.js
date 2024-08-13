const Student = require('../models/Student');

// Add a new student
exports.addStudent = async (req, res) => {
  try {
    const { name, email, course } = req.body;

    const student = new Student({ name, email, course });
    await student.save();

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add student' });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
};

// Update student details
exports.updateStudent = async (req, res) => {
  try {
    const { name, email, course } = req.body;

    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    student.name = name || student.name;
    student.email = email || student.email;
    student.course = course || student.course;

    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    await student.remove();
    res.json({ message: 'Student removed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};
