var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();

app.use(express.static(__dirname));

// Define Mustache 
app.engine('tpl', mustacheExpress());

// Set Mustache as rendering engine
app.set('view engine', 'tpl');
app.set('views', __dirname + '/templates');

app.locals.title = 'Harbour | Front-end framework';

// Default index
app.get('/', function(req, res) {
    res.render('index');
});

app.get('*.html', function(req, res) {
	res.render(req.params[0].slice(1) + '.tpl');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Harbour app listening at http://%s:%s', host, port);

});