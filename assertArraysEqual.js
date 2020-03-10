
const eqArrays = require('./eqArrays');

// let eqArrays = function(arr1, arr2){
//   for (let i = 0; i < arr1.length; i++){
//     if (arr1[i] !== arr2[i]){
//       return false;
//     }
//   }
//   return true;
// };

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

// // TEST CODE
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false