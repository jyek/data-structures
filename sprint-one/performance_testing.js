// Variables
var i = 100000;
var n = 100;
var arr = [];

// Queue
for (var i = 0; i < i; i++){
  var myQueue = new Queue();
  arr.push(myQueue);

  for (var j = 0; j < n; j++){
    var r = Math.random();
    myQueue.enqueue(r);
    myQueue.size();
  }
  for (var j = 0; j < n; j++){
    myQueue.dequeue();
  }
}

// Stack
for (var i = 0; i< i; i++){
  var myStack = new Stack();
  arr.push(myStack);
  for (var j = 0; j < n; j++){
    var r = Math.random();
    myStack.push(r);
    myStack.size();
  }
  for (var j = 0; j < n; j++){
    myStack.pop();
  }
}