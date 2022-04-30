const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  /* 70ms last
    if (date === undefined) return 'Unable to determine the time of year!';
  
    try {
      date.getTime();
    } catch (error) {
      throw new Error('Invalid date!');
    }
  
    let seasons = {
      winter: [11, 0, 1],
      spring: [2, 3, 4],
      summer: [5, 6, 7],
      autumn: [8, 9, 10]
    }
    let month = date.getMonth();
  
    let out = '';
  
    for (let season in seasons) {
      seasons[season].forEach(m => {
        if (m == month) out = season;
      });
    }
    return out;
  */

  //FIXME not good
  // 64ms last 
  let seasons = [
    'winter', 'winter', 'spring',
    'spring', 'spring', 'summer',
    'summer', 'summer', 'autumn',
    'autumn', 'autumn', 'winter'
  ]
  if (date === undefined) return 'Unable to determine the time of year!';

  try {
    date.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  return seasons[date.getMonth()];
};

console.log(getSeason(new Date(2020, 02, 31)));

module.exports = {
  getSeason
};
