const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['there', 'how are you?'] for ['hi', 'there', 'how are you?']", () => {
    const input = ['hi', 'there', 'how are you?'];
    assert.deepEqual(tail(input), ['there', 'how are you?']);
  });

});


