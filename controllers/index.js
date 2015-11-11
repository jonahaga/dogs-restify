var fs    = require('fs');
var dash  = require('lodash');
var route = {};

fs.readdirSync(__dirname).forEach(function(file) {
  if (file == "index.js") return;
  var name = file.substr(0, file.indexOf('.'));
  route[name] = require('./' + name);
});

function setUpAllRoutes(server) {
  dash.each(route, function(_value, routeName) {
    route[routeName].setUpRoutes(server);
  });
}

module.exports = {
  setUpAllRoutes: setUpAllRoutes,
};
