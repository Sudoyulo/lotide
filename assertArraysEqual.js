const eqArrays = require('./eqArrays');

const assertArraysEqual = function(alice,bob) {
  if (eqArrays(alice, bob)) {
    // console.log("They are equal.");
    return true;
  } else {
    // console.log("They are not equal.");
    return false;
  }
};

module.exports = assertArraysEqual;

// assertArraysEqual([1,2,3,"hi"],[1,2,3,"hi"]);