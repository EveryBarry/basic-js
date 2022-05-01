const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};

  domains.forEach(elem => {
    let pieces = elem.split('.');
    pieces[pieces.length - 1] = `.${pieces[pieces.length - 1]}`;
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
      const piece = pieces.slice(0, i + 1).join('.');
      dns[piece] = dns.hasOwnProperty(piece) ? dns[piece] + 1 : 1;
    }
  });
  return dns;
}

module.exports = {
  getDNSStats
};
