var map_token = "sk.eyJ1IjoiYnJhbndpbGwiLCJhIjoiY2pwcmhqazNtMGRjeDQ5cXAxemN5cGN2biJ9.y9hDCfGtocR_Blz2sT8RhQ";

var iss, header, mainMap;
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

function preload() {
  iss = new ISS(30); // number in seconds
  header = new Header(iss.update_time);
  mainMap = new Map();

  mainMap.mapURL = "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/" +
  cloc + ", " + zoom + ", " + bearing + ", " + pitch + "/" + map_size + "?access_token=" + map_token;
  mapimg = mainMap.load();
}

function setup() {
  header.create();
  mainMap.setCenterPoint(0, 0);

  createCanvas(map_width, map_height);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  iss.intervalSetup(iss, header, mainMap);
}
