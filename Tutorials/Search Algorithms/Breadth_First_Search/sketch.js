let data;
let graph;
let dropdown;

function preload() {
  data = loadJSON('kevinbacon.json');
}

function setup() {
  graph = new Graph();
  dropdown = createSelect();
  dropdown.changed(bfs);
  noCanvas();
  //console.log(data);

  let movies = data.movies;

  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i].title;
    let cast = movies[i].cast;
    let movieNode = new Node(movie);
    graph.addNode(movieNode);

    for (let j = 0; j < cast.length; j++) {
      let actor = cast[j];
      let actorNode = graph.getNode(actor);
      if (actorNode == undefined) {
        actorNode = new Node(actor);
        dropdown.option(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    }
  }
}

function bfs() {
  graph.reset();
  let start = graph.setStart(dropdown.value());
  // let start = graph.setStart("Kevin Bacon");
  let end = graph.setEnd("Kevin Bacon");

  console.log(graph);

  let queue = [];

  start.searched = true;
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();
    if (current == end) {
      console.log("Found " + current.value);
      break;
    }
    let edges = current.edges;
    for (let i = 0; i < edges.length; i++) {
      let neighbor = edges[i];
      if (!neighbor.searched) {
        neighbor.searched = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }
    }
  }

  let path = [];
  path.push(end);
  let next = end.parent;
  while (next != null) {
    path.push(next);
    next = next.parent;
  }

  let txt = '';
  for (let i = path.length - 1; i >= 0; i--) {
    let n = path[i];
    txt += n.value
    if (i != 0) {
      txt += ' --> '
    };
  }
  createP(txt);
}
