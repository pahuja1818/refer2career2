var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { registerUser, verifyOTP, login } = require('./authController.js');

router.post("/register/candidate", registerUser);
router.post("/verify/candidate", verifyOTP);
router.post("/login", login);

module.exports = router;