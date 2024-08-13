const Exam = require('../models/Exam');

// Add a new exam
exports.addExam = async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    const exam = new Exam({ title, description, questions });
    await exam.save();

    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add exam' });
  }
};

// Get all exams
exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch exams' });
  }
};

// Get an exam by ID
exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch exam' });
  }
};

// Update an exam
exports.updateExam = async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    exam.title = title || exam.title;
    exam.description = description || exam.description;
    exam.questions = questions || exam.questions;

    await exam.save();
    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update exam' });
  }
};

// Delete an exam
exports.deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    await exam.remove();
    res.json({ message: 'Exam removed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete exam' });
  }
};
