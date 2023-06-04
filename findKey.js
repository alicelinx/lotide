const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }
  console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}] `);
};

const findKey = function(obj, callback) {

  let objKeys = Object.keys(obj);
  // console.log(objKeys);

  for (let key of objKeys) {
    const keyValues = obj[key];
    // console.log(keyValues);

    const stars = callback(keyValues);

    if (stars) {
      return key;
    }
  }
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 1), 'Akaleri');



