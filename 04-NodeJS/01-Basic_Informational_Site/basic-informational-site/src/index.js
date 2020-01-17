const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer((request, response) => {
  const requestedFile = url.parse(request.url, true);

  if (requestedFile.pathname === '/') {
    requestedFile.pathname = '/index.html';
  }

  const filename = path.resolve(__dirname, `.${requestedFile.pathname}`);

  fs.readFile(filename, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      return response.end('Not Found');
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    return response.end();
  });
}).listen(8000);
