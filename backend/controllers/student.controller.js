const Student = require('../models/student.model');
const fs = require('fs');
const path = require('path');

const normalizeCourse = (name) => {
  if (!name) return '';
  return name.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

// Add Student
exports.addStudent = async (req, res) => {
  try {
    const studentData = req.body;

    if (studentData.courseName) {
      studentData.courseName = normalizeCourse(studentData.courseName);
    }

    if (req.file) {
      studentData.profilePic = req.file.filename;
    }

    const student = new Student(studentData);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    console.error('Add Student Error:', err);
    res.status(500).json({ error: 'Failed to add student.' });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    if (req.file) {
      if (student.profilePic) {
        const oldImagePath = path.join(__dirname, '../uploads', student.profilePic);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      student.profilePic = req.file.filename;
    }

    const updatedCourse = req.body.courseName
      ? normalizeCourse(req.body.courseName)
      : student.courseName;

    student.studentName = req.body.studentName || student.studentName;
    student.phone1 = req.body.phone1 || student.phone1;
    student.phone2 = req.body.phone2 || student.phone2;
    student.address = req.body.address || student.address;
    student.batch = req.body.batch || student.batch; // ✅ NEW
    student.courseName = updatedCourse;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (err) {
    console.error('Update Student Error:', err);
    res.status(500).json({ error: 'Failed to update student.' });
  }
};

// Delete single student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    if (student.profilePic) {
      const imagePath = path.join(__dirname, '../uploads', student.profilePic);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete all students
exports.deleteAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    students.forEach(student => {
      if (student.profilePic) {
        const img = path.join(__dirname, '../uploads', student.profilePic);
        if (fs.existsSync(img)) fs.unlinkSync(img);
      }
    });
    await Student.deleteMany();
    res.json({ message: "All students deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
