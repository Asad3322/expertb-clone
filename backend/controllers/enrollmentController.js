const Enrollment = require("../models/Enrollment");

exports.createEnrollment = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    if (!name || !email || !phone || !course) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    const enrollment = new Enrollment({ name, email, phone, course, message });
    await enrollment.save();

    res.status(201).json({ message: "Enrollment successful", enrollment });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
