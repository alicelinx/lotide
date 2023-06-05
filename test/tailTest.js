const assertEqual = require('../assertEqual');

const tail = require('../tail');

const input = ['hi', 'there', 'how are you?'];
assertEqual(tail(input), input);


