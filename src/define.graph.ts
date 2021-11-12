import { Vertex } from "./define.vertex";
import { Edge } from "./define.edge";

export class Graph {
  maxVertexes: number;
  vertexes: Vertex[] = [];
  edges: Edge[] = [];

  constructor(maxVertexes: number) {
    this.maxVertexes = maxVertexes;
  }

  addVertexes(vertexes: Vertex[]) {
    if (this.vertexes.length > this.maxVertexes) {
      console.log("Graph has reached its limit of vertexes");
      return;
    }
    if (this.vertexes.length + vertexes.length > this.maxVertexes) {
      console.log("Cannot add vertexes, as it would surpass de vertex limit.");
      return;
    }
    this.vertexes = [...this.vertexes, ...vertexes];
  }

  addEdges(edges: Edge[]) {
    if (this.edges.length >= this.getMaxNumberOfEdges()) {
      console.log("Maximum number of edges reached.");
      return;
    }

    if (this.edges.length + edges.length >= this.getMaxNumberOfEdges()) {
      console.log(
        `Cannot add this many edges, as it would surpass the maximum limit.`
      );
      return;
    }

    this.edges = [...this.edges, ...edges];
  }

  private getMaxNumberOfEdges() {
    return this.maxVertexes * (this.maxVertexes - 1);
  }
}
