var express = require("express");
var handleBars = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');

app.use('/', router);

app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});