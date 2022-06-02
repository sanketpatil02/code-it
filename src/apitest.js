var request = require("request");

// define access parameters
var accessToken = "https://7f7cf77c.compilers.sphere-engine.com/api/v4";
var endpoint = "7f7cf77c.compilers.sphere-engine.com";

// send request
request(
	{
		url:
			"https://7f7cf77c.compilers.sphere-engine.com/api/v4/compilers?access_token=d646ebfeb70a973e3f42a085dd0cd1a9",
		method: "GET",
	},
	function (error, response, body) {
		if (error) {
			console.log("Connection problem");
		}

		// process response
		if (response) {
			console.log(response.statusCode);
			if (response.statusCode === 200) {
				console.log(JSON.parse(response.body)); // list of compilers in JSON
			} else {
				if (response.statusCode === 401) {
					console.log("Invalid access token");
				}
			}
		}
	}
);
