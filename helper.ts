import { Edge } from "./define.edge";
import { Graph } from "./define.graph";
import { Vertex } from "./define.vertex";

type VertexesWeight = {
  [id: string]: number;
};

enum Type {
  Eulerian = "Eulerian",
  SemiEulirian = "Semi-Eulerian",
  NotEulirian = "Not Eulerian",
}

export class GraphHelper {
  graph: Graph;
  vertexesWeights: VertexesWeight;
  type: Type;

  constructor(graph: Graph) {
    this.graph = graph;
    this.vertexesWeights = this.listVertexesWeights();
    this.type = this.checkType();
  }

  public checkType(): Type {
    if (this.isEulerian()) {
      return Type.Eulerian;
    }
    if (this.isSemiEulerian()) {
      return Type.SemiEulirian;
    }
    return Type.NotEulirian;
  }

  private isEulerian(): boolean {
    return Object.values(this.vertexesWeights).every(
      (weight) => weight % 2 === 0
    );
  }

  private isSemiEulerian(): boolean {
    return (
      Object.values(this.vertexesWeights).filter((weight) => weight % 2 != 0)
        .length == 2
    );
  }

  private listVertexesWeights(): VertexesWeight {
    const graphVertexes = this.graph.vertexes;
    const graphEdges = this.graph.edges;

    return graphVertexes.reduce((acc, vertex) => {
      return { ...acc, [vertex.id]: this.getVertextWeight(graphEdges, vertex) };
    }, {});
  }

  private getVertextWeight(edges: Edge[], vertex: Vertex): number {
    return edges.filter((edge) =>
      edge.vertexes.map((vertex) => vertex.id).includes(vertex.id)
    ).length;
  }
}
