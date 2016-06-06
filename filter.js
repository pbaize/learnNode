var fs = require('fs');
var dir = process.argv[2];
var type = process.argv[3];

fs.readdir(dir, function(err, list){
	for (var i = 0; i < list.length; i++) {
		if (list[i].split(".")[1]===type){
			console.log(list[i]);
		}
	}
});