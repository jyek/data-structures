var expect = chai.expect;
var assert = chai.assert;

describe("bloomFilter", function() {
  var bf;

  beforeEach(function() {
    bf = new BloomFilter(100, 3);
  });

  it("should contain add, contains, count and 3 hash methods as well as a storage array", function() {
    expect(bf.add).to.be.a('function');
    expect(bf.contains).to.be.a('function');
    expect(bf.count).to.be.a('function');
    expect(bf.hash[0]).to.be.a('function');
    expect(bf.hash[1]).to.be.a('function');
    expect(bf.hash[2]).to.be.a('function');
  });

  it("should add items and indicate that they exist", function(){
    bf.add('the');
    bf.add('quick');
    bf.add('brown');
    bf.add('fox');
    bf.add('lazy');
    bf.add('dog');
    assert.isTrue(bf.contains('the'));
    assert.isTrue(bf.contains('quick'));
    assert.isTrue(bf.contains('brown'));
    assert.isTrue(bf.contains('fox'));
    assert.isFalse(bf.contains('superman'));
    assert.isFalse(bf.contains('func'));
  });

  it("should return number of items", function(){
    bf.add('the');
    bf.add('quick');
    bf.add('brown');
    bf.add('fox');
    bf.add('jumps');
    bf.add('over');
    assert(bf.count(),6);
  });

  it("should have false positive of less than 10%", function() {
    var sample = 12;
    var falsePos = 0;
    var letters = 'abcdefghijklmnopqrstuvwxyz'

    var generateWord = function(letters, len){
      var word = '';
      var l = letters.length;
      for (var i = 0; i < len; i++){
        var idx = Math.floor(Math.random() * l);
        word += letters[idx];
      }
      return word;
    }

    // generate words to add
    for (var i = 0; i < sample; i++){
      bf.add( generateWord(letters, 3) );
    }

    // generate words that should not exist
    for (var i = 0; i < sample; i++){
      if ( bf.contains( generateWord(letters, 6) ) ){
        falsePos++;
      }
    }
    console.log('False positive: ',falsePos/sample);
    assert.isTrue(falsePos/sample < 0.1);
  });
});
