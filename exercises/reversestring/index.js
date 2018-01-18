// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('hello')

module.exports = reverse;

// function reverse(str) {
//   let res = '';
//   let strLen = str.length-1;
//   for (let i = strLen; i >= 0; i--) {
//     res+=str[i]
//   }
//   return res; 
// }

// function reverse(str) {
//   let res = '';

//   for (let char of str) {
//     console.log(char)
//     res = char + res;
//   } 
//   return res;
// }