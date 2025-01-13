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
const size = 5

//Creates an array of empty arrays
const adjList = Array.from({length: size},() => []);

function addListEdge(adjList, i, j) {
    adjList[i].push(j);
    adjList[j].push(i); //an undirected adjacency list
}

addListEdge(adjList, 0, 1);
addListEdge(adjList, 0, 2);
addListEdge(adjList, 1, 3);
addListEdge(adjList, 1, 4);
addListEdge(adjList, 2, 4);

console.log("Adjacency List:");
console.log(adjList);

function doBFS(adjList, start) {
    const visited = Array(size).fill(false);
    const queue = [];

    visited[start] = true;
    queue.push(start);

    while(queue.length) {
        //Dequeue a vertex from queue and print it
        const current = queue.shift();
        console.log(current);

        //Get all adjacent vertices of the dequeued vertex. If an adjacent has not been
        //visited, mark it visited and enqueue it
        for(const node of adjList[current]) {
            if(!visited[node]) {
                visited[node] = true;
                queue.push(node);
            }
        }
    }
}

console.log("BFS starting from 0:");
doBFS(adjList, 0);