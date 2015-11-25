	function initMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 37.7616486, lng: -122.4866023},
	    zoom: 13
	  });
	

var layer = new google.maps.KmlLayer ({
	url: 'http://leahyousquare.github.io/fewd-36/dessert-guide/kml/desserts.kml',
	map: map
});



// var myCenter = new google.maps.LatLng(37.7616486, -122.4866023);
// var marker= new google.maps.Marker({
//   position:myCenter,
//   });

// marker.setMap(map);

// google.maps.event.addDomListener(window, 'load', initialize);
}