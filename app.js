const http = require('http');
const fs = require('fs');
const url = require('url');
const {  sendFile } = require('./sendFile.js')
const path = require('path');

//call back function
createServer = function (req, res) {

	console.log(req.url); // logging requests

	let file = url.parse(req.url).pathname; 
	if (file === '/') { 
		file  = '/index.html'; // default
	} 

	 const filePath = './public_html' + file; // create path

	console.log("trying to send:", filePath); // shows file path

	sendFile(filePath, res);
}
 
const myserver = http.createServer(createServer); //create a server object
myserver.listen(80, function() {console.log("Listening on port 80" )}); 
