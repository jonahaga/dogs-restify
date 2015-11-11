var expect = require('chai').expect;
var server = require('../index.js');
var restify = require('restify');

var client = restify.createJsonClient({url: server.url});

describe('dogs', function() {
  it('get list of all dogs', function(done) {
    client.get('/dogs', function(err, req, res, data) {
      expect(err).to.be.null;
      expect(data).to.have.length(2);
      done();
    });
  });

  it('gets one dog', function(done) {
    client.get('/dogs/Sasha', function(err, req, res, data) {
      expect(err).to.be.null;
      expect(data).to.have.all.keys('name', 'breed', 'color');
      expect(data.name).to.equal('Sasha');
      done();
    });
  });

  it('gets dog that does not exist', function(done) {
    client.get('/dogs/Clifford', function(err, req, res, data) {
      expect(err).to.not.be.null;
      expect(err.body.message).to.equal('Could not find dog with name Clifford');
      expect(err.statusCode).to.equal(404);
      done();
    });
  });

  it('add dog', function(done) {
    var laila = {
      name: "Laila",
      breed: "Schnauzer",
      color: "gray",
    };
    client.post('/dogs', laila, function(err, req, res, data) {
      expect(err).to.be.null;
      expect(data).to.have.length(3);
      client.get('/dogs/Laila', function(err, req, res, data) {
        expect(data).to.have.all.keys('name', 'breed', 'color');
        expect(data.name).to.equal(laila.name);
        done();
      });
    });
  });

  it('update dog', function(done) {
    var laila = {
      name: "Laila",
      breed: "Schnauzer",
      color: "pepper",
    };
    client.put('/dogs/Laila', laila, function(err, req, res, data) {
      expect(err).to.be.null;
      expect(data).to.have.all.keys('name', 'breed', 'color');
      client.get('/dogs/Laila', function(err, req, res, data) {
        expect(data.color).to.equal(laila.color);
        done();
      });
    });
  });

  it('delete dog', function(done) {
    client.del('/dogs/Laila', function(err, req, res, data) {
      expect(err).to.be.null;
      expect(data).to.have.length(2);
      client.get('/dogs/Laila', function(err, req, res, data) {
        expect(err).to.not.be.null;
        expect(err.body.message).to.equal('Could not find dog with name Laila');
        expect(err.statusCode).to.equal(404);
        done();
      });
    });
  });
});
