const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {
  addStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  deleteAllStudents
} = require('../controllers/student.controller');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

router.post('/', upload.single('image'), addStudent);
router.put('/:id', upload.single('image'), updateStudent);
router.get('/', getAllStudents);
router.delete('/:id', deleteStudent);
router.delete('/', deleteAllStudents);

module.exports = router;
