

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};

  // loop over the array 
  for (let item of allItems) {

    // check if item matches object keys with truthy value
    if (itemsToCount[item]) {

      // console.log(item, result[item])

      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
      // console.log(result)
    }
  }
  return result;
};


module.exports = countOnly;
