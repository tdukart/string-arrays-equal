# string-arrays-equal

[![CircleCI](https://circleci.com/gh/tdukart/string-arrays-equal.svg?style=svg)](https://circleci.com/gh/tdukart/string-arrays-equal)

Lightweight, simple test to see if two arrays of strings are equal, ignoring order.

# Usage

To add to your project, run `npm install --save string-arrays-equal`.

```js
var stringArraysEqual = require('string-arrays-equal');

var arrayA = ['a', 'b', 'c', 'd'];
var arrayB = ['d', 'c', 'b', 'a'];
var arrayC = ['a', 'b', 'c', 'e'];

console.log('arrayA and arrayB', stringArraysEqual(arrayA, arrayB));
// arrayA and arrayB, true

console.log('arrayA and arrayC', stringArraysEqual(arrayA, arrayC));
// arrayA and arrayC, false
```
