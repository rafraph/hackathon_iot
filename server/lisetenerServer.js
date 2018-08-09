var express = require('express');
var app = express();
var date = new Date();
var current_hour = date.getHours();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  var token = req.param('token');
  console.log("get arrived");
  res.send( token + " from get " + date);
});

app.post('/', function (req, res) {
	var token = req.param('token');
  console.log("post arrived");
  res.send( token + " from post " + date);
});