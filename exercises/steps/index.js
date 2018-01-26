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

function steps(n, row = 0, stair = '') {
  // base case
  if ( n === row) {
    return;
  }
  // recursive case
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;


/*

// iterative solution
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

OG non working solution 
function steps(n) {
  let hashTag = '#'
  let num = n;
  let res = '#';
  let reapHash = hashTag.repeat(n).split('');
  // console.log('REAP',reapHash);
  let counter = 1;
  if (n > 1) {
    while (counter < n) {
      console.log(res);
      if (counter === n) {
        res += '#'
      } else {
        res += ' '.repeat(num-1);

      }
      counter++
    }
    
  } else {
    console.log(hashTag);
  }

  // console.log(reapHash)
}
*/