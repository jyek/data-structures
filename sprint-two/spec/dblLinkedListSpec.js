var expect = chai.expect;
var assert = chai.assert;

describe("doubleLinkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeDblLinkedList();
  });

  it("should have a head, tail and previous", function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it("should have methods named 'addToTail', 'removeHead', 'contains', 'addToHead' and 'removeTail'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should designate a new head when new nodes are added", function(){
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should remove the tail from the list when removeTail is called", function(){
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.removeHead();
    linkedList.removeTail();
    assert.isFalse(linkedList.contains(4));
    assert.isFalse(linkedList.contains(6));
    assert.isTrue(linkedList.contains(5));
  });
});
