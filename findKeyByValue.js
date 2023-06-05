const findKeyByValue = function(obj, value) {

  // initialize the keys in the object
  let objKeys = Object.keys(obj);

  // loop over the objKeys 
  for (let key of objKeys) {
    if (value === obj[key]) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;