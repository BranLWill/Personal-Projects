class AI {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.name = "The Computer";
    this.width = 10;
    this.height = 60;
    this.speed = 12;
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
    this.score = 0;
    this.isWinner = false;
    this.clr = color("#ff3333");
  }
  move(width, height, gameBall) {
    if (gameBall.xpos >= width / 2) {
      if (gameBall.ypos < this.y) {
        this.goUp();
      } else if (gameBall.ypos >= this.y + this.height) {
        this.goDown(height);
      }
    } else if (this.y < height / 2) {
      this.goDown(height);
    } else if (this.y > height / 2) {
      this.goUp();
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
