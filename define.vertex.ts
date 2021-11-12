export class Vertex {
  id: number;
  neighbours: Vertex[];

  constructor(id: number) {
    this.id = id;
  }

  addNeighbours(neighbours: Vertex[]) {
    this.neighbours = [...this.neighbours, ...neighbours];
  }
}
