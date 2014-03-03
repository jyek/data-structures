var assert = chai.assert;

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTree.insert(9);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
    expectedArr = [5,2,3,9,7,10,12];
    expect(array.length).to.equal(expectedArr.length);
    for (var i = 0; i < array.length; i++){
      expect(array[i]).to.equal(expectedArr[i]);
    }
  });

  it("should execute a callback on every value in a tree using 'breadthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(9);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    expectedArr = [5,2,9,3,7,10,12];
    binarySearchTree.breadthFirstLog(func,undefined,undefined,true);
    console.log(array);
    for (var i = 0; i < array.length; i++){
      expect(array[i]).to.equal(expectedArr[i]);
    }
  });

  it("should rebalance when max depth / min depth > 2", function(){
    binarySearchTree.insert(9);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    binarySearchTree.rebalance();
    expect(binarySearchTree.value).to.equal(7);
    expect(binarySearchTree.left.value).to.equal(3);
    expect(binarySearchTree.left.left.value).to.equal(2);
    expect(binarySearchTree.left.right.value).to.equal(5);
    expect(binarySearchTree.right.value).to.equal(10);
    expect(binarySearchTree.right.left.value).to.equal(9);
    expect(binarySearchTree.right.right.value).to.equal(12);
  });
});
