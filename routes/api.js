var express = require('express');
var router = express.Router();
var repository = require('../repositories/resumeRepo');

/* GET fun listing. */
router.get('/', function(req, res, next) {
  res.jsonp(repository);
});

module.exports = router;