
const countLetters = function(sentence) {
  let result = {};
  // lower all cases
  let newString = sentence.toLowerCase();
  // console.log(newString)

  // loop through the newString
  for (let char of newString) {

    // filter spaces in the newString
    if (char !== " ") {
      if (result[char]) { // if the character already existed, add 1 
        result[char] += 1;
      } else {
        result[char] = 1; // if the char doesn't exist, create one
      }
    }
  }
  return result;
};

module.exports = countLetters;