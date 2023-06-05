
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

module.exports = eqObjects;