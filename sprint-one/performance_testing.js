var makeIterations = 100000;
var queueIterations = 100;
var container = [];

// Queue
for ( var i = 0; i < makeIterations; i++){
  var myQueue = new Queue();//makeQueue();
  container.push(myQueue);

  for (var j = 0; j < queueIterations; j++){
    var r = Math.random();
    myQueue.enqueue(r);
    myQueue.size();
  }
  for (var j = 0; j < queueIterations; j++){
    myQueue.dequeue();
  }
}

// Stack
for ( var i = 0; i< makeIterations; i++){
  var myStack = new Stack(); //makeStack();
  container.push(myStack);
  for (var j = 0; j<queueIterations; j++){
    var r = Math.random();
    myStack.push(r);
    myStack.size();
  }
  for (var j = 0; j<queueIterations; j++){
    myStack.pop();
  }
}

alert("Done");