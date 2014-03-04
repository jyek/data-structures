// noOfNodes is the number of nodes on each tree (e.g. 2 for a 2-3 b-tree)
var BTree = function(noOfNodes){
  this.n = noOfNodes;
  this._values = makeDblLinkedList(noOfNodes);
  this._children = makeLimitedArray(noOfNodes + 1);
};

BTree.prototype.print = function(){
  this._values.print();
};

BTree.prototype.insert = function(value){
  // var findPosition = function(value, tree){
  //   for (var i = 0; i < this._values.length; i++){
  //     if (value < this._values.get(i)){

  //     }
  //   }
  // }

  // if (not full){
  //   add value
  // } else {
  //   this._children[].insert(value);
  // }
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
