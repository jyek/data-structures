var makeStack = function(){
  var instance = {};
  instance.storage = {};
  instance.len=0;
  _.extend(instance,stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.len++]=value;
};

stackMethods.pop = function(){
  if (this.len===0){
    return null;
  }
  var result = this.storage[this.len-1];
  delete this.storage[this.len-1];
  this.len--;
  return result;
};

stackMethods.size = function(){
  return this.len;
};