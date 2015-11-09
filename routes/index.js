var express = require('express');
var router = express.Router();

function getIndex(req, res) {
  res.render('index');
  next();
}

/* GET home page. the only page*/
router.all('/',     getIndex);
router.all('/aboutme/*', getIndex);
router.all('/about/*');

module.exports = router;
