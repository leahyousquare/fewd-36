console.log('this works');

var markers = [
    {
        "title": 'twisted donuts',
        "lat": '37.75403',
        "lng": '-122.47724',
        "description": '<h3 align="center">twisted donuts</h3> <p align="center">1243 noriega street<br> san francisco, ca 94122</p>'
    },

    {
        "title": 'mitchells-ice-cream',
        "lat": '37.74415',
        "lng": '-122.42282',
        "description": "<h3 align='center'>mitchell's ice cream</h3> <p align='center'>1243 noriega street<br> san francisco, ca 94122</p>"
    },

	{
        "title": 'outerlands',
        "lat": '37.76026',  
        "lng": '-122.50502',
        "description": "<h3 align='center'>outerlands</h3> <p align='center'>4001 judah street<br>san francisco, ca 94122</p>"
    },

	{
        "title": 'pineapples',
        "lat": '37.72326',  
        "lng": '-122.44299',
        "description": "<h3 align='center'>pineapples</h3> <p align='center'><br>san francisco, ca </p>"
    },

	{
        "title": 'poly-ann',
        "lat": '37.75347',  
        "lng": '-122.49771',
        "description": "<h3 align='center'>polly ann ice cream</h3> <p align='center'><br>san francisco, ca </p>"
    },

	{
        "title": 'humphry',
        "lat": '37.7528',  
        "lng": '-122.41193',
        "description": "<h3 align='center'>humphry slocombe</h3> <p align='center'><br>san francisco, ca </p>"
    },

    {
        "title": 'fentons',
        "lat": '37.82794',  
        "lng": '-122.24999',
        "description": "<h3 align='center'>fentons creamery</h3> <p align='center'><br>san francisco, ca </p>"
    },

    {
        "title": "peters-kettle",
        "lat": '37.78889',  
        "lng": '-122.19657',
        "description": "<h3 align='center'>peter's kettle corn</h3> <p align='center'><br>san francisco, ca </p>"
    },

	{
        "title": 'smitten',
        "lat": '37.77635',  
        "lng": '-122.4242',
        "description": "<h3 align='center'>smitten ice cream</h3> <p align='center'><br>san francisco, ca </p>"
    },

	{
        "title": 'cream',
        "lat": '37.76505',  
        "lng": '-122.42221',
        "description": "<h3 align='center'>cream</h3> <p align='center'><br>san francisco, ca </p>"
    },

	{
        "title": 'genki',
        "lat": '37.78316',  
        "lng": '-122.46286',
        "description": "<h3 align='center'>genki crepes</h3> <p align='center'><br>san francisco, ca </p>"
    },

	{
        "title": 'benkyodo',
        "lat": '37.78635',  
        "lng": '-122.43016',
        "description": "<h3 align='center'>benkyodo</h3> <p align='center'><br>san francisco, ca </p>"
    },

    {
        "title": 'plentea',
        "lat": '37.79137',  
        "lng": '-122.4044',
        "description": "<h3 align='center'>plentea</h3> <p align='center'><br>san francisco, ca </p>"
    },
	{
        "title": 'ice-bar',
        "lat": '37.76645',  
        "lng": '-122.45024',
        "description": "<h3 align='center'>the ice cream bar</h3> <p align='center'><br>san francisco, ca </p>"
    },
	{
        "title": 'tpumps',
        "lat": '37.76371',  
        "lng": '-122.47861',
        "description": "<h3 align='center'>tpumps</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'marco-polo',
        "lat": '37.74261',  
        "lng": '-122.48187',
        "description": "<h3 align='center'>marco polo italian ice cream</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'birite',
        "lat": '37.76158',  
        "lng": '-122.42566',
        "description": "<h3 align='center'>bi-rite creamery</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": "ants",
        "lat": '37.7502',  
        "lng": '-122.42023',
        "description": "<h3 align='center'>anthony's cookies</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'frozen',
        "lat": '37.80676',  
        "lng": '-122.43147',
        "description": "<h3 align='center'>frozen khusterd</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'pacific',
        "lat": '37.79694',  
        "lng": '-122.43565',
        "description": "<h3 align='center'>pacific puffs</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'straw',
        "lat": '37.77404',  
        "lng": '-122.42424',
        "description": "<h3 align='center'>straw</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'att',
        "lat": '37.77859',  
        "lng": '-122.38926',
        "description": "<h3 align='center'>at&t park: ghiradelli</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'holy',
        "lat": '37.76233',  
        "lng": '-122.46592',
        "description": "<h3 align='center'>holy gelato!</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": "diandas",
        "lat": '37.75097',  
        "lng": '-122.41817',
        "description": "<h3 align='center'>dianda's italian american pastry</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": 'super',
        "lat": '37.72427',  
        "lng": '-122.45701',
        "description": "<h3 align='center'>super cue cafe</h3> <p align='center'><br>san francisco, ca </p>"
    },
    {
        "title": "sophie's crepes",
        "lat": '37.78508',  
        "lng": '-122.4321',
        "description": "<h3 align='center'>sophie's crepe's</h3> <p align='center'><br>san francisco, ca </p>"
    }

    ];

    var labels = 'abcdefghijklmnopqrstuvwxyz';
    var labelIndex = 0;

    window.onload = function () {
        initMap();
    }

    function initMap() {
        var mapOptions = {
            center: {lat: 37.7704412, lng: -122.364841},
            zoom: 12,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        // Create and open InfoWindow.
        // var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker ({
                position: myLatlng,
                map: map,
                title: data.title,
                label: labels[labelIndex++ % labels.length]

            });
          }
      }
            //Attach click event to the marker.
            function click (markers, data) {
            	console.log(marker.title);
                google.maps.event.addListener(marker, "click", function (e) {
                	var marker_target = e.Gb.target.title;
                	var dessert_target = data.title;

                	marker_target.forEach(function (element) {
                		console.log(element);
                	});
                	
                	// document.anchors.name;

                	document.anchors.forEach(function (element){
                		console.log(element);
                	});
                });
               }

                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    // infoWindow.setContent("<div style = 'width:150px;min-height:40px'>" + data.description + "</div>");
                    // infoWindow.open(map, marker);
                // });


// click event that links to side bar
        // function (marker, data) {
        // 	google.maps.event.addEventListener(marker, "click", function (e) 
  






	// function initMap() {
	//   var map = new google.maps.Map(document.getElementById('map'), {
	//     center: {lat: 37.76645, lng: -122.45024},
	//     zoom: 12
	//   });

// //    // // a new Info Window is created
// //    // infoWindow = new google.maps.InfoWindow();

// //    // // Event that closes the InfoWindow with a click on the map
// //    // google.maps.event.addListener(map, 'click', function() {
// //    //    infoWindow.close();
// //    // });

// //    // Finally displayMarkers() function is called to begin the markers creation
// //    displayMarkers();
// // }

	  
// // 	// var myLatLng = {lat: 37.76645, lng: -122.45024};



// 	var latLngArray = [

// 		{
// 			lat: 37.76645,
// 		 	lng: -122.45024
// 		 },

// 		{
// 			lat: 37.77584, 
// 			lng: -122.49778

// 		}

// 	];

// // 	function displayMarkers() {
// //   	 var bounds = new google.maps.LatLngBounds();

// // 	for (var i = 0; i < latLngArray.length; i++){

// //       var latlng = new google.maps.LatLng(latLngArray[i].lat, latLngArray[i].lng);
// //       // var name = markersData[i].name;

// //   createMarker(latlng);

// //   bounds.extend(latlng);
// //   map.fitBounds(bounds);
// // }}

// // function createMarker(latlng) {
// // 	var marker = new google.maps.Marker({
// //     position: latlng,
// //     map: map,
// //   });


// //   google.maps.event.addListener(marker, 'click', function() {
      
// // var iwContent = '<div id="iw_container">' +
// //       '<div class="iw_title">' + name + '</div>' +
// //       '<div class="iw_content">' + address1 + '<br />' +
// //       address2 + '<br />' +
// //       postalCode + '</div></div>';
      
// //       // including content to the infowindow
// //       infoWindow.setContent(iwContent);

// //       // opening the infowindow in the current map and at the current marker location
// //       infoWindow.open(map, marker);
// //    });
// // }




// // var layer = new google.maps.KmlLayer ({
// // 	url: 'http://leahyousquare.github.io/fewd-36/dessert-guide/kml/desserts1.kml',
// // 	    suppressInfoWindows: true,
// // 	      preserveViewport: false,
// // 	map: map
// // });



// // var myCenter = new google.maps.LatLng(37.7616486, -122.4866023);
// // var marker= new google.maps.Marker({
// //   position:myCenter,
// //   });

// // marker.setMap(map);

// // google.maps.event.addDomListener(window, 'load', initialize);
// // }

// // // these two variables are global so they can be accessed inside the functions
// 	// var map;
// 	// var kmlUrl = 'http://leahyousquare.github.io/fewd-36/dessert-guide/kml/desserts1.kml';

// 	// function initMap() {
// 	//   var map = new google.maps.Map(document.getElementById('map'), {
// 	//     center: {lat: 37.7616486, lng: -122.4866023},
// 	//     zoom: 13
// 	//   });
// 	//   loadKmlLayer(kmlUrl, map)
// 	// }

// 	// function loadKmlLayer(kmlUrl, map) {
// 	// 	var kmlLayer = new google.maps.KmlLayer(kmlUrl, {
// 	// 		suppressInfoWindows: true,
// 	// 		preserveViewport: false,
// // 	// 		map: map
// // 	// 	});
// // 	// }



// // var allView = document.querySelector(".all");
// // var oneView = document.querySelector(".one");

// // allView.addEventListener("click", seeAll);
// // oneView.addEventListener("click", seeOne);


// // 	// all listed view
// // function seeAll(event) {
// // 	body.className = "allAtOnce";
// // }

// // function seeOne(event) {
// // 	body.className = "onlyOne";
// // }

// // 	// list view



// 	// map interaction js











