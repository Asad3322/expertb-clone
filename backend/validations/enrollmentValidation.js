const Joi = require("joi");

const enrollmentSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  fatherName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  contact: Joi.string().pattern(/^\d{11}$/).required(),
  address: Joi.string().min(5).max(200).required(),
  course: Joi.string().required(),
  reference: Joi.string().allow("").max(100),
});

module.exports = (req, res, next) => {
  const { error } = enrollmentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
