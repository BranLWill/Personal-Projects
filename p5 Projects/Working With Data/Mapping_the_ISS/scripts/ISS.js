var apiURL = 'http://api.open-notify.org/iss-now.json';

var iss_location, pageISS, pageHeader, pageMap;
var startTime, time;

function ISS(updateTime) {
  startTime = updateTime; // 30 seconds in miliseconds
  time = startTime;
  this.location = {latitude: 0, longitude: 0};

  this.intervalSetup = function(iss, header, map) {
    pageISS = iss;
    pageHeader = header;
    pageMap = map;
    setInterval(pageISS.locationRequest, 1000);
  };

  this.locationRequest = function() {
    if(time == startTime) {console.log("Requesting location update...");}
    pageHeader.changeUpdateElement(time);
    time -= 1;

    pageISS.loadData();

    if (time == 0) {
      if (pageISS.dataLoaded()) {
        console.log("Data Loaded!");
        time = startTime;
        pageISS.displayData();
      }
    }
  };

  this.loadData = function() {
    loadJSON(apiURL, pageISS.setLocation);
  };

  this.setLocation = function(data) {
    pageISS.location.latitude = data.iss_position.latitude;
    pageISS.location.longitude = data.iss_position.longitude;
  };

  this.dataLoaded = function() {
    var result;
    if (pageISS.location.latitude != 0 || pageISS.location.longitude != 0) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  this.displayData = function() {
    iss_location = new Location(pageISS.location.latitude, pageISS.location.longitude);
    iss_location.update(pageMap.cx, pageMap.cy, pageMap);
  };
}
