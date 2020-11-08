var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();
module.exports = router;

const { registerUser } = require('./authController.js');
router.post("/register/user", registerUser);
