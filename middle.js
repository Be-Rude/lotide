const assertArraysEqual = require('./assertArraysEqual');

const middle = function(input) {
  let newArray = [];
  if (input.length < 3) {
  return newArray;
  } 
  if (input.length % 2 !== 0) {
  newArray.push(Math.ceil(input.length/2));
  } else {
  newArray.push((input.length/2), (input.length/2) + 1); 
  }
  return newArray;
};

// const assertArraysEqual = function(input1, input2) {
//   if (eqArrays(input1, input2)) {
//     console.log(`👍👍👍 Assertion Passed: ${input1} === ${input2}`);
//     } else {
//   console.log(`❌❌❌ Assertion Failed: ${input1} !== ${input2}}`);
//     }
// };

// const eqArrays = function(input1, input2) {
//   for (let i = 0; i < input1.length; i++) {
//       if (input1[i] !== input2[i]) {
//         return false;
//       }
//     }
//   return true;
// };

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

module.exports = middle;