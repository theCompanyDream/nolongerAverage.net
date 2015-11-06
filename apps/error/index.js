var router = require('./routes/routes');
var apiRouter = reuire('./routes/routesApi');
var express = require('express');


var app = express();

app.use(router);
app.use(apiRouter);

module.exports = app;
