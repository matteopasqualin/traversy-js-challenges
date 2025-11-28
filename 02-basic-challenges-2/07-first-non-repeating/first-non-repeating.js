function findFirstNonRepeatingCharacter(text) {
  if (!text) {
    return "";
  }

  let result = "";
  let textArray = text.split("");

  for (let i = 0; i < textArray.length; i++) {
    if (i === textArray.length - 1) {
      break;
    }

    if (textArray[i] !== textArray[i + 1]) {
        result = textArray[i];
        break;
    }

    i += 1;

    /* for (c of textArray) {
      if (container.indexOf(c) > -1) {
        result = c;
      }
      container.push(c);
      break;
    }

    if (result) {
      break;
    } */
  }

  return result === "" ? null : result;
}

module.exports = findFirstNonRepeatingCharacter;
