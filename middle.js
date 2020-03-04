let newArray = [];

const middle = function(input) {
  if (input.length < 3) {
  return newArray;
} else
if (input.length % 2 !== 0) {
  newArray.push(Math.ceil(input.length/2));
  return newArray;
} else
  if (input.length % 2 === 0) {
  newArray.push((input.length/2), (input.length/2) + 1);
    return newArray;
  }
};

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

assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => should PASS