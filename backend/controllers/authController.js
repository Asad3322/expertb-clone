const Admin = require('../models/adminModel');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validations/authValidation');

// ✅ Admin Registration (Only first admin allowed)
exports.register = async (req, res) => {
  try {
    // Check if any admin already exists
    const existingAdmin = await Admin.findOne();
    if (existingAdmin) {
      return res.status(403).json({ message: 'Signup disabled. Admin already exists.' });
    }

    // Validate input
    const { error } = registerValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Check if email already exists
    const emailExist = await Admin.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedViewPassword = await bcrypt.hash(req.body.viewPassword, salt); // New

    // Create new admin
    const admin = new Admin({
      email: req.body.email,
      password: hashedPassword,
      viewPassword: hashedViewPassword, // New
    });

    await admin.save();
    res.status(201).json({ message: 'Admin registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// ✅ Admin Login
exports.login = async (req, res) => {
  const { error } = loginValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(400).json({ message: 'Email not found' });

  const validPass = await bcrypt.compare(req.body.password, admin.password);
  if (!validPass) return res.status(400).json({ message: 'Invalid password' });

  res.status(200).json({ message: 'Login successful' });
};

// ✅ View Password Verification (new endpoint)
exports.verifyViewPassword = async (req, res) => {
  try {
    const { email, viewPassword } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(viewPassword, admin.viewPassword);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect view password' });

    res.status(200).json({ message: 'Access granted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
