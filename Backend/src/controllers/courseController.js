const Course = require('../models/Course');
const upload = require('../middlewares/uploadMiddleware');

// Add a new course with file uploads
exports.addCourse = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const { title, description } = req.body;

    // Create an array of file information
    const materials = req.files.map(file => ({
      filename: file.originalname,
      filepath: file.path,
    }));

    try {
      const course = new Course({ title, description, materials });
      await course.save();
      res.status(201).json({ message: 'Course added succesfully' ,course});
    } catch (error) {
       res.status(500).json({ error: 'Failed to add course' });
      // res.send(error.message)
    }
  });
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

// Get a course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
};

// Update a course
exports.updateCourse = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const { title, description } = req.body;

    // Create an array of file information
    const materials = req.files ? req.files.map(file => ({
      filename: file.originalname,
      filepath: file.path,
    })) : undefined;

    try {
      let course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }

      course.title = title || course.title;
      course.description = description || course.description;
      course.materials = materials ? [...course.materials, ...materials] : course.materials;
      course.updatedAt = Date.now();

      await course.save();
      res.json({ message: 'Course updated' ,course});
    } catch (error) {
      res.status(500).json({ error: 'Failed to update course' });
    }
  });
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Optionally, you can remove files from the filesystem here if needed
    await course.deleteOne();
    res.json({ message: 'Course removed' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to delete course' });
  }
};
