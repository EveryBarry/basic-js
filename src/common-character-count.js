const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');

  let out;

  out = arrS1.filter(elem => {
    let i = arrS2.indexOf(elem);

    if (i !== -1) {
      arrS2.splice(i, 1);
      return true;
    }
    else return false
  })
  return out.length;
}

module.exports = {
  getCommonCharacterCount
};
