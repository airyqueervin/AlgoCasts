// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let count = 0;
  let res;
  for (char of str) {
    chars[char] = chars[char]++ || 1;
  }
  for (char in chars) {
    if (chars[char] > count) {
      count = chars[char];
      res = char;
    }
  }
  return res;
}

module.exports = maxChar;
