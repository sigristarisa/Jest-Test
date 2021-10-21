const capitalize = (str) => {
  const strArray = str.split("");
  return strArray.shift().toUpperCase() + strArray.join("");
};

module.exports = capitalize;
