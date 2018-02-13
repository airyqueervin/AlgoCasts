// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    // needs to add a data
    this.children.push(new Node(data));
  }
  
  remove(data) {
    // iterate over the children
      // filter out if they match the data then remove it
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(cb) {
    // start at root node
    let queue = [this.root]
    let node;

    while (node = queue.shift()) {
      if (node.children) {
        queue.push(...node.children);
        // for (let child of node.children) {
        //   // console.log('child', child);
        //   queue.push(child)
        // }
      }
      cb(node)
    }
  }
  traverseDF(cb, node = this.root) {
    // start at the root
    // use recursion
      // if there are no children return
        // cb(node)
    // else recurse

    cb(node)
    if (!node.children) {
      return
    } else {
      for (let child of node.children) {
        this.traverseDF(cb, child)
      }
    }
  }

}

module.exports = { Tree, Node };
