const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe("#assertArraysEqual", () => {

  it("returns true for [1, 2, 3], [1, 2, 3]'", () => {
    assert.strictEqual(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });
});


// TEST CODE
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false