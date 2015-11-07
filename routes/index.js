var express = require('express');
var router = express.Router();

function getIndex(req, res, next) {
  res.render('index');
  next();
}

function getIndexId(req, res, next, id)
{
    res.render('index');
    next();
}

function param(req, res, next, id) {
  next();
}

/* GET home page. the only page*/
router.param('id', param);
router.all('/',     getIndex);
router.all('/about/:Id', getIndexId);

module.exports = router;
