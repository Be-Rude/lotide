const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


const eqObjects = function(object1, object2) {
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;
  let objectArray = Object.keys(object1);
  
  if (object1Length !== object2Length) {
    return false;
  } else {
    for (let key of objectArray) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (eqArrays(object1[key], object2[key])) {
            return true;
          } else {
            return false;
          }
        }
        if (object1[key] !== object2[key]) {
        return false;
      }
    }
   return true;
  }
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

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
