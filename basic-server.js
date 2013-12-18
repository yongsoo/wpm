var path = require("path");
var http = require("http");
var fs = require("fs");

var port = 8080;
var ip = "127.0.0.1";

var server = http.createServer(function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
	if (request.method === "GET" && request.url === '/') {
		serveStaticAssets(request, response, 'index.html');
	} else if (request.method === "GET" && request.url.match(/(css)|(js)/)) {
    serveStaticAssets(request, response, request.url);
  }

  if (request.method === "POST") {
  	console.log("handling post request");

  	var data = "";
    request.on('data', function(chunk) {
    	data += chunk;
    	console.log(data);
    });
  }
});

console.log("Listening on http://" + ip + ":" + port);


server.listen(port, ip);

var serveStaticAssets = function(req, res, file) {
	  fs.readFile('public/' + file, function(err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200);
      res.end(data);
    });
}