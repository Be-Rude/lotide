
const assertArraysEqual = function(input1, input2) {
  if (input1.length !== input2.length) {
    return false;
  } else
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== input2[i]) {
        console.log(`❌❌❌ Assertion Failed: ${input1} !== ${input2}}`);
        return false;
      }
    }
  console.log(`👍👍👍 Assertion Passed: ${input1} === ${input2}`);
  return true;
};

const eqArrays = function(input1, input2) {
  if (input1.length !== input2.length) {
    return false;
  } else
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== input2[i]) {
        return false;
      }
    }
  return true;
};

const flatten = function(input) {
  let newArray = [];
  
  if (Array.isArray(input)) {
  newArray = input.flat();
  return newArray;
  }
};

assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true); // => should PASS