'use strict';

var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

lab.experiment('math', function () {


  lab.test('returns true when 1 + 1 equals 2', function (done) {

    Code.expect(1+1).to.equal(2);
    done();
  });
});