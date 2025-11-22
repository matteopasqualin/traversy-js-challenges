const isPalindrome = require('./palindrome');

test('Checking for palindrome strings', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('Hello')).toBe(false);
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(false);
  expect(isPalindrome('12321')).toBe(true);
});
