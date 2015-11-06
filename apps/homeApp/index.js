var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var node_modules = require("express-node_modules");
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));

app.use('/content', express.static(path.join(__dirname, 'js')));
app.use('/content', express.static(path.join(__dirname, 'images')));
app.use(node_modules('/lib', routes));
app.use('/', routes);

module.exports = app;
