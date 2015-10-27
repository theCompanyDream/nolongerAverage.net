var express = require('express');
var router = express.Router();

router.get('/error:id', function(req, res) {
	res.render('error', {id: id});
});
