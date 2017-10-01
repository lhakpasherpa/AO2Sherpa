var http = require("http");

http.createServer(requestListener).listen(8081);

function requestListener(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<!DOCTYPE html>");
    response.write("<html><head><title>W05</title></head>");
    response.write("<body><h1>Hello World!!</h1></body></html>");
    response.write("<body><h2>This is Lhakpa Sherpa.</h2></body></html>");
    response.write("<body><h4>This is my web page</h4></body></html>");
    response.end();
}

console.log('Server running at http://127.0.0.1:8081/');

