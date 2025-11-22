function findMaxNumber(arrayNumber) {
  let phNum;
  let result = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    
    if (i > 0) {
      if (arrayNumber[i] >= phNum) {
        result = arrayNumber[i];
      }
    }

    phNum = arrayNumber[i];

    /*phNum = arrayNumber[i];
    if (i > 0 && arrayNumber[i - 1] > phNum) {
        console.log(arrayNumber[i]);
      phNum = arrayNumber[i];
    }
      */
  }
  return result;
}

module.exports = findMaxNumber;
