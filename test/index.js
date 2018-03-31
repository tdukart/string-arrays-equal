/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback, no-var */
var chai = require('chai');
var arraysEqual = require('../dist').default;

describe('arraysEqual', function () {
  it('matches two equal arrays with the same order', function () {
    var arrayA = ['a', 'b', 'c'];
    var arrayB = ['a', 'b', 'c'];
    var doesMatch = arraysEqual(arrayA, arrayB);

    chai.assert.isTrue(doesMatch);
  });

  it('matches two equal arrays with different order', function () {
    var arrayA = ['a', 'b', 'c'];
    var arrayB = ['a', 'c', 'b'];
    var doesMatch = arraysEqual(arrayA, arrayB);

    chai.assert.isTrue(doesMatch);
  });

  it('does not match two arrays of different lengths', function () {
    var arrayA = ['a', 'b'];
    var arrayB = ['a', 'c', 'b'];
    var doesMatch = arraysEqual(arrayA, arrayB);

    chai.assert.isFalse(doesMatch);
  });

  it('does not match two arrays of the same length but different values', function () {
    var arrayA = ['a', 'b', 'c'];
    var arrayB = ['a', 'b', 'd'];
    var doesMatch = arraysEqual(arrayA, arrayB);

    chai.assert.isFalse(doesMatch);
  });
});
