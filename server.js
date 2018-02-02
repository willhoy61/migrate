const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const flash = require("connect-flash");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const axios = require("axios");
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

const configDB = require("./client/src/components/config");

app.use(morgan('dev')); //log every requesty to console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get info from html forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// required for passport
app.use(session({ secret: '10a28c80c754a4c6dc96b0bce31d31d5' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

const User = require('./client/src/components');


require('./client/src/models/routes.js')(app, passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});