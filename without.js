const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) return console.log(`❌❌❌Assertion Failed: [${arr1}] !== [${arr2}]`)
  else {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}] `)
  }
}

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


const without = function(source, itemsToRemove) {
  // looping through both arrays
  let output;
  for (let i = 0; i < source.length; i++) {
    // console.log("initial array: ", source[i]);

    for (let j = 0; j < itemsToRemove.length; j++) {
      // console.log("items to remove: ", itemsToRemove[j]);

      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
        // console.log("new array: ", source)
      }
    }
  }
  console.log(source);
}

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);