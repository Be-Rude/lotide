

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (!itemsToCount[item]) {
      continue;
    }
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  console.log(results);
  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Kavith"], undefined));
