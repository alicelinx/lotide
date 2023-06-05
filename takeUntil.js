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
  });
  return results.slice(0, lastIndex);
};

module.exports = takeUntil;