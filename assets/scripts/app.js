console.log("JS connected");

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FsZWVkcmVobWFuIiwiYSI6ImNrY3Z0ZGdncjA3aHIyeGxsdGd0OXM1cGcifQ.hStOJ9cbMFVmLpg7rrjcRw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.060982, 42.35725],
  zoom: 18,
});
