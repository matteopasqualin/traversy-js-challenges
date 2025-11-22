function countOccurrences(text, char) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if(text[i] === char){
        counter++;
    }
  }
  return counter;
}

module.exports = countOccurrences;
