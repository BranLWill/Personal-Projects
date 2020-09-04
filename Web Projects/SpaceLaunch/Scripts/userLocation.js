var lat = document.getElementById("userLatitude");
var lon = document.getElementById("userLongitude");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    alert("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    lat.Value = position.coords.latitude;
    lon.Value = position.coords.longitude;
}