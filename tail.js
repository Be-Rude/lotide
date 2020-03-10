const assertEqual = require('./assertEqual')



const tail = function(words) {
  const tailArray = [];
  for (let i = 1; i < words.length; i++) {
    tailArray.push(words[i]);
  }
  return tailArray;
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);