
var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./public");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});


var colors = require('colors');

var serverPort = 9001;

server.listen(serverPort, function(){
	console.log("Server run at localhost:"+serverPort); //.inverse
});