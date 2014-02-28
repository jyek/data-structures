var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children.push(child);
};

treeMethods.contains = function(target, tree){
  tree = tree || this;
  var found = false;
  if (tree.value === target){
    found = true;
  } else {
    for (var i=0; i<tree.children.length; i++){
      result = this.contains(target, tree.children[i]);
      if (result){
        found = true;
      }
    }
  }
  return found;
};