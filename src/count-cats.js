const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// COMPLETE
function countCats(cats) {
  let arr = cats.flat();
  let out = arr.reduce((a, b) => ((b === "^^") ? a + 1 : a), 0);
  return out;
}

module.exports = {
  countCats
};


// console.log(countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]));