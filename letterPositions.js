const eqArrays = require('./eqArrays');

const assertArrayEquals = function(alice, bob) {
  if (eqArrays(alice, bob)) {
    console.log("They are equal.");
  } else {
    console.log("They are not equal.");
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) { //already exists
      results[sentence[i]].push(i); //increase
    } else {
      results[sentence[i]] = [i]; //make
    }
  }
  return results;
};

module.exports = letterPositions;

// assertArrayEquals(letterPositions("hello").h, [0]);
// assertArrayEquals(letterPositions("hello").e, [1]);
// assertArrayEquals(letterPositions("hello").l, [2, 3]);
// assertArrayEquals(letterPositions("hello").o, [4]);
// assertArrayEquals(letterPositions("hello").o, [3]); //fail check

// console.log(letterPositions("lighthouse in the house"));