var env = "development";
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require('../app.js');
var nodemailer = require('nodemailer');
const { htmlPrefilter } = require("jquery");
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongoUtil = require('../db.js').getDb();

var ObjectId = require('mongodb').ObjectId;

module.exports.referJobPost = (req, res) => {
    const jobPost = req.body;
    mongoUtil.collection("referedProfiles").insertOne(jobPost, function (err, result) {
        if (err) res.status(200).json({ 'data': false });
        else res.status(201).json({ 'data': true });
    });
}

module.exports.getReferedJobPosts = (req, res) => {
    const data = req.body;
    mongoUtil.collection("referedProfiles").findOne({ '_id': new ObjectId(req.body.id) }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}



