const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const validateEnrollment = require("./validations/enrollmentValidation"); // correct import
const Enrollment = require("./models/Enrollment");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/expertb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.post("/api/enroll", validateEnrollment, async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();

    res.status(201).json({
      success: true,
      message: "Enrollment successful",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

app.get("/api/enrollments", async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ date: -1 });
    res.json({ success: true, data: enrollments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
