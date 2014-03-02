var expect = chai.expect;
var assert = chai.assert;

describe("prefixTree", function() {
  var trie;

  beforeEach(function() {
    trie = new PrefixTree('');
  });

  it("should have methods named 'contains', 'add', 'dictionary' and 'autocomplete'", function() {
    expect(trie.add).to.be.a('function');
    expect(trie.contains).to.be.a('function');
    expect(trie.dictionary).to.be.a('function');
  });

  it("should be able to add individual words", function() {
    trie.add('reactor');
    assert.isTrue(trie.contains('reactor'));
  });

  it("should be able to add array of words", function() {
    trie.add(['this','couch','is','blue']);
    assert.isTrue(trie.contains('this'));
    assert.isTrue(trie.contains('couch'));
    assert.isTrue(trie.contains('is'));
    assert.isTrue(trie.contains('blue'));
  });

  it("should not contain words not in dictionary", function() {
    trie.add('reactor');
    assert.isFalse(trie.contains('react'));
    assert.isFalse(trie.contains('notinthere'));
  });

  it("should have a dictionary that returns list of words in tree", function() {
    trie.add('reactor');
    trie.add('hack')
    var dict = trie.dictionary();
    assert.isTrue(dict.indexOf('hack') !== -1);
    assert.isTrue(dict.indexOf('reactor') !== -1);
  });

  it("should have an autocomplete function that takes the first part of a word and completes it", function() {
    trie.add(['butcher','blue','bat','blood','brat','battered','battle','battleship']);
    var result = trie.autocomplete('bat');
    assert.isTrue(result.indexOf('bat') !== -1);
    assert.isTrue(result.indexOf('battered') !== -1);
    assert.isTrue(result.indexOf('battle') !== -1);
    assert.isTrue(result.indexOf('battleship') !== -1);
  });
});