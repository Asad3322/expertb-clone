const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: String,
  fatherName: String,
  birthDate: String,
  gender: String,
  division: String,
  district: String,
  address: String, // ✅ KEEP address
  batch: String,   // ✅ NEW batch field
  phone1: String,
  phone2: String,
  email: String,
  courseDuration: String,
  occupation: String,
  status: String,
  courseName: String,
  admissionFee: Number,
  courseFee: Number,
  certificateCharges: Number,
  installment: Number,
  discount: Number,
  total: Number,
  profilePic: String
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
