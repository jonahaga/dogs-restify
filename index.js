var restify = require('restify');
var dogs = require('./dogs');


var server = restify.createServer({name: 'dogs'});

server.use(restify.bodyParser());

server.get('/dogs', dogs.get);
server.post('/dogs', dogs.post);
server.get('/dogs/:name', dogs.getOne);
server.put('/dogs/:name', dogs.put);
server.del('/dogs/:name', dogs.del);

server.listen('8000', function() {
  console.log('%s listening on port %s', server.name, server.url)
});
