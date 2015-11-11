var restify = require('restify');
var env     = process.env.NODE_ENV || 'development';
var controllers = require('./controllers');

var config = require('./config/' + env + '.json');
var server = restify.createServer({ name: config.serverName });

server.use(restify.bodyParser());
controllers.setUpAllRoutes(server);

server.listen(config.port, function() {
  console.log('%s listening on port %s', server.name, server.url)
});

module.exports = server;
