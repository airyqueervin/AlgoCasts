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
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').split('').sort().join('');
}

module.exports = anagrams;

/************ My Orignial solution *********
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
  console.log(strAMap, strBMap)
  for (let char in strBMap) {
    if (strAMap[char] !== strBMap[char]) {
      return false;
    }
  }
  return true;
} */

/*********** Object Map Solution ***********
function anagrams(stringA, stringB) {
  const aMap = buildCharMap(stringA);
  const bMap = buildCharMap(stringB);

  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false;
  }
  
  for (let char in aMap) {
    if (aMap[char] !== bMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char]++ || 1;
  }
  return charMap;
} */

/********** The cool Solution ***********
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').split('').sort().join('');
} */
  