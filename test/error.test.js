var error = require('../routes/error/index');
var express = require('express');
var request = require('supertest');
var correctMessages = require('../routes/error/safeMessage');
var sinon = require('sinon');
var path = require('path');
//TODO Test Responses
describe('#Correct_Error_Message', function (){
  var enviorment = ['Development', "Production"]
  var routes = express.Router();

  routes.get('/exception', function(req, res, next) {
    var error = new Error();
    error.status = 500;
    req.status = 500;
    next(error);
  });

  routes.get('/authorize', function(req, res, next) {
    var error = new Error();
    error.status = 401;
    req.status = 401;
    next(error);
  });

  var spy = sinon.spy();

  for(var i=0; i < enviorment.length; i++) {
    var app = express();
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, 'resources'));
    app.use(routes);
    app.use(error(enviorment[i]));
    describe("#"+enviorment[i] + "_Error_Handling", function () {
      it("Throws_Internal_Server_Message", function () {
        return request(app).get('/exception')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(500)
            .end(error);
      });

      it("Throws_NotFound", function () {
        return request(app).get('/doesNotExist')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(404)
            .end(error);
      });

      it("Throws_Not_Authorized", function () {
        return request(app).get('/authorize')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(401)
            .end(error);
      });
    });
  }


});

function error (err, res) {
  if(err) throw err;
}
