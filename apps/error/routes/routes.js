var express = require('express');
var router = express.Router();

router.param('id', function (req, res, next, id) {
  next();
})

router.get('/error:id', function(req, res, next, id) {
	res.render('error', {id: id});
});

module.exports = router;
