var makeDblLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var n = makeNode(value);
    if (this.head === null){
      // first node
      this.head = n;
    } else {
      // second or more nodes
      this.tail.next = n;
      n.previous = this.tail;
    }
    this.tail = n;
  };

  list.removeHead = function(){
    if (this.head === null){
      // do nothing if empty list
    }
    else if (this.head.next === null){
      // if one item in list
      this.head = null;
      this.tail = null;
    } else {
      // if more than one item in list
      this.head = this.head.next;
    }
  };

  list.contains = function(target, node){
    var testnode = node || this.head;
    while (target !== testnode.value && testnode !== this.tail){
      testnode = testnode.next;
    }
    return testnode.value === target;
  };

  list.addToHead = function(){

  };

  list.removeTail = function(){

  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};