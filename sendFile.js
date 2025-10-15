const fs = require('fs');
const path = require('path');

function fileType(filePath) {
	const ext = path.extname(filePath);
	switch(ext) {
		case '.html': return 'text/html';
		case '.css': return 'text/css';
		case '.js': return 'application/javascript';
		case '.jpeg': return 'image/jpeg';
		case '.png': return 'image/png';
		case '.json': return 'application/json';
		default: return 'text/plain';
	}
}


function sendResponse (res,status, contentType, body) {
	res.writeHead(status, {'Content-Type': contentType});
	res.end(body);
}

function sendFile(filePath, res) {
	const contentType = fileType(filePath);
	fs.readFile(filePath, (err, data) => {
		if (err) {
			sendResponse(res, 404, 'text/plain', 'Error 404: File not found');
		} else {
			const contentType = fileType(filePath);
			sendResponse(res, 200, contentType, data);
		}
	});
}

module.exports = { sendFile, sendResponse };
