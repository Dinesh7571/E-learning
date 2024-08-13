const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [
        {
          text: { type: String, required: true },
          isCorrect: { type: Boolean, required: true }
        }
      ]
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Exam', examSchema);
