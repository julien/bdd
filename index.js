(function (exports) {
  'use strict';

  function describe(msg, fn) {
    console.log(msg);
    return fn();
  }

  function it(msg, fn) {
    console.log('  %s', msg);
    fn();
  }

  exports.describe = describe;
  exports.it = it;

}(typeof exports !== 'undefined' ? exports : window));
