// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;

/*

function validate(node, min = null, max = null) {
  
    We have a node
    We also have a min and max
    We should check the current node's data
    if the left data is less than the parent data and the right data is greater thand the parent data
      set min and max to the data value
    
    Need to return a boolean
  
  // Let's try BFS
  // make a queue
  // add the node into an array
  // while the queue has a length
    // if the child nodes are not null
      // check the values for greater or lesser than
      // return false
      // push the left and right into the queue 
    // if the left most node has no children asign to left
    // same with the right most node.
      // repeat
  let nodeQ = [node];
  let rootData = node.data;
  // Get the LEFT MIN

  while (nodeQ.length) {
    let leftNode = nodeQ.shift();
    if (leftNode.left !== null) {
      nodeQ.push(leftNode.left)
    } else {
      min = leftNode.data
    }
  }
  // Reset the Queue
  nodeQ = [node]
  // Get the RIGHT MAX
  while (nodeQ.length) {
    let rightNode = nodeQ.shift();
    if (rightNode.right !== null) {
      nodeQ.push(rightNode.right)
    } else {
      max = rightNode.data
    }
  }
  nodeQ = [node]
  // console.log(min)
  // console.log(max)
  
  while (nodeQ.length) {
    let currNode = nodeQ.shift();
    // console.log('currnode', currNode)
    if (currNode.left !== null) {
      // min = currNode.data;
      // console.log('mini min', min)
      if (currNode.left.right !== null) {
        console.log('in here')
        return false;
      }

      if (currNode.data > currNode.left.data) {
        nodeQ.push(currNode.left);
      } else {
        return false;
      }
    } else if (currNode.right !== null) {
      // max = currNode.data
      // console.log('mini max', max)
      if (currNode.data < currNode.right.data) {
        // console.log('right', currNode.right.data)
        nodeQ.push(currNode.right);
        // console.log('right', nodeQ)

        // max = currNode.right.data;
      } else {
        return false;
      }
    } 
  }
  // console.log('min', min)
  // console.log('max', max)
  return true;
}

module.exports = validate;

*/