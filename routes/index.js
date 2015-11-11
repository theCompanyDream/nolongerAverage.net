var express = require('express');
var router = express.Router();

function getIndex(req, res) {
  res.render('index');
  next();
}

/* GET home page. the only page*/
router.all('/',     getIndex);
router.all('/aboutme', getIndex);
router.all('/about', getIndex);
router.all('/aboutme/:Id', getIndex);
router.all('/about/:Id', getIndex);
router.all('/resume/:Id', getIndex);
router.all('/resume', getIndex);
module.exports = router;
