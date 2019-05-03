var map_token = "sk.eyJ1IjoiYnJhbndpbGwiLCJhIjoiY2pwcmhqazNtMGRjeDQ5cXAxemN5cGN2biJ9.y9hDCfGtocR_Blz2sT8RhQ";
var mapimg;

var clat = 0;
var clon = 0;
var cloc = clat + "," + clon;

var zoom = 1;
var bearing = 0;
var pitch = 0;

var map_width = 1024;
var map_height = 512;
var map_size = map_width + "x" + map_height;

var earthquakes, cx, cy, lat, lon, elon, elat, emag, is_beginning;

function preload() {
  is_beginning = true;
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/" +
  cloc + ", " + zoom + ", " + bearing + ", " + pitch + "/" + map_size + "?access_token=" + map_token);
  earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv");
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function earthquakeSetup() {
  is_beginning = false;

  for (var i = 0; i < earthquakes.length; i++) {
    var data = earthquakes[i].split(/,/);
    //console.log(data);
    elat = data[1];
    elon = data[2];
    emag = data[4];

    update(elat, elon, emag);
  }
}

function update(lat, lon, mag) {
  console.log("UPDATED");
  var x = mercX(lon) - cx;
  var y = mercY(lat) - cy;

  mag = pow(10, mag);
  mag = sqrt(mag);

  var magmax = sqrt(pow(10, 10))

  var d = map(mag, 0, magmax, 0, 400);

  stroke(255, 0, 255);
  fill(255, 0, 255, 50);
  ellipse(x, y, d, d);
}

function setup() {
  createCanvas(map_width, map_height);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  cx = mercX(clon);
  cy = mercY(clat);

  if (is_beginning) {
    earthquakeSetup();
  }
  setInterval(earthquakeSetup(), 900000);
}
