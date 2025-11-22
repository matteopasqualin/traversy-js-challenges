function countVowels(text) {
  let counter = 0;
  const vowelsArray = ["a", "e", "i", "o", "u"];
  const textArray = [...text.toLowerCase()];
  for (let i = 0; i < textArray.length; i++) {
    if (vowelsArray.indexOf(textArray[i]) !== -1) {
      counter++;
    }
  }
  return counter;
}

module.exports = countVowels;
