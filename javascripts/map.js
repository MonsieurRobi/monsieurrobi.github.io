var events = [
  { "host": 'Fred', "when":"Date à préciser", where: "L'Ile-Saint-Denis (93)", "latitude": 48.90385, longitude: 2.34122},
  { "host": 'Dominique', "when":"Date à préciser", where: 'Paris', "latitude": 48.85888, "longitude": 2.34694},
  { "host": 'Karina', "when": "12/05/2016", where: 'Montreuil, 93', "latitude": 48.8623357, "longitude": 2.4412184 },
  { "host": 'Vincent', "when": "04/06/2016", where: 'Limours, 91', "latitude": 48.6455882, "longitude": 2.075826 },
  { "host": 'Gaelle', "when": "05/06/2016", where: 'Lagny sur Marne, 77', "latitude": 48.8735584, "longitude": 2.7121663 },
  { "host": 'Tyfen', "when": "21/05/2016", where: 'Lucey, Savoie', "latitude": 45.7516, "longitude":5.78737},
  { "host": 'Rachel', "when": "Date à préciser", where: 'Nancy', "latitude": 48.68807,"longitude":6.17346},
{ "host": 'Corinne', "when": "11/06/2016", where: 'Diois', "latitude": 44.68101845,"longitude":5.47397281258444},
  { "host": 'Julie', "when": "28/05/2016", where: 'Avignon', "latitude": 43.94172, "longitude":4.83339},
  { "host": 'Les Sidebottom', "when": "02/07/2016", where: 'Warrington, England', "latitude": 53.40170, "longitude":-2.56155},
];
var map = L.map('map').setView([46.603354,1.8883335],5);
var accessToken = "pk.eyJ1Ijoia3JpY2h0b2YiLCJhIjoiYjU1MTg4MWU5ZDRkNWVkOGRlZjUzZWFjNWYyMWI5YzcifQ.57puNCxCdXweviIgoWBG4Q";
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'krichtof.4dbe142b',
    accessToken: accessToken
}).addTo(map);

for (var i in events) {
  event = events[i];
  L.marker([event.latitude, event.longitude]).addTo(map)
    .bindPopup(event.when + ': chez ' + event.host + '<br>' + event.where);
}
