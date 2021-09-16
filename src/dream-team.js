
import { NotImplementedError } from '../extensions/index.js';

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

 export default function createDreamTeam(members) {
  if (!members) {
    return false;
  }

  var newMembers = [];
  var result = [];

  for (let j = 0; j < members.length; j++) {

    newMembers = members[j];

    if (typeof newMembers === 'string') {
    newMembers = newMembers.split(' ').join(''); 
    result.push(newMembers[0]);
    }

  
  }

  return result.map(i => i.toUpperCase()).sort().join('')
}