const Joi = require("joi");

const enrollmentSchema = Joi.object({
  studentName: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Student name is required",
    "string.min": "Student name must be at least 3 characters",
    "string.max": "Student name must be less than 50 characters",
  }),
  courseName: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Course name is required",
    "string.min": "Course name must be at least 2 characters",
    "string.max": "Course name must be less than 50 characters",
  }),
  enrollmentDate: Joi.date().required().messages({
    "date.base": "Enrollment date must be a valid date",
    "any.required": "Enrollment date is required",
  }),
  batch: Joi.string().min(1).max(20).required().messages({
    "string.empty": "Batch is required",
  }),
  feePaid: Joi.number().min(0).required().messages({
    "number.base": "Fee paid must be a number",
    "any.required": "Fee paid is required",
  }),
});

const validateEnrollment = (req, res, next) => {
  const { error } = enrollmentSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

module.exports = validateEnrollment;
