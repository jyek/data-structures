var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.parent = null;
  _.extend(newTree,binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  var child = makeBinarySearchTree(value);
  var goToBottom = function(value, child, tree){
    if (value > tree.value){
      if (tree.right === null){
        tree.right = child;
        child.parent = tree;
      } else {
        goToBottom(value, child, tree.right);
      }
    } else {
      if (tree.left === null) {
        tree.left = child;
        child.parent = tree;
      } else {
        goToBottom(value, child, tree.left);
      }
    }
  };
  goToBottom(value, child, this);
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
}