const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}] `);
  } else {
    console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const findKeyByValue = function(obj, value) {

  // initialize the keys in the object
  let objKeys = Object.keys(obj);

  // loop over the objKeys 
  for (let key of objKeys) {
    if (value === obj[key]) return key;
  }
  return undefined;
}

const obj1 = {
  name: "Alice",
  birthDay: "Oct, 26",
  city: "Calgary"
};

console.log(findKeyByValue(obj1, "Calgary"));


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wires"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(obj1, "Alice"), undefined);