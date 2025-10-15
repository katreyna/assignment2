const http = require('http');
const fs = require('fs');
const url = require('url');
const {  sendFile, sendResponse } = require('./sendFile.js')
const path = require('path');

//call back function
createServer = function (req, res) {

	console.log(req.url); // logging requests

	const parsedUrl = url.parse(req.url, true);
	let file = parsedUrl.pathname;
	// handle schedule
	if (file === '/schedule') {
		const { name, day, time } = parsedUrl.query;
		const message = `Scheduled ${name} at ${time} on ${day}`;
		sendResponse(res, 200, 'text/plain',  message);
	}
	// handle cancel
	else if (file === '/cancel') {
                const { name, day, time } = parsedUrl.query;
                const message = `Cancelled ${name}'s appointment at ${time} on ${day}`;
                sendResponse(res, 200, 'text/plain',  message);
        }  
	// handle check
	else if (file === '/check') {
                const { name, day, time } = parsedUrl.query;
                const message = `Checked availability for ${name} at ${time} on ${day}`;
                sendResponse(res, 200, 'text/plain',  message);
        }
	else {
		if (file === '/') {
			file  = '/index.html'; // default
		}
	

		const filePath = './public_html' + file; // create path

		console.log("trying to send:", filePath); // shows file path

		sendFile(filePath, res);
	}
} 
const myserver = http.createServer(createServer); //create a server object
myserver.listen(80, function() {console.log("Listening on port 80" )}); 
