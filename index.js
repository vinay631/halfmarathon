//var map = L.map('map'),
//    realtime = L.realtime('https://wanderdrone.appspot.com/', {
//        interval: 3 * 10000
//    }).addTo(map);

var mymap = L.map('map').setView([42.360118 , -71.088238], 14);

//var gpx = 'data.gpx';
//new L.GPX(gpx, {async: true}).on('loaded', function(e) {
//  mymap.fitBounds(e.target.getBounds());
//}).addTo(mymap);

//map.panTo(new L.LatLng(42.360118 , -71.088238));

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//realtime.on('update', function() {
//    map.fitBounds(realtime.getBounds(), {maxZoom: 3});
//});
