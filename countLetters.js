const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}] `);
  } else {
    console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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
}


console.log(countLetters("Hello there."))
console.log(countLetters("Lighthouse Labs"));
const result1 = countLetters("Lighthouse Labs");
assertEqual(result1["s"], 1);
assertEqual(result1["l"], 2);