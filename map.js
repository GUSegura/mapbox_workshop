// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = "pk.eyJ1Ijoic2VndWdlciIsImEiOiJjbDl3dHNwNDYwM3hlM3FwYzRnOTJuNWRkIn0.-ai62ZzSaQ2CUNN1Sq0H9Q"
// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/seguger/cl9wtywjo002o15s5r8nyp9uu/draft", //YOUR STYLE URL
  center: [-75.1652, 39.9526], // starting position [lng, lat]
  zoom: 12, // starting zoom
  projection: "globe", // display the map as a 3D globe
});

map.on("load", function () {
    map.addSource("flood", {
      type: "geojson",
      data: "./FEMA_100_flood_Plain.geojson",
    });
   
    // ADD A LAYER TO THE MAP
    map.addLayer({
      id: "flood",
      type: "fill",
      source: "flood",
      layout: {},
      paint: {
        "fill-color": "#00ffff",
        "fill-opacity": 0.5,
      },
    });
  });
