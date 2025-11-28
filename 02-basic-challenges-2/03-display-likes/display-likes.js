function displayLikes(people) {
  let result = "";
  if (Array.isArray(people)) {
    if (people.length) {
      switch (people.length) {
        case 1:
          result = `${people[0]} likes this`;
          break;
        case 2:
          result = `${people[0]} and ${people[1]} like this`;
          break;
        case 3:
          result = `${people[0]}, ${people[1]} and ${people[2]} like this`;
          break;
        default:
          result = `${people[0]}, ${people[1]} and ${
            people.length - 2
          } others like this`;
          break;
      }
    } else {
      result = "no one likes this";
    }
  }
  return result;
}

module.exports = displayLikes;
