var express = require('express');
var router = express.Router();

/* GET home page. the only page*/
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
