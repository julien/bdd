'use strict';

var assert = require('assert');
var bdd = require('./index');

bdd.describe('example tests', function () {
  bdd.it('should pass', function () {
    assert.deepEqual(0, 0);
  });

  bdd.it('should throw', function () {
    assert.throws(function () {
      throw new Error('throwing up')
    });
  });

});
