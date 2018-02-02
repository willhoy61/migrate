const express = require('express');
const passport = require('passport');
const User = require('./database');
const router = express.Router();

router.post("/Signup", function(req, res) {
	User.register(new User(
		username: req.body.username
	},
	req.body.password,
	function(err, account) {
		if(err){
			res.json(false);
		}
		
		passport.authenticate('local')(req, res, function() {
			res.json(true);
		})
	}))
});
// login
router.post("/Signup", passport.authenticate('local'), function(req, res) {
	res.json(true)
});

router.get('/Signin' function(req, res) {
	req.logout();
	res.json(true)
})


module.exports = router;