const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];


describe("#tail", () => {

  it("returns array  ", () => {
    assert.equal(assertEqual(tail(words).length, 2));
  });


});
