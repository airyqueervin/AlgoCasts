// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.enQ = new Stack();
    this.deQ = new Stack();
  }

  add(val) {
    // add all values to the first stack
    this.enQ.push(val);
  }

  remove() {
    // peek and see if the deq is empty
    if (!this.deQ.peek()) {
      while(this.enQ.peek()) {
        this.deQ.push(this.enQ.pop());
      }
    }
    return this.deQ.pop();
  }

  peek() {
    // check if the deq is empty
      // if it is return the element at the bottom of the first stack else return the top of the second stack
    return this.deQ.peek() ? this.deQ.peek() : this.enQ.data[0];
  }
}

module.exports = Queue;
