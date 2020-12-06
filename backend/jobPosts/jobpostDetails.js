var env = "development";
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require('../app.js');
var nodemailer = require('nodemailer');
const { htmlPrefilter } = require("jquery");
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongoUtil = require('../db.js').getDb();

module.exports.addJobPost = (req, res) => {
    const jobPost = req.body;

}

module.exports.updateJobPost = (req, res) => {
    const jobPost = req.body;

}

module.exports.deleteJobPost = (req, res) => {
    const jobPost = req.body;

}

module.exports.getAllJobPosts = (req, res) => {
    const jobPost = req.body;

}

module.exports.getJobPosts = (req, res) => {
    const jobPost = req.body;

}

module.exports.getRecomendedJobPost = (req, res) => {
    const jobPost = req.body;

}

