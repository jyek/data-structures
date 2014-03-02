var PrefixTree = function (val){
  this.value = val || '';
  this.end = false;
  this.children = [];
}

// check if tree contains property
PrefixTree.prototype.contains = function(word){
  var i = 0;
  var tree = this;
  while (i < word.length){
    var c = word[i];
    var k = c.charCodeAt();
    if (tree.children[k] !== undefined){
      tree = tree.children[k];
    } else {
      return false;
    }
    // if last character, make sure it is end of word
    if (i === word.length-1 && !tree.end){
      return false;
    }
    i++;
  }
  return true;
}

// adds word or array of words to tree
PrefixTree.prototype.add = function(wordOrArr){
  if ( Array.isArray(wordOrArr) ){
    // array
    for (var i = 0; i < wordOrArr.length; i++){
      this.addWord(wordOrArr[i]);
    }
  } else {
    // string
    this.addWord(wordOrArr);
  }
}

// adds word to tree
PrefixTree.prototype.addWord = function(word){
  var i = 0;
  var tree = this;
  // traverse word
  while (i < word.length){
    var c = word[i];
    if(tree.children[c.charCodeAt()] === undefined){
      tree.children[c.charCodeAt()] = new PrefixTree(c);
    }
    tree = tree.children[c.charCodeAt()];
    if (i === word.length - 1){
      tree.end = true;
    }
    i++;
  }
}

PrefixTree.prototype.dictionary = function(prefix){
  prefix = prefix || '';
  prefix += this.value;
  for (var i = 0; i < this.children.length; i++){
    if (this.children[i] !== undefined){
      var tree = this.children[i];
      tree.dictionary(prefix);
      if (tree.end) {
        console.log(prefix + tree.value);
      }
    }
  }
}

PrefixTree.prototype.autocomplete = function(word, tree){
  var c = word[0];
  var next = word.substr(1);
  var tree = this.children[c.charCodeAt()];
  if (next === ''){
    tree.dictionary();
  } else {
    tree.autocomplete(next, tree);
  }
}