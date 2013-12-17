var http = require("http");

var port = 8080;
var ip = "127.0.0.1";

var server = http.createServer(function(request, response) {
  if (request.method === "GET") {
    console.log('get request working');
  }
});

console.log("Listening on http://" + ip + ":" + port);

server.listen(port, ip);

/* To start this server, run:
     node basic-server.js
 *  on the command line.

 * To connect to the server, load http://127.0.0.1:8080 in your web
 * browser.

 * server.listen() will continue running as long as there is the
 * possibility of serving more requests. To stop your server, hit
 * Ctrl-C on the command line. */
