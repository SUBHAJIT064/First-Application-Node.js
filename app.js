const http = require('http');

const requestListener = (request, response) => {
	response.write('Hello World\n');
	response.end();
}

const server = http.createServer(requestListener);

const confirmationCallback = () => {
	console.log('Server is running...');
}

server.listen(9000, confirmationCallback);
