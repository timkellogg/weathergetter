$(document).ready(function() {

// geolocation
$.getJSON("http://www.telize.com/geoip?callback=?", function(json) {
	console.log("success");
})
	.done(function(json) {

	zipCode = json.postal_code;
  	geoLat  = json.latitude;
  	geoLong = json.longitude;

  	$('#lat').text(json.latitude);
  	$('#long').text(json.longitude);
  	
  		// retrieve weather
		 $.ajax({
		 			url: 'http://api.openweathermap.org/data/2.5/find?lat=' + geoLat + '&lon=' + geoLong + '&cnt=1&units=imperial',
		 			error: function() {
		 				console.log('error');
		 			},
		 			success: function(data) {
		 				
		 				var temp 		= data.list[0].main.temp;
		 				var city 	    = data.list[0].name;
		 				var pressure    = data.list[0].main.pressure;
		 				var tempHigh    = data.list[0].main.temp_max;
		 				var tempLow  	  = data.list[0].main.temp_min;
		 				var windSpeed   = data.list[0].wind.speed;
		 				var windDeg     = data.list[0].wind.deg;
		 				var description = data.list[0].weather[0].description;

		 				$('#temp').text(Math.round(temp));
		 				$('#city').text(city);
		 				$('#pressure').text(pressure);
		 				$('#tempHigh').text(tempHigh);
		 				$('#tempLow').text(tempLow);
		 				$('#windSpeed').text(windSpeed);
		 				$('#windDeg').text(windDeg);
		 				$('#description').text(description);
		 			},
		 			type: 'GET'
		 		});
			}),

		// retrieve picture 


	.fail(function() {
		var err = textStatus + ", " + error;
		console.log("Request failed: " + err);
		document.write("An Error Occurred!");
	})
	.always(function() {
		console.log("finished");
	});
});

