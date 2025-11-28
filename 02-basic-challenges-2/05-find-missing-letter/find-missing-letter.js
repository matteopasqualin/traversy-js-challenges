function findMissingLetter(arrayOfLettres) {
  if (!arrayOfLettres.length) {
    return "";
  }

  let result = "";
  let alphabet = String.fromCharCode(...Array(123).keys())
    .slice(97)
    .split("");

  let isUppercase = arrayOfLettres[0] === arrayOfLettres[0].toUpperCase();
  let found = true;
  let firstFound = false;

  //console.log(alphabet);

  for (c of alphabet) {
    // Finchè non trova la corrispondenza della prima lettera, salta il ciclo
    if (!firstFound) {
      firstFound = c.toUpperCase() === arrayOfLettres[0].toUpperCase();
    }

    if (firstFound) {
      //console.log(c);

      found = false;

      for (let i = 0; i < arrayOfLettres.length; i++) {
        if (c.toUpperCase() === arrayOfLettres[i].toUpperCase()) {
          found = true;
          break;
        }
      }

      if (!found) {
        result = c;
        break;
      }
    }
  }

  return isUppercase ? result.toUpperCase() : result;
}

module.exports = findMissingLetter;
