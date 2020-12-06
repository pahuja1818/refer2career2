var env = "development";
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require('../app.js');
var nodemailer = require('nodemailer');
const { htmlPrefilter } = require("jquery");
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongoUtil = require('../db.js').getDb();


module.exports.registerOrganization = (req, res) => {
    const organization = req.body;
    mongoUtil.collection("users").findOne({ 'email': organization.email }, function (err, result) {
        if (err) throw err;
        if (result !== null && result.verified === true) {
            return res.status(200).json({ 'error': 'Email already registered' });
        }
        else {
            mongoUtil.collection("users").insertOne(organization, function (err, result) {
                if (err) res.status(200).json({ 'data': false });
                else {
                    res.status(201).json({ 'data': true });
                    var smtpTransport = nodemailer.createTransport({
                        service: 'gmail',//smtp.gmail.com  //in place of service use host...
                        secure: false,//true
                        port: 25,//465
                        auth: {
                            user: 'tusharpahuja824@gmail.com',
                            pass: '1357902468@Aa'
                        }, tls: {
                            rejectUnauthorized: false
                        }
                    });

                    var mailOptions = {
                        from: 'tusharpahuja824@gmail.com',
                        to: organization.email,
                        subject: 'Login Credentials of Insta jobs',
                        html: '<p>Hello' + organization.organizationalDetails.organizationName + '</p><p><b>Welcome</b>, below find your login credentials for <a class="text-primary" href="instajob.ml">Insta jobs</a><br><br>' + '<p>Email : ' + organization.email + '<br>Password : ' + organization.password + '<p>><br><br><br><br><br>Thanks and regards! <br>Inta jobs support'
                    };

                    smtpTransport.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                            res.status(200).json({ 'data': true });
                        }
                    });
                }
            });
        }
    });
}

module.exports.updateOrganization = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").updateOne({ 'email': data.email }, { $set: { personalDetails: data.personalDetails, organizationalDetails: data.organizationalDetails, email: data.email } }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': true });
    });
}

module.exports.getAllOrganizations = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").find({ 'role': 1 }).toArray(function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}

module.exports.getOrganization = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").findOne({ 'email': data.email }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}