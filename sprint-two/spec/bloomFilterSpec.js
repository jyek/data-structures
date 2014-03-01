var expect = chai.expect;
var assert = chai.assert;

describe("bloom filter", function() {
  var bf;

  beforeEach(function() {
    bf = new BloomFilter(10000, 3);
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
  });

  it("should return number of items", function(){
    bf.add('the');
    bf.add('quick');
    bf.add('brown');
    bf.add('fox');
    bf.add('jumps');
    brownf.add('over');
    assert(bf.count(),6);
  });  

  it("should have false positive of less than 10%", function() {
    var sample = 1000;
    var falsePos = 0;
    for (var i = 0; i < sample; i++){
      bf.add('i');
    }
    for (var i = 0; i < sample; i++){
      if ( bf.contains(sample+i) ){
        falsePos++;
      }
    }
    console.log(falsePos/sample);
    assert.isTrue(falsePos/sample < 0.1);
  });
});
