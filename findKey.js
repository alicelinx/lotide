const findKey = function(obj, callback) {

  let objKeys = Object.keys(obj);
  // console.log(objKeys);

  for (let key of objKeys) {
    const keyValues = obj[key];
    // console.log(keyValues);

    const stars = callback(keyValues);

    if (stars) {
      return key;
    }
  }
};

module.exports = findKey;