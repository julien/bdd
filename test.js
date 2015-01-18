'use strict';

var assert = require('assert');
var bdd = require('./index');

assert.deepEqual(typeof bdd.describe, 'function');
assert.deepEqual(typeof bdd.it, 'function');
assert.doesNotThrow(bdd.describe('no errors', function () {
  return function () {
    console.log('no error');
  };
}));
assert.throws(bdd.describe('errors', function () {
  return function () {
    throw new Error('gotcha');
  };
}));

var result = null;
result = bdd.describe('a test', function () {
  return function (a, b) { return a + b; };
});

assert.doesNotThrow(result);


