var should = require('should');
var request = require('supertest');
var express = require('express');

var routes = express(require('../routes/index'));

describe('#Home_Page_Routes', function() {

    it('Gets the Home Page', function() {
        request(routes).get('/')
          .expect('Content-Type', 'html')
          .expect()
          .expect(200);
    });

    it('Gets The about page', function() {
        request(routes).get('/about')
          .expect('Content-Type', 'html')
          .expect(200);

        request(routes).get('/aboutme')
        .expect('Content-Type', 'html')
        .expect(200);
    });

  });
