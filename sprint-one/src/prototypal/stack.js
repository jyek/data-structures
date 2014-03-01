var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack._storage = {};
  newStack._len = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this._storage[this._len++] = value;
};

stackMethods.pop = function(){
  if (this._len === 0){
    return null;
  }
  var result = this._storage[this._len - 1];
  delete this._storage[this._len - 1];
  this._len--;
  return result;
};

stackMethods.size = function(){
  return this._len;
};