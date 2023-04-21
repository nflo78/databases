exports.messages = require('./messages.js');
exports.users = require('./users.js');

var messagesStorage = [];

var requestHandler = function(request, response) {

  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  var statusCode = 200;

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'application/json';
  if (request.url === '/classes/messages' && request.method === 'GET') {
    response.writeHead(statusCode, headers)
    response.end(JSON.stringify(messagesStorage))
  }
  if (request.url === '/classes/messages' && request.method === 'OPTIONS') {
    response.writeHead(statusCode, headers)
    response.end(JSON.stringify(messagesStorage))
  }
  if (request.url !== '/classes/messages') {
    statusCode = 404
    response.writeHead(statusCode, headers)
    response.end('Server 404 error')
  }
  if (request.url === '/classes/messages' && request.method === 'POST') {
    statusCode = 201
    var body = [];
    request.on('data', (chunk) => {
      body.push(chunk)
    });
    request.on('end', () => {
      body = Buffer.concat(body).toString();
      var message = JSON.parse(body);
      message.message_id = messagesStorage.length;
      messagesStorage.push(message)
      response.writeHead(statusCode, headers)
      response.end(JSON.stringify(messagesStorage))
    })
  }
  response.writeHead(statusCode, headers);
};

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};
exports.requestHandler = requestHandler

