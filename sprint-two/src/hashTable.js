var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storagePlace = this._storage.get(i);
  if ( Array.isArray(storagePlace) ){
    storagePlace.push([k,v]);
  } else {
    this._storage.set(i, [[k,v]]);
  }
  this._size++;
  if ( this._size > (0.75 * this._limit)){
    this.resize(2);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storagePlace = this._storage.get(i);
  if(storagePlace === undefined){
    return undefined;
  }
  for (var j = 0; j < storagePlace.length; j++){
    if (storagePlace[j][0] === k){
      return storagePlace[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storagePlace = this._storage.get(i);
  for (var j = 0; j < storagePlace.length; j++){
    if (storagePlace[j][0] === k){
      storagePlace.splice(j,1);
      this._size--;
      if ( this._size < (0.25 * this._limit)){
        this.resize(0.5);
      }
      return;
    }
  }
};

HashTable.prototype.resize = function(factor){
  var tempStorage = this._storage;
  this._limit = Math.floor(this._limit * factor);
  this._size = 0;
  var context = this;
  this._storage = makeLimitedArray(this._limit);
  tempStorage.each(function(arr){
    if ( arr !== undefined){
      for (var j =0; j < arr.length; j++){
        context.insert(arr[j][0], arr[j][1]);
      }
    }
  });
};