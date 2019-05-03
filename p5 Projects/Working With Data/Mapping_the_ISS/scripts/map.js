
function Map() {
  this.mapURL = "";
  this.cx = 0;
  this.cy = 0;

  this.load = function() {
    return loadImage(this.mapURL);
  };

  this.setCenterPoint = function(lat, lon) {
    this.cx = this.mercX(lon);
    this.cy = this.mercY(lat);
  };

  this.mercX = function(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
  };

  this.mercY = function(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
  };
}
