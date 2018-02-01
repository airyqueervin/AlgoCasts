// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create an empty array called results
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  // create a counter variable starting at 1
  let counter = 1;
  let startRow = 0;
  let startCol = 0;
  let endRow = n - 1;
  let endCol = n - 1;
  // while start col is <= to end col and start row is <= end row
  while (startCol <= endCol && startRow <= endRow) {
    // Top Row
    // iterate through the start col to the end col

    for (let i = startCol; i <= endCol; i++) {
      // at results[start_row][i] assign counter var
      results[startRow][i] = counter;
      // increment counter
      counter++;
    }
    // increment start row
    startRow++;
    // Right Column
    // loop from start row to end row
    for (let i = startRow; i <= endRow; i++) {
      // at results[i][end_col] assign count er var
      results[i][endCol] = counter;
      // increment counter
      counter++
    }
    endCol--;
    // Bottom Row
    // iterate from the endCol to the startCol and decrement 
    for (let i = endCol; i >= startCol; i--) {
      // assign the current bottom row at column postion and assing the value;
      results[endRow][i] = counter;
      counter++
    }
    // decrement end row
    endRow--;
    // start col
    // iterate over the endrow to the start row and decrement the counter
    for (let i = endRow; i >= startRow; i--) {
      // set the next row at the new start col to a value
      results[i][startCol] = counter;
      counter++
    }
    // decrement start Col
    startCol++;
    
  }
  // return the results
  return results;
}


module.exports = matrix;
