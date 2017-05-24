var express = require("express");
var bodyParser = require('body-parser');
var routes = require('./api/routes/photosRoutes');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log("api running on the port: " + port);

