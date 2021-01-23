var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { registerUser, verifyOTP, login, updateAdminDetails, getDetails, update, find, insertOTP, verify } = require('./authController.js');

router.post("/register/candidate", registerUser);
router.post("/verify/candidate", verifyOTP);
router.post("/login", login);
router.post("/updateAdminDetails", updateAdminDetails);
router.post("/getDetails", getDetails);
router.post("/update", update);
router.post("/find", find);
router.post("/otpRequest", insertOTP);
router.post("/verifyOTP", verify);

module.exports = router;