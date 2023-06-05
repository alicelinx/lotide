const assertEqual = require('./assertEqual');


const head = function(arr) {
  let headOfArr;
  if (arr) {
    headOfArr = arr[0];
  }
  return headOfArr;
};



module.exports = head;