 var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent= this;
  this.children.push(child);
};

treeMethods.removeFromParent= function(){
  var parentTree = this.parent;
  for (var i = 0 ; i < parentTree.children.length ; i++){
    if (parentTree.children[i] === this){
      parentTree.children.splice(i, 1);
      this.parent = null;
      return;
    }
  }
};

treeMethods.contains = function(target, tree){
  tree = tree || this;
  if (tree.value === target){
    return true;
  } else {
    for (var i=0; i<tree.children.length; i++){
      result = this.contains(target, tree.children[i]);
      if (result){
        return true;
      }
    }
  }
  return false;
};