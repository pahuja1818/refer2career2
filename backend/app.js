const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const AuthRoutes = require('./authentication/authRoute');





app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.text({ limit: '200mb' }));
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));
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
app.use('/api', AuthRoutes);
const router = express.Router();
module.exports = router ;

module.exports = app;
