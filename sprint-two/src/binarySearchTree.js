var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.depth = 0;
  _.extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value, tree){
  tree = tree || this;
  if (value > tree.value){
    if (tree.right === null){
      tree.right = new makeBinarySearchTree(value);
      tree.right.depth = tree.depth + 1;
    } else {
      tree.insert(value, tree.right);
    }
  } else {
    if (tree.left === null) {
      tree.left = new makeBinarySearchTree(value);
      tree.left.depth = tree.depth + 1;
    } else {
      tree.insert(value, tree.left);
    }
  }
};

binaryTreeMethods.contains = function(target){
  if (this.value === target){
    return true;
  } else if (target > this.value){
    if (this.right === null){
      return false;
    }
    return this.right.contains(target);
  } else {
    if (this.left === null){
      return false;
    }
    return this.left.contains(target);
  }
};

binaryTreeMethods.depthFirstLog = function(callback){
  callback(this.value);
  this.left !== null && this.left.depthFirstLog(callback);
  this.right !== null && this.right.depthFirstLog(callback);
};

binaryTreeMethods.breadthFirstLog = function(callback, tree, queue, indicateBlanks){
  var queue = queue || [];
  var indicateBlanks = indicateBlanks || false;
  tree = tree || this;
  callback(tree.value);
  if (tree.left !== null){
    queue.push(tree.left);;
  }
  if (tree.right !== null){
    queue.push(tree.right);
  }
  if (queue.length > 0){
    this.breadthFirstLog(callback, queue.shift(), queue);
  }
};

binaryTreeMethods.inOrderTraverse = function(callback){
  this.left !== null && this.left.inOrderTraverse(callback);
  callback(this.value);
  this.right !== null && this.right.inOrderTraverse(callback);
}

binaryTreeMethods.empty = function(){
  this.left = null;
  this.right = null;
}

binaryTreeMethods.makeBalancedTree = function(nodes, start, end, firstNode){
  if (end - start < 2){
    for (var i = start; i <= end; i++){
      if (firstNode){
        this.value = nodes[i];
      } else {
        this.insert(nodes[i]);
      }
    }
  }
  if (end - start >= 2){
    i = Math.floor( (start + end)/2 );
    if (firstNode){
      this.value = nodes[i];
    } else {
      this.insert(nodes[i]);
    }
    this.makeBalancedTree(nodes, start, i - 1, false);
    this.makeBalancedTree(nodes, i + 1, end, false);
  }
}

binaryTreeMethods.rebalance = function(tree){
  // helper to insert elements on in-order traversal
  nodes = [];
  var insert = function(val){
    nodes.push(val);
  }

  // O(n)
  this.inOrderTraverse(insert);
  // O(constant)
  this.empty();
  // O(n)
  this.makeBalancedTree(nodes, 0, nodes.length-1, true);
}