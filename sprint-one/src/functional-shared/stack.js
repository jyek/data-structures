var makeStack = function(){
  var instance = {};
  var storage = {};
  var size = 0;
	
	// _.extend(instance, stackMethods);
	
	// instance.push = stackMethods.push;
	// instance.pop = stackMethods.pop;
	// instance.size = wrap(stackMethods.size, this);

  return instance;
};

var stackMethods = {
	push: function(value){
		this.storage[this.size++] = value;
  },
	pop: function(){
		if(this.size > 0){
			var this.result = this.storage[--this.size];
			this.storage[this.size] = undefined;
			return this.result;
		}
  },
	size: function(){
		return this.size;
  }
}

// tests
c = makeStack();
c.size();