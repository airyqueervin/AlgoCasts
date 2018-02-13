// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // take two pointers and set them both to the start of the list
  let slow = list.getFirst();
  let fast = list.getFirst();
  // first phase: advance fast by n
  while (n > 0) {
    // take n and advance fast by n spaces
    fast = fast.next;
    n--;
  }
  console.log(fast)
  // second phase: move slow and fast by 1 index together
  // ask if fast is pointing to the last element 
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // return slow;
  return slow;
}

module.exports = fromLast;
