class Graph {

  constructor() {
    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;
  }

  reset() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].searched = false;
      this.nodes[i].parent = null;
    }
  }

  setStart(actor) {
    this.start = this.graph[actor];
    return this.start;
  }

  setEnd(actor) {
    this.end = this.graph[actor];
    return this.end;
  }


  addNode(n) {
    // Node into array
    this.nodes.push(n);
    let title = n.value;
    // Node into "hash"
    this.graph[title] = n;
  }

  getNode(actor) {
    let n = this.graph[actor];
    return n;
  }
}
