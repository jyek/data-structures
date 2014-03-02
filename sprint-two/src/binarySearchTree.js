var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value, tree){
  tree = tree || this;
  if (value > tree.value){
    if (tree.right === null){
      tree.right = new makeBinarySearchTree(value);
    } else {
      tree.insert(value, tree.right);
    }
  } else {
    if (tree.left === null) {
      tree.left = new makeBinarySearchTree(value);
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

binaryTreeMethods.breadthFirstLog = function(callback, tree, queue){
  var queue = queue || [];
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
