var map = L.map('map').setView([46.603354,1.8883335],6);
var accessToken = "pk.eyJ1Ijoia3JpY2h0b2YiLCJhIjoiYjU1MTg4MWU5ZDRkNWVkOGRlZjUzZWFjNWYyMWI5YzcifQ.57puNCxCdXweviIgoWBG4Q";
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'krichtof.4dbe142b',
    accessToken: accessToken
}).addTo(map);

L.marker([48.8623357,2.4412184]).addTo(map)
  .bindPopup('Chez Karina<br>12/05/2016')

L.marker([48.6455882,2.075826]).addTo(map)
  .bindPopup('Chez Vincent<br>04/06/2016')

L.marker([48.8735584,2.7121663]).addTo(map)
  .bindPopup('Chez Gaelle<br>04/06/2016')
