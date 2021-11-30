const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it('returns true when args int are equal', () => {
    assert.isTrue(assertEqual(1,1));
  });

  it('returns false when args int are not equal', () => {
    assert.isFalse(assertEqual(1,2));
  });

  it('returns true when args str are equal', () => {
    assert.isTrue(assertEqual("1","1"));
  });

  it('returns false when args str are not equal', () => {
    assert.isFalse(assertEqual("1","2"));
  });

  it('returns false when args str int are not equal', () => {
    assert.isFalse(assertEqual(1,"1"));
  });

});