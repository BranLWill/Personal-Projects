var waypoints = [];
var idx = 0;

function Location(lat, lon) {
  this.latitude = lat;
  this.longitude = lon;

  this.update = function(cx, cy, pageMap) {
    console.log("Location Updated to " + this.latitude + ", " + this.longitude + "!");
    var x = pageMap.mercX(this.longitude) - cx;
    var y = pageMap.mercY(this.latitude) - cy;

    waypoints.push(new Waypoint(x, y));
    waypoints[idx].setColor(0, 255, 0);
    waypoints[idx].display();

    if (idx == 1) {
      waypoints[idx - 1].setColor(255, 0, 255);
      waypoints[idx - 1].display();
      idx++;
    } else if (idx > 1) {
      waypoints[idx - 1].setColor(255, 0, 255);
      waypoints[idx - 1].display();
      waypoints.shift();
      idx = 2;
    } else {
      idx++;
    }
  };
}
