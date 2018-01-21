// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strAMap = {};
  let strBMap = {};
  let strA = stringA.toLowerCase();
  let strB = stringB.toLowerCase();
  for (let charA of strA) {
    strAMap[charA] = strAMap[charA]++ || 1;
  }
  for (let charB of strB) {
    strBMap[charB] = strBMap[charB]++ || 1;
  }
  for (let char in strBMap) {
    if (strAMap[char] !== strBMap[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
