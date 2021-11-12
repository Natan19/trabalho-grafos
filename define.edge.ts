import { Vertex } from "./define.vertex";

export class Edge {
  vertexes: Vertex[] = [];

  constructor(vertexes: Vertex[]) {
    if (vertexes.length > 2 || vertexes.length < 2) {
      console.log("Edges can only associate two vertexes.");
      return;
    }
    this.vertexes = vertexes;
  }
}
