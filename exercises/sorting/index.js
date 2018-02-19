// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp; 
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  // one by one move boundary of unsorted subarray
  let n = arr.length 
    // find the minimum element in unsorted array
  for (let i = 0; i < n-1; i++) {
    let minIdx = i;
    for (let j = i+1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // swap the found minium element with the first element
    if (minIdx !== i) {
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }
  }
  // return the arrary
  return arr;
}

function mergeSort(arr, res = []) {
  // recursion happens in here.
  // base case 
  // if the arr length === 1 
  if (arr.length === 1) {
    return arr;
  }
  
  // get the midpoint and get the two halves of the array 
  const midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // iterative solution 
  const results = [];
  // while there are still elements in both arrays
  while (left.length && right.length) {
    // if the first element the left half is less than first in right half
    if (left[0] < right[0]) {
      // shift the element from left into the results arr
      results.push(left.shift());
      // else 
    } else {
      // shift the elem from right into res arr
      results.push(right.shift());
    }
  }
  // take evertything from the array that still has stuff in it and put it in results.
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
