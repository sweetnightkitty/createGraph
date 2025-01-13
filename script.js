//Number of vertices - which determines grid rows/columns
const V = 4;

//Creates an empty V x V graph
let graph = Array.from({length: V}, ()=> Array(V).fill(0));

//Creates an edge between two vertices a and b
function addEdge(graph, a, b) {
    graph[a][b] = 1;
    graph[b][a] = 1; // an undirected graph
}

