//Number of vertices - which determines grid rows/columns
const V = 4;

//----------------------------------------------------------------------
//UNDIRECTED GRAPH

//Creates an empty V x V graph
let graph = Array.from({length: V}, ()=> Array(V).fill(0));

//Creates an edge between two vertices a and b
function addEdge(graph, a, b) {
    graph[a][b] = 1;
    graph[b][a] = 1; // an undirected graph
}

addEdge(graph, 0, 1);
addEdge(graph, 0, 2);
addEdge(graph, 1, 2);
addEdge(graph, 2, 3);

console.log("Graph:")
console.log(graph);


//---------------------------------------------------------------------

//UNDIRECTED ADJACENCY LIST

//Creates an array of empty arrays
const adjList = Array.from({length: V},() => []);

function addListEdge(adjList, i, j) {
    adjList[i].push(j);
    adjList[j].push(i); //an undirected adjacency list
}

addListEdge(adjList, 0, 1);

console.log("Adjacency List:");
console.log(adjList);