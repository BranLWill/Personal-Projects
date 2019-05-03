class Player {
  constructor(num, x, y) {
    this.number = num;
    this.x = x;
    this.y = y;
    this.name = "Player " + this.number;
    this.width = 10;
    this.height = 60;
    this.speed = 12;
    this.upKey;
    this.downKey;
    this.clr;
    this.score;
    this.hasWon = false;
  }
  set bodyColor(clr) {
    this.clr = clr;
  }
  get bodyColor() {
    return this.clr;
  }
  set points(score) {
    this.score = score;
  }
  get points() {
    return this.score;
  }
  set isWinner(hasWon) {
    this.hasWon = hasWon;
  }
  get isWinner() {
    return this.hasWon;
  }
  initPlayer() {
    this.points = 0;
    this.isWinner = false;
    if (this.number === 1) {
      this.clr = color("#33ccff");
    } else {
      this.x -= this.width;
      this.clr = color("#ff3333");
    }
  }
  move(width, height, gameBall) {
    if (this.number === 1) {
      this.upKey = 87;
      this.downKey = 83;
    } else {
      this.upKey = 38;
      this.downKey = 40;
    }
    if (keyIsDown(this.upKey)) {
      this.goUp();
    } else if (keyIsDown(this.downKey)) {
      this.goDown(height);
    }
  }
  goUp() {
    if (this.y > 0) {
      this.y -= this.speed;
    } else {
      console.log(this.name + " has won!");
      this.y = 0;
    }
  }
  goDown(height) {
    height -= 61;
    if (this.y < height) {
      this.y += this.speed;
    } else {
      this.y = height;
    }
  }
  checkIfWon() {
    if (this.points === 10) {
      this.isWinner = true;
    }
  }
  display() {
    fill(this.clr);
    stroke(0);
    strokeWeight(1);
    rect(this.x, this.y, this.width, this.height);
  }
}
