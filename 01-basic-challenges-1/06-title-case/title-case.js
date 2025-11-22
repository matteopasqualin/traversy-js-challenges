function titleCase(text) {
  let result = "";

  const words = text.split(" ");
  
  for (w of words) {
    const wa = [...w];
    for (let i = 0; i < wa.length; i++) {
      if (i === 0) {
        wa[i] = wa[i].toUpperCase();
      } else {
        wa[i] = wa[i].toLowerCase();
      }
    }
    
    w = wa.join("");

    result += w + ' ';
  }

  return result.trim();
}

module.exports = titleCase;
