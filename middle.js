const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  // initialize the result array and middle index
  let result = [];
  let middleIndex = Math.floor((0 + array.length - 1) / 2);

  let nextIndex = Math.ceil((0 + array.length - 1) / 2);
  // console.log(middleIndex)
  // console.log(nextIndex)


  // check the array length odd or even & at least two elements
  // push the value of middle index to the result array

  if (array.length % 2 !== 0) {
    result.push(array[middleIndex]);

  } else if (array.length % 2 === 0) {
    result.push(array[middleIndex], array[nextIndex]);
  } else {
    result[array[middleIndex]];;
  }

  return result;
};


module.exports = middle;