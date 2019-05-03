function Header(startTime) {
  this.startTime = startTime;
  this.timeElm;

  this.create = function() {
    createElement("h1", "ISS Tracking in Real Time.");
    this.createUpdateElement();
  };

  this.createUpdateElement = function() {
    this.timeElm = createElement("p", "Update in " + this.time + " seconds.");
  };

  this.changeUpdateElement = function(timeRemain) {
    this.timeElm.html("Update in " + timeRemain + " seconds.");
  };
}
