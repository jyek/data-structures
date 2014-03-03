var BloomFilter = function(m, k){
	this._m = m || 18;
  this._k = k || 3;
	this._count = 0;
	this._storage = makeLimitedArray(this._m);
};

// Adds key to hash table
BloomFilter.prototype.add = function(v) {
  for (var i = 0; i < this._k; i++){
    var key = this.hash[i](v, this._m);
		this._storage.set(key, true);
	}
	this._count++;
}

// Checks if bloom filter contains key
BloomFilter.prototype.contains = function(v) {
	var allTrue = true;
	for (var i = 0; i < this._k; i++){
    var k = this.hash[i](v, this._m);
		if( this._storage.get(k) !== true){
      allTrue = false;
    }
	}
	return allTrue;
}

// Returns number of keys
BloomFilter.prototype.count = function(){
	return this._count;
}

// Hashing functions stored as hash[0], hash[1] and hash[2]
BloomFilter.prototype.hash = [];

// Java hash function
BloomFilter.prototype.hash[0] = function(v, m){
  var hash = 0;
  for (var i = 0; i < v.length; i++) {
    hash = (hash<<5) + hash + v.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % m;
};

// Fowler/Noll/Vo hashing
BloomFilter.prototype.hash[1] = function (v, m) {
  var n = v.length,
      a = 2166136261,
      c,
      d,
      i = -1;
  while (++i < n) {
    c = v.charCodeAt(i);
    if (d = c & 0xff000000) {
      a ^= d >> 24;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    if (d = c & 0xff0000) {
      a ^= d >> 16;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    if (d = c & 0xff00) {
      a ^= d >> 8;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    a ^= c & 0xff;
    a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
  }
  // From http://home.comcast.net/~bretm/hash/6.html
  a += a << 13;
  a ^= a >> 7;
  a += a << 3;
  a ^= a >> 17;
  a += a << 5;
  return a & 0xffffffff % m;
}

// One additional iteration of FNV hashing
BloomFilter.prototype.hash[2] = function (v, m) {
  var n = v.length,
      a = 2166136261,
      c,
      d,
      i = -1;
  while (++i < n) {
    c = v.charCodeAt(i);
    if (d = c & 0xff000000) {
      a ^= d >> 24;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    if (d = c & 0xff0000) {
      a ^= d >> 16;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    if (d = c & 0xff00) {
      a ^= d >> 8;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    a ^= c & 0xff;
    a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
  }
	// One additional iteration
  a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
  a += a << 13;
  a ^= a >> 7;
  a += a << 3;
  a ^= a >> 17;
  a += a << 5;
  return a & 0xffffffff % m;
}