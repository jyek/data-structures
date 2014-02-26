var makeStack = function(){
  var instance = {};
  var storage = {};
  var size = 0;

  instance.push = function(value){
		storage[size++] = value;
  };

  instance.pop = function(){
		if(size > 0){
			var result = storage[--size];
			storage[size] = undefined;
			return result;
		}
  };

  instance.size = function(){
		return size;
  };

  return instance;
};