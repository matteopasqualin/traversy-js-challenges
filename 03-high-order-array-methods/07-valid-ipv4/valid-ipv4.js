const isValidIPv4 = (text) => {
  //return (text.split('.').length != 4)
  //  ? false
  //  : text.split('.').every(item => (parseInt(item) === NaN) ? false : parseInt(item) >= 0 && parseInt(item) <= 255);

  return text.split(".").length != 4
    ? false
    : text.split(".").every((item) => {
        if (
          parseInt(item) === NaN ||
          item.split("").length > 3 ||
          (item.split("").length === 3 && parseInt(item) < 100)
        ) {
          return false;
        }

        return parseInt(item) >= 0 && parseInt(item) <= 255;
      });
};

module.exports = isValidIPv4;
