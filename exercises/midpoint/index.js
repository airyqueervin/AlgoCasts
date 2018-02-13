// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;

// my solution
// function midpoint(list) {
//   // take the list and get the size
//   // calculate the midpoint of the number
//   // call get 
//   // console.log(list)
//   let size = list.size();
//   let midPoint = Math.floor(size / 2);
//   return size % 2 !== 0 ? list.getAt(midPoint) : list.getAt(midPoint-1)
// }