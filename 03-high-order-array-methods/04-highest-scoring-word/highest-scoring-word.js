function highestScoringWord(myText) {
  let alphabet = String.fromCharCode(...Array(123).keys())
    .slice(97)
    .split("");

  let highestIndex = 0;
  const splittedWords = myText.split(" ");
  const scores = splittedWords.map((word) => {
    let score = 0;
    for (c of word) {
      score += alphabet.indexOf(c) + 1;
    }
    return score;
  });

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      continue;
    }
    if (scores[i] > scores[i - 1]) {
      highestIndex = i;
    }
  }

  return splittedWords[highestIndex];
}

module.exports = highestScoringWord;
