var dash = require('lodash');

var fixture_data = [
  {
    name: "Sasha",
    breed: "Dachshund",
    color: "black and tan",
  },
  {
    name: "Hildi",
    breed: "Dachshund",
    color: "red",
  },
];

function get(req, res, next) {
  res.send(fixture_data);
  return next();
}

function getOne(req, res, next) {
  var index = dash.findIndex(fixture_data, {name: req.params.name});
  if (index === -1) {
    res.send(404, new Error('Could not find dog with name ' + req.params.name));
  } else {
    res.send(fixture_data[index]);
  }
  return next();
}

function post(req, res, next) {
  var dog = (typeof req.body == 'object')? req.body: JSON.parse(req.body);
  fixture_data.push(dog);
  res.send(fixture_data);
  return next();
}

function put(req, res, next) {
  var index = dash.findIndex(fixture_data, {name: req.params.name});
  var dog = (typeof req.body == 'object')? req.body: JSON.parse(req.body);

  if (index === -1) {
    fixture_data.push(dog);
  } else {
    fixture_data.splice(index, 1, dog);
  }

  res.send(dog);
  return next();
}

function del(req, res, next) {
  var index = dash.findIndex(fixture_data, {name: req.params.name});
  if (index === -1) {
    res.send(404, new Error('Could not find dog with name ' + req.params.name));
  } else {
    fixture_data.splice(index, 1);
    res.send(fixture_data);
  }
  return next();
}

module.exports = {
  get: get,
  getOne: getOne,
  post: post,
  put: put,
  del: del,
};
