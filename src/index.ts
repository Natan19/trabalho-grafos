import { Edge } from "./define.edge";
import { Graph } from "./define.graph";
import { Vertex } from "./define.vertex";

// Semi-Euleriano
const semiVertex1 = new Vertex(1);
const semiVertex2 = new Vertex(2);
const semiVertex3 = new Vertex(3);
const semiVertex4 = new Vertex(4);
const semiEdge1 = new Edge([semiVertex1, semiVertex2]);
const semiEdge2 = new Edge([semiVertex2, semiVertex3]);
const semiEdge3 = new Edge([semiVertex3, semiVertex4]);
const semiEdge4 = new Edge([semiVertex4, semiVertex1]);
const semiEdge5 = new Edge([semiVertex1, semiVertex3]);

const semiEulerian = new Graph([semiVertex1, semiVertex2, semiVertex3, semiVertex4], [semiEdge1, semiEdge2, semiEdge3, semiEdge4, semiEdge5]);

console.log("First graph is: " + semiEulerian.getType());
console.log("Beginning and End vertexes", semiEulerian.getBeginningAndEndingVertexes());
 
// Euleriano
const vertexes: Vertex[] = [];

for (let index = 0; index < 6; index++) {
  vertexes.push(new Vertex(index));
}

const edges: Edge[] = [];

edges.push(new Edge([vertexes[0], vertexes[1]]));
edges.push(new Edge([vertexes[1], vertexes[2]]));
edges.push(new Edge([vertexes[2], vertexes[3]]));
edges.push(new Edge([vertexes[3], vertexes[4]]));
edges.push(new Edge([vertexes[4], vertexes[2]]));
edges.push(new Edge([vertexes[2], vertexes[5]]));
edges.push(new Edge([vertexes[5], vertexes[0]]));

const eulerian = new Graph(vertexes, edges);
console.log("Second graph is: " + eulerian.getType());

