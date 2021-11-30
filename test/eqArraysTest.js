const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#assertArrays", () => {
  it('returns true when arrays are equal', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('returns false true when arrays are not equal', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 3, 3]));
  });

  it('returns true when arrays are strings', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('returns false when arrays are ints and strings', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], [1, "2", "3"]));
  });
});