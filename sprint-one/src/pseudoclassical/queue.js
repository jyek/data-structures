var Queue = function() {
  this.instance = {};
  this.storage = {};
  this.len = 0;
};

Queue.prototype.enqueue = function(value){
  for (var i = this.len; i > 0; i--){
    this.storage[this.len]=this.storage[this.len-1];
  }
  this.storage[0] = value;
  this.len++;
};

Queue.prototype.dequeue = function(){
  if (this.len === 0){
    return null;
  }
  var result = this.storage[this.len - 1];
  this.len--;
  return result;
};

Queue.prototype.size = function(){
  return this.len;
};

