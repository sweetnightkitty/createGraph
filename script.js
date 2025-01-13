//Number of vertices - which determines grid rows/columns
const V = 4;

//Creates an empty V x V graph
let graph = Array.from({length: V}, ()=> Array(V).fill(0));

console.log(graph);