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
    this.tail = null;
    this.size = 0;
  }
  
  
  insertFirst(val) {
    // create a new node with the value
    const newNode = new Node(val);
    // check if the head is null
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const lastHead = this.head;
      this.head = newNode;
      this.head.next = lastHead;
    }
    this.size++;
  }
  
  listSize() {
    return this.size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  removeFirst() {
    this.head ? this.head = this.head.next : this.head = null; 
    this.size--;
  }

  removeLast() {
    // check if the tail has a value
    if (!this.head || this.size === 1) {
      this.clear();
    } else {
      let currNode = this.head
      let prevNode;
      // while the currNode node has a next node that is not undefined loop
      while(currNode.next) {
        // save a reference to the current node
        prevNode = currNode
        // set the currNode to the next node 
        currNode = currNode.next
      }
      this.tail = prevNode;
      this.size--;
    }
      // may need to iterate through the list
      // take the last node and reassing it's previous node
    // iterate through the nodes, if we've found the target value of the tail then we are on the prev node and should set that to the current tail
  }

  insertLast(val) {
    // create a new node
    const newNode = new Node(val);
    // check the last node by getting the tail
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.size
    } else {
      // save a ref to the tail node 
      let temp = this.tail;
      // set the old tail to the newNode
      temp.next = newNode;
      // set the tail to the newNode
      this.tail = newNode;
    }
    // increase the size
    this.size++;
  }

  getAt(targetIndex) {
    // looking to find a node's data at a given index
    if (typeof targetIndex !== 'number') return null;
    // check if the index is greater than the size of the list
    if (targetIndex > this.size) return null;

    let targetNode = this.head;
    let i = 0;
    // iterate through the list
    // when loop counter or size reaches the target index
    while(targetIndex !== i) {
      targetNode = targetNode.next;
      // increment a counter or maybe loop through the size
      i++
    }
    // return the node. 
    return targetNode; 
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
