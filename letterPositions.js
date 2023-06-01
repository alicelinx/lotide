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

const letterPositions = function(sentence) {
  const results = {};
  const newStr = sentence.toLowerCase();

  // loop over the newStr
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== " ") {
      if (results[newStr[i]]) {
        results[newStr[i]].push(i); // push indices
      } else {
        results[newStr[i]] = [i] // add the index if it doesn't exist
      }
    }
  }
  return results;
};

const result = letterPositions("lighthouse in the house")
assertArraysEqual(result.i, [1, 10]);
assertArraysEqual(result.e, [9, 16, 22]);
