/*homepage map will have an animation with marks droping down to visualize
trip day by day, if possible*/
// var map;

function initMap(){
  var locations=[
    ['Sydney', -34.397, 150.644],
    ['Queenstown', -45.0312, 168.6626],
    ['Wanaka', -44.7032, 169.1321],
    ['Franz-Joseph', -43.3873, 170.1833],
    ['Nelson', -41.2706, 173.2840],
    ['Wellington', -41.2865, 174.7762],
    ['Hamilton', -37.7870, 175.2793],
    ['Auckland', -36.8485, 174.7633],
    ['Brisbane', -28, 153.4167],
    ['Port Douglas', -16.4836, 145.4653],
    ['Melbourne', -37.8136, 144.9631]
    ];
  debugger;
  var map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: -30.397, lng: 150.644}, //Adds a center pin
    zoom: 4
  });
  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  for(i=0; i<locations.length;i++){
    marker= new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1],locations[i][2]),
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
  }
}


  // var marker = new google.maps.Marker({
  //   position: Sydney, //watch out for syntax BS
  //   map: map
  //   });
  // var marker = new google,maps.Marker({
  //   position: Queenstown,
  //   map:map
  // });


