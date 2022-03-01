/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXNocmFmc3Rha2FsYSIsImEiOiJjbDA4N3hyNmQwMHUzM2lsZzk3OWQ0NXBsIn0.8dcS9BnsiPbJM2aKKUiICA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ashrafstakala/cl088hrtd002414p4u7hir1se',
});
