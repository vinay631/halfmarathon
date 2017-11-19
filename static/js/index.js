//var map = L.map('map'),

var mymap = L.map('map').setView([42.360118 , -71.088238], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoidm0taW5kaWdvIiwiYSI6ImNqOWp5emp4cTB3MjIycWxnNTdkaXhsaDgifQ.MY8ZuPL4FGmyU08flsXXmQ',
}).addTo(mymap);

var gpx = '/static/js/data.gpx';
new L.GPX(gpx, {async: true}).on('loaded', function(e) {
  mymap.fitBounds(e.target.getBounds());
}).addTo(mymap);

realtime = L.realtime('/curloc', {
    interval: 3 * 30000
}).addTo(mymap);

//map.panTo(new L.LatLng(42.360118 , -71.088238));

//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

realtime.on('update', function() {
    mymap.fitBounds(realtime.getBounds(), {maxZoom: 14});
});
