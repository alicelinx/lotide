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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const object1KeysArr = Object.keys(object1);
  const object2KeysArr = Object.keys(object2);

  // check if the objects have the same number of keys
  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  } else {
    // loop through the keys for one of the obj
    for (let key of object1KeysArr) {
      const obj1Val = object1[key];
      const obj2Val = object2[key];
      // if array comparisons need to be made
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        } else {
          return false;
        }
      }
      // check primitive values
      if (obj1Val !== obj2Val) return false;
    }
  }
  return true;
};




// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
// assertEquals(eqObjects(shirtObject, anotherShirtObject), true);


// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
// assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false);


// console.log(eqObjects(shirtObject, longSleeveShirtObject));

//
//
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);  // => false

console.log(eqObjects({ a: '1', b: 2 }, { c: 3, a: '1' }));