var map;
function initMap(){
  var Sydney = {lat: -34.397, lng: 150.644};
  var map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: -34.397, lng: 150.644}, //Adds a center pin
    zoom: 5
  });
  var marker = new google.maps.Marker({
    position: Sydney, //watch out for syntax BS
    map: map
  });
}

