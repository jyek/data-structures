var expect = chai.expect;
var assert = chai.assert;

describe("B-Tree", function() {
  var btree;

  beforeEach(function() {
    btree = new BTree(2);
    btree.add(10);
    btree.print();
  });

  it("should contain add, contains, count and 3 hash methods as well as a storage array", function() {
    expect(btree.add).to.be.a('function');
    expect(btree.contains).to.be.a('function');
    expect(btree.count).to.be.a('function');
    expect(btree.hash[0]).to.be.a('function');
    expect(btree.hash[1]).to.be.a('function');
    expect(btree.hash[2]).to.be.a('function');
  });

});
