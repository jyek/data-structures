var makeQueue = function(){
  var instance = {};
  instance.storage = {};
  instance.len = 0;
  _.extend(instance,queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  for (var i = this.len; i > 0; i--){
    this.storage[this.len]=this.storage[this.len-1];
  }
  this.storage[0] = value;
  this.len++;
};

queueMethods.dequeue = function(){
  if (this.len === 0){
    return null;
  }
  var result = this.storage[this.len - 1];
  this.len--;
  return result;
};

queueMethods.size = function(){
  return this.len;
};
