var fs = require('fs');

var content = fs.readFileSync("response.json");
console.log(content);

module.exports = content;