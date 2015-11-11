var express = require('express');
var safeMessage = require('./safeMessage');
var logger = require('winston');

module.exports = buildErrorHandler;
// development error handler
// will print stacktrace

function buildErrorHandler(env){
  var app = express();

  if (env === 'development') {
    app.use(processError);
  }
  else {
    app.use(logError);
    app.use(productionError);
  }

  app.use(notFound);

  return app;
}


// catch 404 and forward to error handle
function notFound(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404).render('error', {error: err});
}

// production error handler
// no stacktraces leaked to user
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
