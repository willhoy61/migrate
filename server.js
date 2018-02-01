const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const flash = require("connect-flash");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("session");
const session = require("express-session");

const configDB = require("./client/src/components/config/database.js");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));


app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});