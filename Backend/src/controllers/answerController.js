const Answer = require('../models/Answer');
const Exam = require('../models/Exam');

// Submit answers for an exam
exports.submitAnswers = async (req, res) => {
  try {
    const { studentId, examId, answers } = req.body;

    // Validate input
    if (!studentId || !examId || !answers) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if the exam exists
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    // Create a new answer document
    const answer = new Answer({ studentId, examId, answers });
    await answer.save();

    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit answers' });
  }
};

// Get all answers for a specific exam
exports.getAnswersByExam = async (req, res) => {
  try {
    const { examId } = req.params;

    const answers = await Answer.find({ examId });
    res.json(answers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch answers' });
  }
};

// Get a specific answer by ID
exports.getAnswerById = async (req, res) => {
  try {
    const { id } = req.params;

    const answer = await Answer.findById(id);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }
    res.json(answer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch answer' });
  }
};

// Update answers
exports.updateAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const { answers } = req.body;

    const answer = await Answer.findById(id);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    answer.answers = answers || answer.answers;
    await answer.save();

    res.json(answer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update answer' });
  }
};

// Delete an answer
exports.deleteAnswer = async (req, res) => {
  try {
    const { id } = req.params;

    const answer = await Answer.findById(id);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    await answer.remove();
    res.json({ message: 'Answer removed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete answer' });
  }
};
