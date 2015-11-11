var exports = module.exports = development;
exports.production = production;

var winston = require('winston');

var development = new (winston.Logger)({
  transports: [
    new(winston.transports.Console)
    ({colorize: true, timestamp: true})
  ]
});

var production = new(winston.Logger)({
  transports: [
    new(winston.transports.File)({maxsize: 512, maxFiles: 31})
  ]
});
