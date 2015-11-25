	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 37.7616486, lng: -122.4866023},
	    zoom: 13
	  });
	}

	 var ctaLayer = new google.maps.KmlLayer({
    url: 'kml/desserts.kml',
    map: map
  });
}