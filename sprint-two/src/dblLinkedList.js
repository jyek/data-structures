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

 list.addToHead = function(value){
    var n = makeNode(value);
    if (this.head === null){
      this.tail = n;
    } else {
      this.head.previous = n;
      n.next = this.head;
    }
    this.head = n;
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
      this.head.previous = null;
    }
  };

  list.removeTail = function(){
    if (this.tail === null){
      // do nothing if empty list
    }
    else if (this.tail.previous === null){
      // if one item in list
      this.tail = null;
      this.head = null;
    } else {
      // if more than one item in list
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
  };

  list.contains = function(target, node){
    var testnode = node || this.tail;
    while (target !== testnode.value && testnode !== this.head){
      testnode = testnode.previous;
    }
    return testnode.value === target;
  };

  return list;
};

/* to uncomment when testing for next
  list.contains = function(target, node){
    var testnode = node || this.head;
    while (target !== testnode.value && testnode !== this.tail){
      testnode = testnode.next;
    }
    return testnode.value === target;
  };

  return list;
};
*/

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};