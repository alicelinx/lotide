const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("returns ['lighthouse'] for ['hello', 'lighthouse', 'labs']", () => {
    const testArr = ["hello", "lighthouse", "labs"];
    assert.deepEqual(middle(testArr), ['lighthouse']);
  });
});
