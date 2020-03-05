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


const without = function(source, itemsToRemove) {
  let removed = [];
  
  for (i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === true) {
      continue;
    }
    removed.push(source[i]);
  }
  return removed;
};

assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true); // => should PASS
