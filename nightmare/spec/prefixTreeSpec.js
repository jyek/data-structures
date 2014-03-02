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

it("should contain words that are added to dictionary", function() {
    trie.add('reactor');
    assert.isTrue(trie.contains('reactor'));
  });

  it("should not contain words not in dictionary", function() {
    trie.add('reactor');
    assert.isFalse(trie.contains('react'));
    assert.isFalse(trie.contains('notinthere'));
  });

  it("should also take array as input for add", function() {
    trie.add(['this','couch','is','blue']);
    assert.isTrue(trie.contains('this'));
    assert.isTrue(trie.contains('couch'));
    assert.isTrue(trie.contains('is'));
    assert.isTrue(trie.contains('blue'));
  });

  it("should have an autocomplete function", function() {
    trie.add(['butcher','blue','bat','blood','brat','battered','battle','battleship']);
    trie.autocomplete('bat');
  });

});
