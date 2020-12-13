const express = require('express');
var mongoUtil = require('./db');
var nodemailer = require('nodemailer');


mongoUtil.connectToServer(function (err, client) {
    if (err) console.log(err);
    console.log('stargjsgdj');
    // start the rest of your app here
    const AuthRoutes = require('./authentication/authRoute');
    const OrganizationRoutes = require('./addOrganizations/addOrganizationsRoute');
    const JobPostRoutes = require('./jobPosts/jobpostRoute');
    app.use('/api', AuthRoutes);
    app.use('/api', OrganizationRoutes);
    app.use('/api', JobPostRoutes);
    
});


const bodyparser = require('body-parser');
const app = express();


const fileUpload = require("express-fileupload");
const cors = require("cors");
const { start } = require('repl');

app.use(bodyparser.text({ limit: '200mb' }));
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static("docs"));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
const router = express.Router();
module.exports = router;

module.exports = app;
