const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

// complete
function createDreamTeam(members) {
  let tmp = [];
  Array.isArray(members)
    ? members.forEach(e => {
      if (typeof e !== 'string') return false;
      else {
        tmp.push(e.trim().toUpperCase()[0]);
      }
    })
    : false;

  return tmp.sort().join('');
}

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));
// console.log(createDreamTeam([['David Abram'], ['Robin Attfield'], 'Thomas Berry', ['Paul R.Ehrlich'], 'donna Haraway', ' BrIaN_gOodWiN  ', {
//   0: 'Serenella Iovino'
// }, 'Erazim Kohak', '  val_plumwood',]));

module.exports = {
  createDreamTeam
};
