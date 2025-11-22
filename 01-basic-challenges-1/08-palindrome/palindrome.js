function isPalindrome(text) {
  if (!text) {
    return false;
  }

  let reversed = "";
  const textArray = [...text];
  for (let i = textArray.length - 1; i > -1; i--) {
    reversed += textArray[i];
  }
  return reversed.toLowerCase() === text.toLowerCase();
}

module.exports = isPalindrome;
