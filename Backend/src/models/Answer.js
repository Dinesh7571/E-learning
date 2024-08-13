const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      answerText: { type: String, required: true }
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Answer', answerSchema);
