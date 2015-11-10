var express = require('express');
var safeMessage = require('./safeMessage');
var logger = require('winston');

// catch 404 and forward to error handle
module.exports = buildErrorHandler;
// development error handler
// will print stacktrace

function buildErrorHandler(env){
  var app = express();
  app.use(notFound);
  if (env === 'development') {
    app.use(processError);
  }
  else {
    app.use(logError);
    app.use(productionError);
  }
  return app;
}


// production error handler
// no stacktraces leaked to user


function notFound(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('error', {error: err});
  next(err);
}

function processError(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: safeMessage(err.status),
    error: err
  });
}

function productionError(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: safeMessage(err.status),
    error: {}
  });
}

function logError(err, req, res, next) {
  winston.log('error', err);
  next(err);
}
