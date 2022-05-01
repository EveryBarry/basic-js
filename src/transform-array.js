const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let out = [];

  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  else out = [...arr];

  out.forEach((elem, index) => {
    switch (elem) {
      case '--discard-next':
        out[index] = undefined;
        out[index + 1] = undefined;
        break;
      case '--discard-prev':
        out[index] = undefined;
        out[index - 1] = undefined;
        break;
      case '--double-next':
        out[index] = out[index + 1];
        break;
      case '--double-prev':
        out[index] = out[index - 1];
        break;

      default:
        break;
    }
  })

  return out.filter(elem => elem !== undefined);
}

module.exports = {
  transform
};
