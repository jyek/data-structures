/* Graph object */
var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

/* Node object */
var Node = function(val){
	this.value = val;
}

/* Edge object */
var Edge = function(from,to){
	this.from = from;
	this.to = to;
}

/* Adds and returns node */
Graph.prototype.addNode = function(val){
	var n = new Node(val);
	this.nodes.push(n);
	
	// if only node, add edge
	if (this.nodes.length === 2){
		for (var i = 0; i < this.nodes.length; i++){
			this.addEdge(this.nodes[i].value,n.value);
			return n;
		}
	}
	return n;	
};

/* Gets and returns node, returns null if not found */
Graph.prototype.getNode = function(val){
	for (var i = 0; i < this.nodes.length; i++){
		var node = this.nodes[i]; 
		if (node.value === val){
			return node;
		}
	}
	return null;
}

/* Returns true if node exists */
Graph.prototype.contains = function(node){
	for (var i = 0; i < this.nodes.length; i++){
		if (this.nodes[i].value === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	// remove node
	for (var i = 0; i < this.nodes.length; i++){
		if (this.nodes[i].value === node){
			this.nodes.splice(i,1);
			this.nodeCount--;
		}
	}
	
	// remove all edges with node
	for (var i = 0; i < this.edges.length; i++){
		var edge = this.edges[i];
		if (edge.from.value === node || edge.to.value === node){
			this.edges.splice(i,1);
			this.edgeCount--;
		}
	}
};

Graph.prototype.getEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges.length; i++){
		var edge = this.edges[i]; 
		if (fromNode === edge.from.value && toNode === edge.to.value){
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var from = this.getNode(fromNode);
	var to = this.getNode(toNode);
	
	// create nodes if missing
	if (from === null){
		from = this.addNode(fromNode);
	}
	if (to === null){
		to = this.addNode(toNode);
	}
	
	// create edge
	if (from !== null && to !== null){
		var e = new Edge(from, to);
		this.edges.push(e);
		this.edgeCount++;
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges.length; i++){
		var edge = this.edges[i]; 
		if (fromNode === edge.from.value && toNode === edge.to.value){
			this.edges.splice(i,1);
			this.edgeCount--;
		}
	}	
	this.removeUnlinkedNodes();
};

Graph.prototype.removeUnlinkedNodes = function(){
	// for all nodes
	for (var i = this.nodes.length - 1; i >= 0; i--){
		var node = this.nodes[i];
		
		// check if any edges
		var linked = false;
		for (var j = 0; j < this.edges.length; j++){
			var edge = this.edges[j];
			if (edge.from.value === node.value || edge.to.value === node.value){
				linked = true;
			}
		}
		
		// if not linked, remove node
		if (!linked){
			this.nodes.splice(i,1);
		}
	}
}