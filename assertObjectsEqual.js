const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;

const obj1 = {
  name: "Kevin",
  location: "Canada"
};

const obj2 = {
  name: "Devin",
  location: "Canada"
};

const obj3 = {
  location: "Canada",
  name: "Kevin"
};

// assertObjectsEqual(eqObjects(obj1, obj1), true); //true
// assertObjectsEqual(eqObjects(obj1, obj2), false); //false
// assertObjectsEqual(eqObjects(obj1, obj3), true); //true

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(eqObjects(cd, cd2), false); // => false