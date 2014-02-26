var makeQueue = function(){
  var instance = {};
  var storage = {};
	var size = 0;

  instance.enqueue = function(value){
		storage[size++] = value;
  };

  instance.dequeue = function(){
		if (size > 0){
			var result = storage[0];
			for (var i = 0; i < size-1; i++){
				storage[i] = storage[i+1];
			}
			size--;
			return result;
		}
  };

  instance.size = function(){
		return size;
  };

  return instance;
};
