const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');



describe("#AssertArraysEqual", () => {
  it('returns true when arrays are equal', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
});