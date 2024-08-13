//https://web.postman.co/workspace/60002b99-dd8e-4f23-80fd-baa9c51bc307
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB=require('./src/config/db')


connectDB()

const app = express();



//import routes
const authRoutes=require('./src/routes/authRoutes')
const courseRoutes=require('./src/routes/courseRoutes')
const examRoutes=require('./src/routes/examRoutes')
const studentRoutes=require('./src/routes/studentRoutes')
const answerRoutes=require('./src/routes/answerRoutes')


// middlwares

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//adding routes
app.get('/', (req, res) => {
    res.send('API is running');
  });

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/courses', courseRoutes); // Course routes
app.use('/api/students', studentRoutes); // Student routes
app.use('/api/exams', examRoutes); // Exam routes
app.use('/api/answers', answerRoutes); // Answer routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
  });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));