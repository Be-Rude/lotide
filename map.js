const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


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

assertArraysEqual(eqArrays((results1), ['g', 'c', 't', 'm', 't']), true); // => should PASS