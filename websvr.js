// Using Node.js http module, write a Node.js script that  starts a simple HTTP Server. 
// The HTTP server should run on port 8001, and writes back to client:

// 1. response.writeHead(200, {'ContentType':
// 'text/html'});
// 2. response.write('Hello World, my name is John Smith'); //Fill in your name

var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write('Hello World, my name is Michelle D.');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');