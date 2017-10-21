var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// exposing public directory to access css files
app.use(express.static(path.join(__dirname, './app/public')));

// adding middleware for parsing incoming requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// adding application routes.
require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);

app.listen(PORT, function () {
  console.log('You are listening on PORT: ' + PORT);
});
