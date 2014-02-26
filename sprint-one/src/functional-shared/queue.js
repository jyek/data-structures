var makeQueue = function(){
	var makeQueue = function(){
	  var instance = {};
	  var storage = {};
		var size = 0;

	  instance.enqueue = queueMethods.enqueue;
	  instance.dequeue = queueMethods.dequeue;
		instance.size = queueMethods.size;

	  return instance;
	};
};

var queueMethods = {
	enqueue: function(value){
		storage[size++] = value;
	},
	dequeue: function(){
		if (size > 0){
			var result = storage[0];
			for (var i = 0; i < size-1; i++){
				storage[i] = storage[i+1];
			}
			size--;
			return result;
		}
  },
  size: function(){
		return size;
  };
};