console.log("JS connected");

mapboxgl.accessToken = process.env.API_KEY;
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.060982, 42.35725],
  zoom: 18,
});
