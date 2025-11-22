function reverseString(text) {
    let result = '';
    const textArray = [...text];
    for (let i = textArray.length - 1; i > -1; i--) {
      result += textArray[i];
    } 
    return result;
}

module.exports = reverseString;
