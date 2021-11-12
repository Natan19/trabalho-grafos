import { Vertex } from "./define.vertex";

export class Edge {
  vertexes: Vertex[] = [];

  constructor(vertexes: Vertex[]) {
    if (vertexes.length > 2 || vertexes.length < 2) {
      console.log("Edges can only associate two vertexes.");
      return;
    }
    this.vertexes = vertexes;
    this.updateVertexesNeighbours(vertexes);
  }

  private updateVertexesNeighbours(vertexes: Vertex[]) {
    vertexes[0].addNeighbours([vertexes[1]]);
    vertexes[1].addNeighbours([vertexes[0]]);
  }
}
