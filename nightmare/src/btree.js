var BTree = function(node){
  this.value = value;
  this.children = [];
};

BTree.prototype.insert = function(value, tree){
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

BTree.prototype.contains = function(target){
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

BTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  this.left !== null && this.left.depthFirstLog(callback);
  this.right !== null && this.right.depthFirstLog(callback);
};

BTree.prototype.breadthFirstLog = function(callback, tree, queue){
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
