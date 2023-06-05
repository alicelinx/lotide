const without = function(source, itemsToRemove) {
  // looping through both arrays

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
};

module.exports = without;