function validAnagrams(word1, word2) {
  let result = false;

  const freqCount1 = word1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  //console.log(freqCount1);

  const freqCount2 = word2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  //console.log(freqCount2);

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}

module.exports = validAnagrams;
