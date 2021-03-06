$(document).ready(function() {

$.getJSON("http://www.telize.com/geoip?callback=?", function(json) {
	console.log("success");
})
	.done(function(json) {

	zipCode = json.postal_code;
  	geoLat  = json.latitude;
  	geoLong = json.longitude;
  	$('#lat').text(json.latitude);
  	$('#long').text(json.longitude);
		 $.ajax({
		 			url: 'http://api.openweathermap.org/data/2.5/find?lat=' + geoLat + '&lon=' + geoLong + '&cnt=1&units=imperial',
		 			error: function() {
		 				console.log('OpenWeatherAPI Error');
		 			},
		 			success: function(data) {
		 				var base = data.list[0];

		 				var temp 		= base.main.temp;
		 				var city 	    = base.name;
		 				var pressure    = base.main.pressure;
		 				var tempHigh    = base.main.temp_max;
		 				var tempLow  	= base.main.temp_min;
		 				var windSpeed   = base.wind.speed;
		 				var windDeg     = base.wind.deg;
		 				var description = base.weather[0].description;

		 				function degToCompass(num) {
						    var val = Math.floor((num / 22.5) + 0.5);
						    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", 
						    			"SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
						    return arr[(val % 16)];

						}

						var windDirection = degToCompass(windDeg);
						var wind     	  = Math.round(windSpeed);
						if (wind > 10) {
							$('#windSpeed').css('color', 'orange');
						} 
						if (temp < 32) {
							$('#temp').css('color', 'darkblue');
						} else if (temp > 85) {
							$('#temp').css('color', 'red');
						} 
		 				$('#temp').text(Math.round(temp) + " F");
		 				$('#city').text(city);
		 				$('#pressure').text(pressure);
		 				$('#tempHigh').text(tempHigh);
		 				$('#tempLow').text(tempLow);
		 				$('#windSpeed').text(wind + " mph " + windDirection);
		 				$('#windDeg').text(windDirection);
		 				$('#description').text(description);
		 			},
		 			type: 'GET'
		 		});
			})

	.fail(function() {
		var err = textStatus + ", " + error;
		console.log("Request failed: " + err);
		document.write("An Error Occurred!");
	})
	.always(function() {
		console.log("finished");
	});
});

