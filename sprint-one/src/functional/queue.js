var makeQueue = function(){
  var instance = {};
  var storage = {};
  var size = 0;

  instance.enqueue = function(value){
    for (var i = size; i > 0; i--){
      storage[size]=storage[size - 1];
    }
    storage[0]=value;
    size++;
  };

  instance.dequeue = function(){
    if (size === 0){
      return null;
    }
    var result = storage[size - 1];
    size--;
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
