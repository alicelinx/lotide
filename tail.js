const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}] `);
  } else {
    console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const tail = function(arr) {

  let tailOfArr;
  if (arr) {
    tailOfArr = arr.slice(1);
  }
  return tailOfArr;
};


const input = [];
const result = tail(input);

console.log(result);
assertEqual(input.length, 3);
assertEqual(result.length, 2);
assertEqual(result, "Hello");