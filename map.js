const eqArrays = require('./eqArrays');
const assertArrayEquals = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length);
// const results3 = map(words, word => word.length * 2);

// assertArrayEquals(results1, [ 'g', 'c', 't', 'm', 't' ]);
// assertArrayEquals(results2, [6, 7, 2, 5, 3]);
// assertArrayEquals(results3, [12, 14, 4, 10, 6]);