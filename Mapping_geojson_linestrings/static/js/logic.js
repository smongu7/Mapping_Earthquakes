// Add console.log to check to see if our code is working.
console.log("working");

// Access airport geoJson URL
let airportData = "https://raw.githubusercontent.com/smongu7/Mapping_Earthquakes/main/majorAirports.json"


// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Access Toronto data
let torontoData = "https://raw.githubusercontent.com/smongu7/Mapping_Earthquakes/main/torontoRoutes.json"
// grab geojson data
d3.json(torontoData).then(function(data) {
  console.log(data);
  // create geojson layer w/ retrieved data
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
      + feature.properties.dst + "</h3>");
    }
  }).addTo(map);
});

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with a center, zoom level and default layer
// Note: Setview method is on scale of 0-18
let map = L.map('mapid', {
  center: [43.6487, -79.3854],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
//light.addTo(map);