var error = require('../routes/error');
var express = require('express');
var request = require('supertest');
var correctMessages = require('../routes/error/safeMessage');
//TODO Test Responses
describe('#Correct_Error_Message', function (){
  var app = express();
  var routes = express.Router();

  routes.get('/exception', function(req, res, next) {
    var error = new Error();
    error.status = 500;
    next(error);
  });

  routes.get('/authorize', function(req, res, next) {
    var error = new Error();
    error.status = 401;
    next(error);
  });

  app.use(routes);
  //app.use(error('production'));

  it("#Throws_Error_Message", function () {
    return request(app).get('/exception')
        .expect(500);
  });

  it("#Throws_Not_Authorized", function () {
    return request(app).get('/doesNotExist')
        .expect(404);
  });

  it("#Throws_NotFound", function () {
    return request(app).get('/authorize')
        .expect(401);
  });

});
