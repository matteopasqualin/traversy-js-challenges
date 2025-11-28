function areAllCharactersUnique(text) {
  if (!text) {
    return true;
  }

  let result = true;
  let textArray = text.split("");
  let container = [];

  for (c of textArray) {
    if (container.indexOf(c) > -1) {
      result = false;
      break;
    }

    container.push(c);
  }

  return result;
}

module.exports = areAllCharactersUnique;
