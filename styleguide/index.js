var express = require('express');
var mustacheExpress = require('mustache-express');
var reload = require('reload');
var fs = require('fs');
var routes = require('./routes');

// Start express and reload server
var app = express();
app.set('port', process.env.PORT || 3000);
reload(app, { port: process.env.RELOAD_PORT || 9856 });

app.use(express.static(__dirname + '/../'));

// Set data object
var data = {};
data.routes = routes;

// Define Mustache
app.engine('tpl', mustacheExpress());

// Set Mustache as rendering engine
app.set('view engine', 'tpl');
app.set('views', __dirname);

// Default index
app.get('/', function(req, res) {
	data.pageTitle = 'Table of contents';

	// Render index with data object
	res.render('index', data);
});

// Loop over routes.js route array
routes.forEach(function (routeItem){
	var route = '/' + routeItem.category + '/' + routeItem.slug;
	var path = routeItem.category + '/' + routeItem.slug;

	// Add route for this route
	app.get(route, function(req, res) {
		// Set page title
		data.pageTitle = routeItem.name;

		// Check if there isn't a tpl file in the root of the category folder
		if (!fs.existsSync(__dirname + '/' + path + '.tpl')) {
			// Add extra slug to path when there is an extra folder
			path += '/' + routeItem.slug;

			// Check if there is a data JS file
			if (fs.existsSync(__dirname + '/' + path + '.js')) {
				// Add content of the data js file to data object
				data.templateData = require('./' + path);
			}
		}

		// Render route with data object
		res.render(path, data);
	});
})

// Start server
app.listen(app.get('port'), function () {
	console.log('Web server listening on port ' + app.get('port'))
  })
