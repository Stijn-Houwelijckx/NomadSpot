let location_compass_btn = document.querySelector("#location-compass-btn");
let myLat;
let myLng;

navigator.geolocation.watchPosition(LocationSuccess, LocationError);

let userMarker;
let userCirlce;

let zoomed;

const myIconUrl = "../assets/images/Logo_Favicon.svg";

// var testData = {
//   max: 8,
//   data: [
//     { lat: -8.357496757463217, lng: 115.3046605987023, count: 1 },
//     { lat: 50.75, lng: -1.55, count: 1 },
//   ],
// };

// var cfg = {
//   // radius should be small ONLY if scaleRadius is true (or small radius is intended)
//   // if scaleRadius is false it will be the constant radius used in pixels
//   radius: 0.05,
//   maxOpacity: 0.2,
//   // scales the radius based on map zoom
//   scaleRadius: true,
//   // if set to false the heatmap uses the global maximum for colorization
//   // if activated: uses the data maximum within the current map boundaries
//   //   (there will always be a red spot with useLocalExtremas true)
//   useLocalExtrema: true,
//   // which field name in your data represents the latitude - default "lat"
//   latField: "lat",
//   // which field name in your data represents the longitude - default "lng"
//   lngField: "lng",
//   // which field name in your data represents the data value - default "value"
//   valueField: "count",
// };

// var heatmapLayer = new HeatmapOverlay(cfg);

var myLocationPin = L.icon({
  iconUrl: myIconUrl,

  iconSize: [38, 95], // size of the icon
  iconAnchor: [18, 60], // point of the icon which will correspond to marker's location
});

function LocationSuccess(pos) {
  myLat = pos.coords.latitude;
  myLng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;

  if (userMarker) {
    map.removeLayer(userMarker);
    map.removeLayer(userCirlce);
  }

  userMarker = L.marker([myLat, myLng], { icon: myLocationPin }).addTo(map);
  userCirlce = L.circle([myLat, myLng], { radius: accuracy }).addTo(map);

  if (!zoomed) {
    zoomed = map.fitBounds(userCirlce.getBounds());
  }

  userCirlce.setStyle({ color: "hsl(32, 99%, 50%)" });
}

function LocationError(err) {
  if (err.code === 1) {
    alert("Please allow geolocation access");
  } else {
    alert("Cannot get current location");
  }
}

var mapOptions = {
  center: [-8.624255, 115.199887],
  zoom: 11,
  zoomControl: false,
  // layers: [heatmapLayer],

  maxBounds: bounds,
  maxBoundsViscosity: 1.0,
};

var map = L.map("map", mapOptions);

// heatmapLayer.setData(testData);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 2,
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

location_compass_btn.addEventListener("click", function (e) {
  map.setView([myLat, myLng], map.getZoom(), {
    animate: true,
    pan: {
      duration: 1,
    },
  });
});

var southWest = L.latLng(-89.98155760646617, -180),
  northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);
map.setMaxBounds(bounds);
map.on("drag", function () {
  map.panInsideBounds(bounds, { animate: false });
});
