// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Note: Setview method is on scale of 0-18
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level. (alternate method.
// useful for adding mult layers or background img)
    // let map = L.map("mapid", {
    //     center: [
    //       40.7, -94.5
    //     ],
    //     zoom: 4
    //   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// MAP STYLES:
// streets-v11 (which is same as outdoors-v11)
// light-v10
// dark-v10
// satellite-v9
// satellite-streets-v11