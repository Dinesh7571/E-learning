const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory for uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique name for the file
  }
});

// File filtering to accept only specific file types
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /pdf|doc|docx|ppt|pptx|mp4|avi|mov/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Files of type PDF, DOC, DOCX, PPT, MP4, AVI, MOV only!');
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 }, // 100MB limit
  fileFilter: fileFilter,
}).array('materials', 10); // Allow uploading up to 10 files

module.exports = upload;
