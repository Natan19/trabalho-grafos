export class Vertex {
  public id: number;
  public weight?: number;
  public neighbours: Vertex[] = [];

  constructor(id: number) {
    this.id = id;
  }

  addNeighbours(neighbours: Vertex[]) {
    this.neighbours = [...this.neighbours, ...neighbours];
  }

}
