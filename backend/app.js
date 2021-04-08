const express = require('express');
var mongoUtil = require('./db');
var nodemailer = require('nodemailer');
const ResumeParser = require('resume-parser');

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

mongoUtil.connectToServer(function (err, client) {
    if (err) console.log(err);
    console.log('stargjsgdj');
    // start the rest of your app here
    const AuthRoutes = require('./authentication/authRoute');
    const OrganizationRoutes = require('./addOrganizations/addOrganizationsRoute');
    const JobPostRoutes = require('./jobPosts/jobpostRoute');
    const ReferJobPostRoutes = require('./referPost/referPostRoute');
    app.use('/api', AuthRoutes);
    app.use('/api', OrganizationRoutes);
    app.use('/api', JobPostRoutes);
    app.use('/api', ReferJobPostRoutes);
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
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static("docs"));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new LinkedInStrategy({
    clientID: '78pijkn0197pgp',
    clientSecret: 'XL9shz8q217eF2BI',
    callbackURL: "http://localhost:8084/callback/",
    scope: ['r_emailaddress', 'r_liteprofile'],
}, function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
    });
}));

app.get('/linkedin',
    passport.authenticate('linkedin'));
// callback method which linkedin will hit after successfull login of user
app.get('/callback/',
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function (req, res) {
        console.log('asasdasd');
        res.redirect('http://localhost:4200');
    });


    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) { return next(); }
        res.redirect('/login')
        }
        // Method to logout
        app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
        });
// method to load index.ejs file on base path

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
