// KRUSKAL'S ALGORITHM FOR MINIMUM SPANNING TREES
// Kruskal's algorithm is better for when the graph is sparse i.e. not that many edges less than n^2. Prim's algorithm is better when the grah is dense i.e. edges is more than n^2. 
// Kruskal's algorithm is actually pretty simple to understand. However, there are some intricacies that make it a bit complex, mainly recognizing for cycles.
// For starters, unlike Prim's algorithm, Kruskal's algorithm uses the edges of the graph to produce the Minimum Spanning Tree.
// For the algorithm you need the following:
// - a parent/leader array
// - an output array
// - a subset object
// First you need to sort the edges in ascending order. Then you go through each edge, adding it to an output array. Before you add the edge to an array you need to make sure that no cycles are formed. As you add an edge to the array, the algorithm forms subsets of vertices that are connected by the edges you've added. You choose a vertex to be labeled as the leader so that you can connect

var Edge = function(startVertex, endVertex, weight) {
  this.startVertex = startVertex;
  this.endVertex = endVertex;
  this.weight = weight;
}
var oneToTwo = new Edge(1, 2, 10);
var oneToThree = new Edge(1, 3, 7);
var twoToFive = new Edge(2, 5, 10);
var twoToFour = new Edge(2, 4, 15);
var threeToFive = new Edge(3, 5, 15)
var threeToSix = new Edge(3, 6, 7);
var fourToSeven = new Edge(4, 7, 9);
var fourToEight = new Edge(4, 8, 13);
var fiveToEight = new Edge(5, 8, 8);
var fiveToSeven = new Edge(5, 7, 12);
var sixToEight = new Edge(6, 8, 15);
var sevenToNine = new Edge(7, 9, 9);
var eightToNine = new Edge(8, 9, 5);

var graph = {
  '1': [oneToTwo, oneToThree],
  '2': [twoToFour, twoToFive],
  '3': [threeToFive, threeToSix],
  '4': [fourToSeven, fourToEight],
  '5': [fiveToSeven, fiveToEight],
  '6': [sixToEight],
  '7': [sevenToNine],
  '8': [eightToNine],
}

var sortEdges = function(graph) {
  edgesArray = [];
  for(var i in graph) {
    edgesArray = [...edgesArray, ...graph[i]];
  }
  return qSort(edgesArray)
}

var qSort = function(input) {
  qSortUtil(input, 0, input.length - 1);
  return input;
}

var qSortUtil = function(input, start, end) {
  if(start < end) {
    var p = partition(input, start, end);
    qSortUtil(input, start, p - 1);
    qSortUtil(input, p + 1, end);
  }
}

var partition = function(input, start, end) {
  var pivot = input[start].weight;
  swap(input,start, end);
  indexOfLastLessThanNum = start;
  for(var i = start; i < end; i++) {
    if(input[i].weight <= pivot) {
      swap(input, indexOfLastLessThanNum, i);
      indexOfLastLessThanNum++;
    }
  }

  swap(input, indexOfLastLessThanNum, end);
  return indexOfLastLessThanNum
}

var swap = function(array, i , j) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

var isNotCycle = function(v, w, parent) {
  return parent[v] !== parent[w];
}

var combineSubsets = function(greater, lesser, subsets, parent) {
  lesserChildren = subsets[lesser];
  subsets[greater] = [...subsets[greater], ...lesserChildren];
  for(var i = 0; i < lesserChildren.length; i++) {
    parent[lesserChildren[i]] = greater;
  }
  delete subsets[lesser];
}

var union = function(v, w, parent, subsets) {
  var vSize = subsets[parent[v]].length;
  var wSize = subsets[parent[w]].length;
  if(vSize >= wSize) {
    combineSubsets(parent[v], parent[w], subsets, parent);
  } else {
    combineSubsets(parent[w], parent[v], subsets, parent,);
  }
}

var kruskalsAlgo = function(graph, noOfVertices) {
  var parent = new Array(9);
  var output = [];
  var subSets = {};
  var index = 0;

  for(var i = 0; i <= noOfVertices; i++) {
    parent[i] = i;
    subSets[i] = [i];
  }

  while(Object.keys(subSets).length > 2) {

    currentEdge = graph[index];
    console.log(currentEdge)
    console.log(index)
    startV = currentEdge.startVertex;
    endV = currentEdge.endVertex;
    weight = currentEdge.weight;
    if(isNotCycle(startV, endV, parent)) {
      union(startV, endV, parent, subSets)
      output.push(currentEdge);
    }
    index++

  }
  return output;
}

console.log(kruskalsAlgo(sortEdges(graph), 9));
