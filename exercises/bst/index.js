// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize datas 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same data.

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // check if the data is less than the current node data and check if the left exists 
    if (data < this.data && this.left) {
      // if it does, recurse and call insert(data) on itself
      this.left.insert(data);
      // else if the data is less than the current data
    } else if (data < this.data) {
      // assign a new Node(data) to the left node
      this.left = new Node(data);
      // else if the data is greater than the current node data AND there is a node in the right spot
    } else if (data > this.data && this.right) {
      // recursive call insert on the right node
      this.right.insert(data);
      // else if the data is greater than the current data
    } else if (data > this.data) {
      // create a new Node and assign it to the right
      this.right = new Node(data);
    }
    
  }

  contains(data) {
    /** My iterative approach
     * select the current node and assing to a let 
     * while the left or right are !null
     *  check if the data == this.data
     *    if it is return true
     *   check if the data is < or > to the current node data
     * if either is true, reassign the current node 
     * repeat until null 
     */
    let node = this;
    while(node !== null) {
      if (data === node.data) {
        return node;
      }
      node = data > node.data ? node.right : node.left;
    }
    return node;

    /** Recursive Appraoch from the Solution */
    // if (this.data === data) {
    //   return this;
    // }
    // if (this.data < data && this.right) {
    //   return this.right.contains(data);
    // } else if (this.data > data && this.left) {
    //   return this.left.contains(data);
    // }
    // return null;
  }
}

module.exports = Node;
