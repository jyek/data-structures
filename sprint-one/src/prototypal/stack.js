var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.len=0;
  return newStack;
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