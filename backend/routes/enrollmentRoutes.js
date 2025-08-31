const express = require("express");
const Joi = require("joi");

const router = express.Router();

// Validation middleware
const validateEnrollment = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name should be at least 3 characters",
      "string.max": "Name should not exceed 100 characters",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "A valid email is required",
      "string.empty": "Email is required",
    }),
    course: Joi.string().required().messages({
      "string.empty": "Course is required",
    }),
    phone: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required()
      .messages({
        "string.pattern.base": "Phone must be 10-15 digits",
        "string.empty": "Phone number is required",
      }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      success: false,
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

// Route
router.post("/", validateEnrollment, (req, res) => {
  res.status(201).json({
    success: true,
    message: "Enrollment added successfully",
    data: req.body,
  });
});

module.exports = router;
