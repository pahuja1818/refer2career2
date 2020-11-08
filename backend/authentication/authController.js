var env = "development";
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require('../app.js');
var MongoClient = require('mongodb').MongoClient;

module.exports.registerUser = (req, res) => {
    console.log('yes');
    const user = req.body.user;
    var uri = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
    MongoClient.connect(uri, function (err, client) {
        console.log("pahiuswd");
        client.db("insta-jobs").collection("users").insertOne(user, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
          });
        // perform actions on the collection object
    });
    //usersCollection
}