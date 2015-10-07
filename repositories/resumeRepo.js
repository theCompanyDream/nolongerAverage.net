var fs = require('fs');
var obj;

fs.readFile('response.json', 'utf8', function(err, data) {
	if(err) return;
	obj = JSON.parse(data);
});

module.exports = obj;