var express = require('express');
var router = express.Router();
var path = require('path');
var database = require('../config/database');

/* GET users listing. */
router.get('/:no', function(req, res, next) {
	var id = req.params.no;
	database.query("SELECT * FROM bdot_user", function (err,result) {
		if (err) res.status(500);
		console.log(result);
		res.send(result);
	})
});

module.exports = router;
