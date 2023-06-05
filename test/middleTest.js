const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let testArr = ["hello", "lighthouse", "labs"];
middle(testArr);
assertArraysEqual(testArr, middle(testArr));

let testArr2 = [3, 4];
middle(testArr2);
assertArraysEqual(testArr2, middle(testArr2));
