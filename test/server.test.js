var should = require('should');
var request = require('supertest');
var express = require('express');
var async = require('async');

var routes = express(require('../routes/index'));

describe('#SinglePageApp', function() {
  describe('#Single_Page_APP_BasicURL_Resolved', function() {
    this.slow(100);
    var testURLs = [
      {args: ["/"]},
      {args: ['/aboutme']},
      {args: ['/aboutme/']},
      {args: ['/about/']},
      {args: ['/about/contact']},
      {args: ['/about/fasdf']},
      {args: ['/about/info']},
      {args: ['/aboutme/E#ESfdsa']},
      {args: ['/aboutme/asdfa']},
      {args: ['/aboutme/asdfsfa']}
    ];

    testURLs.forEach(function(test) {
      it('Gets the \"' + test.args[0] +'\" Page', function() {
        testURLResolution.apply(null, test.args).then(function (err) {
          if (err) throw err;
          done();
        });
      });
    });
  });


});

function testURLResolution(){
  return Array.prototype.slice.call(arguments).reduce(function(url) {
    return request(routes).get(url)
        .expect('Content-Type', 'html')
        .expect(200)
        .end(function(err, res) {
          if(err) throw err;
        });
  }, "");
}

//TODO TESt Parameters :)
function incrementString(string, fn) {
  if(string)
  {
    var re = "[\S]"; //splits on each char
   return s.split(re).foreach(function (test) {
     return nextChar(c,fn);
   });
  }
  return;
}

function nextChar(c, fn) {
  if(c)
  {
    var substring = c.slice(1, c.length-1);
    return nextChar(String.fromCharCode(c.charCodeAt(0) + 1))
      ;
  }
  return;
}
