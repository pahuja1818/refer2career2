var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { referJobPost, getReferedJobPosts } = require('./referPostDetails');

router.post("/referJobPost", referJobPost);
router.post("/getReferedJobPosts", getReferedJobPosts);

module.exports = router;