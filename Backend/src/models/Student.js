const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  answers: [
    {
      examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
      answers: [
        {
          questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
          answerText: { type: String }
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

StudentSchema.methods.enrollCourse = function(courseId) {
  if (!this.enrolledCourses.includes(courseId)) {
    this.enrolledCourses.push(courseId);
  }
  return this.save();
};

StudentSchema.methods.removeCourse = function(courseId) {
  this.enrolledCourses = this.enrolledCourses.filter(id => !id.equals(courseId));
  return this.save();
};

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
