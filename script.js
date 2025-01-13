//Number of vertices - which determines grid rows/columns
const V = 4;

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