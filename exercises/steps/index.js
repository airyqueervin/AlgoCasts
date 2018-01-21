// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let hashTag = '#'
  let res = '#';
  let reapHash = hashTag.repeat(n);
  let counter = 1;
  if (n > 1) {
    while (counter <= n) {
      console.log(res)
      if (counter === n) {
        res += '#'
      } else {
        res += '# ';

      }
      counter++
    }
  }

  // console.log(reapHash)
}

module.exports = steps;
