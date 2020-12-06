var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { addJobPost, updateJobPost, deleteJobPost, getAllJobPosts, getJobPosts } = require('./jobpostDetails');

router.post("/add/jobpost", addJobPost);
router.post("/update/jobpost", updateJobPost);
router.post("/getAll/jobposts", getAllJobPosts);
router.post("/get/jobpost", getJobPosts);

module.exports = router;