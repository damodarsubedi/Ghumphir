var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var route = require('./controller/route');

var port = 3000;

app.set('view engine', 'ejs')

app.set('views', [path.join(__dirname, 'views')]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

app.listen(port, function(){
    console.log('Connection made at '+ port);
});