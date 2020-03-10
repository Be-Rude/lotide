const middle = require('../middle');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');



describe("#middle", () => {

  it("returns 2 for [1, 2, 3]", () => {
    assert.equal(assertArraysEqual(middle([1, 2, 3]), [2]));
  });


});

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]