import { Edge } from "./define.edge";
import { Vertex } from "./define.vertex";

enum Type {
  Eulerian = "Eulerian",
  SemiEulirian = "Semi-Eulerian",
  NotEulirian = "Not Eulerian",
}

export class Graph {
  vertexes: Vertex[] = [];
  edges: Edge[] = [];

  constructor(vertexes: Vertex[], edges: Edge[]) {
    this.vertexes = vertexes;
    this.edges = edges;
    this.setVertexesWeight(vertexes);
  }

  public getType(): Type {
    if (this.isEulerian(this.vertexes)) {
      return Type.Eulerian;
    }
    if (this.isSemiEulerian(this.vertexes)) {
      return Type.SemiEulirian;
    }
    return Type.NotEulirian;
  }

  public addVertexes(vertexes: Vertex[]) {
    this.vertexes = [...this.vertexes, ...vertexes];
  }

  public addEdges(edges: Edge[]) {
    this.edges = [...this.edges, ...edges];
  }

  public getBeginningAndEndingVertexes(): Vertex[] {
    // To a semi eurilian graph, the beginning and ending vertexes are the ones that have a odd weight
    if(this.getType() !== Type.SemiEulirian) {
      throw new Error("Graph is not Semi-Eulerian");
    }
    return this.vertexes.filter((vertex) => {
    if(!vertex.weight) {
        throw new Error("Vertex weight is not defined");
      }
      return vertex.weight % 2 != 0
    })
  }

  public getPath(): Vertex[][] {
    const beginningAndEnding = this.getBeginningAndEndingVertexes();

    const paths: Vertex[][] = [];
    for (const vertex of beginningAndEnding) {
      const path = this.getPathFromVertex(vertex);
      if (path.length === this.vertexes.length) {
        paths.push(path);
      }
    }

    return paths;
 
  }

  private getPathFromVertex(vertex: Vertex): Vertex[] {
    const path: Vertex[] = [];
    let currentVertex = vertex;
    path.push(currentVertex);
    while(currentVertex.id !== vertex.id) {
      currentVertex = this.getNextVertex(currentVertex);
      path.push(currentVertex);
    }
    return path;
  }

  private getNextVertex(vertex: Vertex): Vertex {
    // return vertex.neighbours.find((neighbour: Vertex) => {
    //   return neighbour.weight! % 2 == 0 && neighbour.id !== vertex.id;
    // });
  }

  private setVertexesWeight(vertexes: Vertex[]): void {
    if(!this.edges || !this.edges.length) {
      throw new Error('Edges not setted yet')
    }

    vertexes.forEach(vertex => {
      vertex.weight = this.getVertextWeight(this.edges, vertex);
    })
  }

  private getVertextWeight(edges: Edge[], vertex: Vertex): number {
    // To each edge filter the vertexes and verify if include the vertex and return the lenght
    return edges.filter((edge) =>
      edge.vertexes.map((vertex) => vertex.id).includes(vertex.id)
    ).length;
  }

  private isEulerian = (vertexes: Vertex[]): boolean => {
    // A eurilian vertice need to have an even number of weight to every vertex
    return vertexes.map(vertex => vertex.weight!).every(
      (weight) => {
        weight % 2 === 0
      }
    );
  }
  
  private isSemiEulerian = (vertexes: Vertex[]): boolean => {
    // A semi eurilian vertice need to have in the maximum two vertex with an odd weight
    return vertexes.map(vertex => vertex.weight!).filter((weight) => weight % 2 != 0).length === 2
  }
  
}
