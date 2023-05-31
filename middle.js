const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) return console.log(`❌❌❌Assertion Failed: [${arr1}] !== [${arr2}]`)
  else {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}] `)
  }
}

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
}

console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5, 6]))

let testArr = ["hello", "lighthouse", "labs"];
middle(testArr);
assertArraysEqual(testArr, middle(testArr))

let testArr2 = [3, 4];
middle(testArr2);
assertArraysEqual(testArr2, middle(testArr2))