const letterPositions = function(sentence) {
  const results = {};
  const newStr = sentence.toLowerCase();

  // loop over the newStr
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== " ") {
      if (results[newStr[i]]) {
        results[newStr[i]].push(i); // push indices
      } else {
        results[newStr[i]] = [i]; // add the index if it doesn't exist
      }
    }
  }
  return results;
};

module.exports = letterPositions;