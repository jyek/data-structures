var makeStack = function(){
  var instance = {};
  instance._storage = {};
  instance._len = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(val){
  this._storage[this._len++] = val;
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
