// Add console.log to check to see if our code is working.
console.log("working");

// Access toronto geoJson URL
let torontoHoods = "https://raw.githubusercontent.com/smongu7/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Create line style
let myLine = {
  color: "#2e41f1",
  weight: 1
}

// grab geojson data
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  // create geojson layer w/ retrieved data
  L.geoJson(data, {
    style: myLine,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
      + feature.properties.dst + "</h3>");
    }
  }).addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with a center, zoom level and default layer
// Note: Setview method is on scale of 0-18
let map = L.map('mapid', {
  center: [43.6487, -79.3854],
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);