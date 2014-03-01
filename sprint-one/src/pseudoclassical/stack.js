var Stack = function() {
  this.storage = {};
  this.len=0;
};

Stack.prototype.push = function(value){
  this.storage[this.len++]=value;
};

Stack.prototype.pop = function(){
  if (this.len===0){
    return null;
  }
  var result = this.storage[this.len-1];
  delete this.storage[this.len-1];
  this.len--;
  return result;
};

Stack.prototype.size = function(){
  return this.len;
};