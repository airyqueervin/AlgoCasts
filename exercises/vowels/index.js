// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // create a vowel hash
  const vowelHash = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  };
  // create a counter
  let vowelCount = 0;
  // iterate over the string
  for (char of str) {
    // check if char is in the hash
    if (vowelHash[char.toLowerCase()]) {
      // icrement the counter
      vowelCount++;
    }
  }
  // return count 
  return vowelCount;
}

module.exports = vowels;
