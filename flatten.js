const eqArrays = require('./eqArrays');
const assertArrayEquals = require('./assertArraysEqual');

const flatten = function(lumpy) {
  let flat = [];
  let index = 0;

  while (index < lumpy.length) {
    if (typeof lumpy[index] === "number") {
      flat.push(lumpy[index]);
      index++;
    } else if (typeof lumpy[index] === "object") {
      if (lumpy[index].length === 1) {
        flat.push(lumpy[index][0]);
        index++;
      } else {
        flat.push(lumpy[index].shift());
      }
    }
  }
  return flat;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4, 4.5], 5, [6]]));