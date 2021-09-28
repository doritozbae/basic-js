import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit( n ) {
  
  let result = [];
  let number = n.toString(); 

  for (let i = 0; i < number.length; i++) {

    result.push((number.slice(0, i) + number.slice(i + 1)));
    
  }

  return Math.max.apply(null, result);

}
