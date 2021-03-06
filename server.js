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
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

const configDB = require("./client/src/components/config");

const authRoutes = require('./client/components/config/auth');

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
passport.user(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serialzeUser());
passport.deserializeUser(user.deserializeUser());


require('./client/src/models/routes.js')(app, passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/api/auth', authRoutes);

app.geet("/api/test", function(req, res) {
	return res.json("all good");
})

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });