const eqObjects = function(object1, object2) {

  const object1KeysArr = Object.keys(object1);
  const object2KeysArr = Object.keys(object2);
  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  } else {
    for (let key of object1KeysArr) {
      const obj1Val = object1[key];
      const obj2Val = object2[key];
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        } else {
          return false;
        }
      }
      if (obj1Val !== obj2Val) return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}, ${inspect(expected)}`);
  // console.log(eqObjects(actual, expected));

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `);
  }
  else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

assertObjectsEqual({ a: '1', b: 2 }, { b: '2', a: '1' });
assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });