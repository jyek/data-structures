var Graph = function(){
  var 
};

Graph.prototype.addNode = function(newNode, toNode){
  var n = makeNode(newNode);
  toNode.connections.push(n);
};

Graph.prototype.contains = function(node){
  
};

Graph.prototype.removeNode = function(node){
  
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};


var makeNode = function(value){
  var node = {};
  node.value = value;
  node.connections = [];
  return node;
};