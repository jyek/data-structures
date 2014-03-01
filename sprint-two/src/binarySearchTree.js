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

binaryTreeMethods.depthFirstLog = function(callback, side){
    var childside = function(child){
      if (child.parent.right === child){
         return 'right';
      } else {
         return 'left';
      }
    };

    if(this.parent===null && side==='right'){
      return;
    }

    if(side !== undefined) {
      if (side === 'right'){
        this.parent.depthFirstLog(callback, childside(this));
      } else {
        if (this.right !== null) {
          this.right.depthFirstLog(callback);
        }
      }
    } else {
      callback(this.value);
      if (this.left === null ){
        if (this.right === null ) {
          // no left, no right
          this.parent.depthFirstLog(callback, childside(this));
        } else {
          // no left, have right
          this.right.depthFirstLog(callback);
        }
      } else {
        // have left
        this.left.depthFirstLog(callback);
      }
    }

};

binaryTreeMethods.breadthFirstLog = function(callback){

};