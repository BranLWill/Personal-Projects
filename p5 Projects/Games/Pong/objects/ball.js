class Ball {
  constructor(x, y, playerOne, playerTwo) {
    this.rad = 10;
    this.xpos = x;
    this.ypos = y;
    this.xspeed = 8.8;
    this.yspeed = 8.2;
    this.xdirection;
    this.ydirection;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.randDirX;
    this.randDirY;
    this.clr = color(255);
    this.moveCount = 0;
  }
  set bodyColor(clr) {
    this.clr = clr;
  }
  set randomDirection(val) {
    this.xDirection = random(-val, val);
    this.yDirection = random(-val, val);
  }
  set xDirection(xDir) {
    if (xDir < 0.5 && xDir > 0) {
      this.xdirection = 0.5;
    } else if (xDir > -0.5 && xDir < 0) {
      this.xdirection = -0.5;
    } else {
      this.xdirection = xDir;
    }
  }
  set yDirection(yDir) {
    if (yDir < 0.5 && yDir > 0) {
      this.ydirection = 0.5;
    } else if (yDir > -0.5 && yDir < 0) {
      this.ydirection = -0.5;
    } else {
      this.ydirection = yDir;
    }
  }
  move(width, height) {
    this.moveCount++;
    if (this.moveCount === 1) {
      this.randomDirection = 1;
    }

    this.xpos = this.xpos + this.xspeed * this.xdirection;
    this.ypos = this.ypos + this.yspeed * this.ydirection;

    if (this.ypos > height - this.rad || this.ypos < this.rad) {
      this.wallBounce();
    } else if (this.xpos > width - this.rad) {
      this.goalBounce(width, height, this.playerOne);
    } else if (this.xpos < this.rad) {
      this.goalBounce(width, height, this.playerTwo);
    } else if (this.checkForCollision(1, this.playerOne)) {
      this.playerBounce();
    } else if (this.checkForCollision(2, this.playerTwo)) {
      this.playerBounce();
    }
  }
  checkForCollision(num, player) {
    if (num === 1) {
      if (this.xpos < player.x + player.width / 2 + this.rad && this.xpos > player.x - player.width / 2) {
        if (this.ypos <= player.y + player.height) {
          if (this.ypos >= player.y) {
            return true;
          }
        }
      }
      return false;
    } else if (num === 2) {
      if (this.xpos > player.x - player.width / 2 - this.rad && this.xpos > player.x + player.width / 2) {
        if (this.ypos <= player.y + player.height) {
          if (this.ypos >= player.y) {
            return true;
          }
        }
      }
      return false;
    }
  }
  wallBounce() {
    this.ydirection *= -1;
  }
  goalBounce(width, height, player) {
    this.xdirection *= -1;
    player.points += 1;
    this.xspeed = 9.8;
    this.yspeed = 9.2;
    this.xpos = width / 2;
    this.ypos = height / 2;
    this.moveCount = 0;
  }
  playerBounce() {
    this.xdirection *= -1;
    this.xspeed += 0.25;
    this.yspeed += 0.25;
  }
  display() {
    ellipseMode(RADIUS);
    fill(this.clr);
    stroke(0);
    strokeWeight(1);
    ellipse(this.xpos, this.ypos, this.rad);
  }
}
