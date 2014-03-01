var Queue = function() {
  this.instance = {};
  this._storage = {};
  this._len = 0;
};

Queue.prototype.enqueue = function(value){
  for (var i = this._len; i > 0; i--){
    this._storage[this._len] = this._storage[this._len - 1];
  }
  this._storage[0] = value;
  this._len++;
};

Queue.prototype.dequeue = function(){
  if (this._len === 0){
    return null;
  }
  var result = this._storage[this._len - 1];
  this._len--;
  return result;
};

Queue.prototype.size = function(){
  return this._len;
};