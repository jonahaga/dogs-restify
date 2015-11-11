var restify = require('restify');
var dogs    = require('./dogs');
var env     = process.env.NODE_ENV || 'development';


var config = require('./config/' + env + '.json');
var server = restify.createServer({ name: config.serverName });

server.use(restify.bodyParser());

server.get('/dogs', dogs.get);
server.post('/dogs', dogs.post);
server.get('/dogs/:name', dogs.getOne);
server.put('/dogs/:name', dogs.put);
server.del('/dogs/:name', dogs.del);

server.listen(config.port, function() {
  console.log('%s listening on port %s', server.name, server.url)
});

module.exports = server;
