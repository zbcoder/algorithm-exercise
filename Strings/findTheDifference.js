/**
 * 389
 * Given two strings s and t which consist of only lowercase letters.
 * String t is generated by random shuffling string s and then add one more letter at a random position.
 * Find the letter that was added in t.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result = ''
    const sumS = s.split('').reduce((a,b)=> a + b.charCodeAt(), 0)
   const sumT = t.split('').reduce((a,b)=> a + b.charCodeAt(), 0)
    return String.fromCharCode(sumT - sumS)
};