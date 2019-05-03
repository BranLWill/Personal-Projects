var apiURL = 'http://api.open-notify.org/iss-now.json';
var apiKey = "AIzaSyAjnOrQHP--s287NIqTvBP6uonXhTyabOk";

var lat = 0;
var lng = 0;
var loc = lat + "," + lng;
var zoom = 4;
var tempFrame, mapURL;

function setup() {
  frameSetup();
  setInterval(askISS, 5000);
}

function frameSetup() {
  tempFrame = createElement("IFRAME");
  tempFrame.attribute("id", "map");
  document.getElementById('map').width = "1080";
  document.getElementById('map').height = "720";
  document.getElementById('map').allow = "fullscreen";
}

function askISS() {
  loadJSON(apiURL, gotData);
  if (dataLoaded()) {
    updateLocation();
  }
}

function dataLoaded() {
  var result;
  if (lat || lng) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function gotData(data) {
  lat = data.iss_position.latitude;
  lng = data.iss_position.longitude;
  loc = lat + "," + lng;
  if (dataLoaded()) {
    setLocation();
  }
}

function setLocation() {
  mapURL = "http://www.google.com/maps/embed/v1/place?key=" +
  apiKey + "&q=" + loc + "&zoom=" + zoom + "&maptype=satellite";
}

function updateLocation() {
  document.getElementById('map').src = mapURL;
}
