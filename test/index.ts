/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback, no-var */
import 'jsdom-global';
import 'mocha';
import { assert } from 'chai';
// eslint-disable-next-line import/extensions
import arraysEqual from '../src/index';

describe('arraysEqual', function () {
  it('matches two equal arrays with the same order', function () {
    const arrayA = ['a', 'b', 'c'];
    const arrayB = ['a', 'b', 'c'];
    const doesMatch = arraysEqual(arrayA, arrayB);

    assert.isTrue(doesMatch);
  });

  it('matches two equal arrays with different order', function () {
    const arrayA = ['a', 'b', 'c'];
    const arrayB = ['a', 'c', 'b'];
    const doesMatch = arraysEqual(arrayA, arrayB);

    assert.isTrue(doesMatch);
  });

  it('does not match two arrays of different lengths', function () {
    const arrayA = ['a', 'b'];
    const arrayB = ['a', 'c', 'b'];
    const doesMatch = arraysEqual(arrayA, arrayB);

    assert.isFalse(doesMatch);
  });

  it('does not match two arrays of the same length but different values', function () {
    const arrayA = ['a', 'b', 'c'];
    const arrayB = ['a', 'b', 'd'];
    const doesMatch = arraysEqual(arrayA, arrayB);

    assert.isFalse(doesMatch);
  });
});
