var Dijkstra = function(graph, start) {
  var outputGraph = new Graph();
  var vertices = graph.getAllVertices(); var visited = [];
  var previousNode = []; var shortestPath = [];

  vertices.forEach((vertex, i) => {
    shortestPath[i] = Infinity;
    previousNode[i] = null;
  })

  shortestPath[vertices.indexOf(start)] = 0;
  previousNode[vertices.indexOf(start)] = '-'

  while(visited.length !== vertices.length) {

    var indexOfVertex = findMinVertex(shortestPath, visited, vertices)
    var currentVertex = vertices[indexOfVertex]
    var weightOfCurrentVertex = shortestPath[indexOfVertex];

    var neighbors = graph.getEdge(currentVertex);

    neighbors.forEach(neighbor => {
      if(visited.indexOf(neighbor) == -1) {
        let endPoint = neighbor[0];
        let indexOfEndPoint = vertices.indexOf(endPoint);
        let weightOfEndPoint = weightOfCurrentVertex + neighbor[1];

        if(shortestPath[indexOfEndPoint] >  weightOfEndPoint){
          shortestPath[indexOfEndPoint] = weightOfEndPoint;
          previousNode[indexOfEndPoint] = currentVertex;
        }
      }
    })
    visited.push(currentVertex);
  }

  return {
    vertices,
    previousNode,
    shortestPath
  }
}

var findMinVertex = function(shortestPath, visited, vertices) {
  var currentMin = Infinity;
  var minIndex = null;
  for(var i = 0; i < shortestPath.length; i++) {
    if(shortestPath[i] <= currentMin && visited.indexOf(vertices[i]) == -1) {
      currentMin = shortestPath[i];
      minIndex = i;
    }
  }

  return minIndex;
}

class Graph {
  constructor() {
    this.noOfVertices = 0;
    this.noOfEdges = 0;
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
    this.noOfEdges = this.noOfEdges + 1;
  }

  getAllVertices() {
    return [...this.AdjList.keys()]
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
var a = 'a';
var b = 'b';
var c = 'c';
var d = 'd';
var e = 'e';
g.addEdge(a, b, 7);
g.addEdge(a, c, 3);
g.addEdge(c, b, 1);
g.addEdge(d, b, 2);
g.addEdge(c, d, 2);
g.addEdge(d, e, 4);
g.addEdge(b, e, 6);

console.log(Dijkstra(g, 'e'));
