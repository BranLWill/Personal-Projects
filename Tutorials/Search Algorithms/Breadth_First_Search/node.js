class Node {

  constructor(val) {
    this.value = val;
    this.edges = [];
    this.searched = false;
    this.parent = null;
  }

  addEdge(neighbor) {
    this.edges.push(neighbor);
    // Both directions
    neighbor.edges.push(this);
  }
}
