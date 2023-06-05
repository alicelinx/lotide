const tail = function(arr) {

  let tailOfArr;
  if (arr) {
    tailOfArr = arr.slice(1);
  }
  return tailOfArr;
};


module.exports = tail;