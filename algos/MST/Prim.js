// PRIM'S algorithm
// The idea behind Prim's algorithm is that you add vertices one vertex at a time.
// As I add an edge, I look at all
var Prims = function(graph, start) {
  var key = [];
  var parent = [];
  for(var i = 0; i <= graph.noOfVertices;i++) {
    key[i] = Infinity;
    parent[i] = i;
  }

  key[start] = 0;

  var mstSet = new Graph();
  mstSet.addVertex(start);

  while(mstSet.noOfVertices !== graph.noOfVertices) {
    current = key.indexOf(Math.min(...key));
    neighbors = graph.getEdge(current);
    key[current] = Infinity;
    // for(var i = 0; i < neighbors.length; i++) {
    //   edge = neighbors[i];
    //   vertex = edge[0];
    //   weight = edge[1];
    //   if(mstSet.vertexNotInList(vertex) && weight <= key[vertex]) {
    //     key[vertex] = weight;
    //     parent[vertex] = current;
    //   }
    // }

    neighbors.forEach(neighbor => {
      vertex = neighbor[0];
      weight = neighbor[1];
      if(mstSet.vertexNotInList(vertex) && weight <= key[vertex]) {
        key[vertex] = weight;
        parent[vertex] = current;
      }
    })
    
    // Once you've edited the key and parent with the new neighbors then you figure out what is the smallest so you can add it to the output graph.
    smallest = key.indexOf(Math.min(...key));
    mstSet.addEdge(parent[smallest],smallest, key[smallest]);
  }

  return mSet;
}

class Graph {
  constructor() {
    this.noOfVertices = 0;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.noOfVertices = this.noOfVertices + 1;
    this.AdjList.set(v, []);
  }

  vertexNotInList(v) {
    return !this.AdjList.has(v);
  }

  addEdge(v, w, weight) {
    if(!this.AdjList.has(v)) {
      this.addVertex(v);
    }

    if(!this.AdjList.has(w)) {
      this.addVertex(w);
    }

    this.AdjList.get(v).push([w, weight]);
    this.AdjList.get(w).push([v,weight]);
  }

  getEdge(v) {
    return this.AdjList.get(v);
  }

  printGraph() {
    var get_keys = this.AdjList.keys();

    for(var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = "";
      for(var j of get_values) {
        conc += j[0] + " ";
      }
      console.log(i + " -> " + conc);
    }
  }

  bfs(startingNode) {
    var visited = [];
    for(var i = 0; i < this.noOfVertices; i++) {
      visited[i] = false;
    }

    var q = [];

    visited[startingNode] = true;
    q.push(startingNode);

    while(q.length !== 0) {
      var currentElement = q.shift();
      console.log(currentElement);
      var get_list = this.AdjList.get(currentElement);
      for(var i in get_list) {
        var neigh = get_list[i];
        if(!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }

  dfs(startingNode) {
    var color = {};
    var startTime = {};
    var finishTime = {};
    var time = 0;


    for(var node of this.AdjList.keys()) {
      color[node] = 'white';
      startTime[node] = 0;
      finishTime[node] = 0;
    }

    for(var node of this.AdjList.keys()) {
      if(color[node] === 'white') {
        this.DFSUtil(node, color, startTime, finishTime, time)
      }
    }

  }

  DFSUtil(node, color, d, f, time) {
    console.log(node);
    color[node] = 'gray'
    time = time + 1;
    d[node] = time

    var get_neighbours = this.AdjList.get(node);

    for(var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if(color[get_elem] === 'white') {
        this.DFSUtil(get_elem, color, d, f, time);
      }
    }
    time = time + 1;
    color[node] = 'black'
    f[node] = time
  }
}

var g = new Graph();

g.addEdge(1,2,10)
g.addEdge(1,3,7)
g.addEdge(3,6,7)
g.addEdge(3,5,15)
g.addEdge(2,5,10)
g.addEdge(2,4,15)
g.addEdge(5,7,12)
g.addEdge(5,8,8)
g.addEdge(6,8,15)
g.addEdge(4,7,9)
g.addEdge(4,8,13)
g.addEdge(8,9,5)
g.addEdge(7,9,9)



Prims(g, 9)
