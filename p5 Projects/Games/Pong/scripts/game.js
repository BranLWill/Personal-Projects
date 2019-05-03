class Game {
  setupGame(width, height) {
    this.createGameContainer(width, height);
  }

  createGameContainer(width, height) {
    noCursor();
    createCanvas(width, height);
  }
  createLine(x1, y1, x2, y2) {
    stroke(255);
    strokeWeight(5);
    line(x1, y1, x2, y2);
  }
  createScoreBoard(x, y, width, height, player) {
    textAlign(CENTER, CENTER);
    textSize(80);
    fill(player.bodyColor);
    stroke(0);
    strokeWeight(2);
    text(player.points, x + 60, y + 45);

    noFill();
    stroke(255);
    strokeWeight(2);
    rect(x, y, width, height);
  }
  removePastMenu(menu) {
    menu.removeMenu();
  }
  removeMenu() {
    noCanvas(0,0);
  }
}
