// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  
  insertFirst(val) {
    this.head = new Node(val, this.head)
  }
  
  listSize() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prevNode = this.head;
    let node = this.head.next;
    while (node.next) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;

  }

  insertLast(val) {
    const last = this.getLast();
    last ? last.next = new Node(val) : this.head = new Node(val);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next;
    }
    return null;
  }
  // Everything below this is from the solution. I tappped out
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
    /* 
    // handle edge case of input
    if (typeof index !== 'number') return null;
    // if the index is great than the size return null
    if (index > this.size) return null;
    // need to hanlde removing at the head
    if (index === 0) {
      this.removeFirst();
    }
    // need to handle removing at the tail
    if (index === this.size - 1) {
      console.log(this.size)
      this.removeLast();
      console.log(this.size)
      
    }
    */
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}


module.exports = { Node, LinkedList };
