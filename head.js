const assertEqual = require('./assertEqual');


const head = function(arr) {
  let headOfArr;
  if (arr) {
    headOfArr = arr[0];
  }
  return headOfArr;
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");