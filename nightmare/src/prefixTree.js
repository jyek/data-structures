var PrefixTree = function (val){
  this.value = val || '';
  this.end = false;
  this.children = {};
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

PrefixTree.prototype.dictionary = function(prefix, result){
  result = result || [];
  prefix = prefix || '';
  prefix += this.value;
  for (key in this.children){
    if (this.children[key] !== undefined){
      var tree = this.children[key];
      tree.dictionary(prefix, result);
      if (tree.end) {
        result.push(prefix + tree.value);
      }
    }
  }
  return result;
}

PrefixTree.prototype.autocomplete = function(prefix){
  var result = [];

  var complete = function(word, tree){
    var i = 0;
    // get to the node w-o-r-d
    while (i < word.length){
      c = word[i].charCodeAt();
      if (tree.children[c] !== undefined){
        tree = tree.children[c];
      } else {
        return [];
      }
      i++;
    }
    // get words from dictionary and adds to result
    var partial = tree.dictionary( word.substr(0,word.length-1) );
    result = result.concat(partial);
    // if word is a word itself, include in results
    if (tree.end){
      result.push(word);
    }
  }

  if ( Array.isArray(prefix) ){
    // handles array of words (for T9 autocomplete)
    for (var j = 0; j < prefix.length; j++){
      tree = this;
      complete(prefix[j], this);
    }
  } else {
    // handles individual word
    complete(prefix, this);
  }

  return result;
}

PrefixTree.prototype.autocompleteT9 = function(input){
  var map = [
    ' ',      // 0
    ,         // 1
    'abc',    // 2
    'def',    // 3
    'ghi',    // 4
    'jkl',    // 5
    'mno',    // 6
    'pqrs',   // 7
    'tuv',    // 8
    'wxyz',   // 9
  ]
}