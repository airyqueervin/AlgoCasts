// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numStr = n.toString().split('').reverse().join('');

  return numStr * Math.sign(n);
}

module.exports = reverseInt;


function reverseInt(n) {
  let numStr = n.toString();
  
  if (n >= 0) {
    if (numStr.length === 1) {
      return n;
    } else {
      return Number(numStr.split('').reverse().join(''));
    }
  } else {
    let numCopy = numStr.slice(1);
    let res = '-' + numCopy.split('').reverse().join('');
    return Number(res)
  }
}