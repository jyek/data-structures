var makeQueue = function(){
  var newQueue = Object.create(queueMethods);
  newQueue._storage = {};
  newQueue._len = 0;
  return newQueue;
};

queueMethods = {};

queueMethods.enqueue = function(value){
  for (var i = this._len; i > 0; i--){
    this._storage[this._len] = this._storage[this._len - 1];
  }
  this._storage[0] = value;
  this._len++;
};

queueMethods.dequeue = function(){
  if (this._len === 0){
    return null;
  }
  var result = this._storage[this._len - 1];
  this._len--;
  return result;
};

queueMethods.size = function(){
  return this._len;
};
