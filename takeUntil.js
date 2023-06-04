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

// The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.
// the callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  let results = [];
  let lastIndex = 0;

  array.forEach((elem, index) => {
    results.push(elem);
    if (callback(elem)) {
      lastIndex = index;
    }
  })
  return results.slice(0, lastIndex);
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // => [ 1, 2, 5, 7, 2 ]
assertArraysEqual(results1, takeUntil(data1, x => x < 4));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // => [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2, takeUntil(data2, x => x === ","));