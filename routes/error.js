var express = require('express');

var app = express();

// catch 404 and forward to error handler
app.use(notFound);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(processError);
}

// production error handler
// no stacktraces leaked to user
app.use(productionError);

function notFound(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render()
  next(err);
}

function processError(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
}

function productionError(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}

module.exports = app;
