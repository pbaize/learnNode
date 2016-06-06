var fs = require('fs');


function returnStuff(dir, ext, callback) {
	var matches = [];
	fs.readdir(dir, function(err, data) {
		if (err) {
			return callback(err);
		}
		for (var i = 0; i < data.length; i++) {
			if (data[i].split(".")[1] === ext) {
				matches.push(data[i]);
			}
		}
		return callback(null, matches);
	});
	
}

module.exports = returnStuff;