const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let maxNum = 0;

  arr.forEach((elem, index, arr) => {
    let tmpArr = [...arr];
    tmpArr.splice(index, 1);
    let n = Number(tmpArr.join(''));
    if (n > maxNum) maxNum = n;
  })

  return maxNum;
}

console.log(deleteDigit(152))

module.exports = {
  deleteDigit
};
