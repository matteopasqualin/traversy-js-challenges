function generateHashtag(text) {
  let result = "";

  if (!text) {
    return false;
  }

  const wordsArray = text
    .split(" ")
    .filter((c) => !!c)
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });

  //console.log(wordsArray);

  if (wordsArray.length) {
    result = `#${wordsArray.join("")}`;
  }

  if (!result) {
    return false;
  }

  if (result.split("").length > 140) {
    return false;
  }

  return result;
}

module.exports = generateHashtag;
