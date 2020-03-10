const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#assertEqual", () => {

  it("returns false for 'lighthouse Labs', 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("lighthouse Labs", "Bootcamp"));
  });
});


// assertEqual("lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);