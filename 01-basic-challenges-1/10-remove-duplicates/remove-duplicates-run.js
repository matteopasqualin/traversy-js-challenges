const removeDuplicates = require('./remove-duplicates');

const result = removeDuplicates([
  1,
  2,
  3,
  4,
  5,
  5,
  5,
  6,
  7,
  8,
  'hello',
  'hello',
  true,
  true,
]);

/*const result = removeDuplicates([
  1,
  2,
  3,
  2,
  4,
  1,
  5
]);*/

console.log(result);
