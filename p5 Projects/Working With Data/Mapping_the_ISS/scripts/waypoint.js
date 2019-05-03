function Waypoint(x, y) {
  this.x = x;
  this.y = y;

  this.setColor = function(r, g, b) {
    this.color = {r: r, g: g, b: b};
  };

  this.display = function() {
    stroke(this.color.r, this.color.g, this.color.b);
    fill(this.color.r, this.color.g, this.color.b, 50);
    ellipse(this.x, this.y, 6, 6);
  };
}
