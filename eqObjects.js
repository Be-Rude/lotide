const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false
