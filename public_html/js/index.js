document.addEventListener('DOMContentLoaded', () => {
	const scheduleButton = document.getElementById('scheduleButton');
	const cancelButton = document.getElementById('cancelButton');
	const checkButton = document.getElementById('checkButton');
	const results = document.getElementById('results');
// function to send ajax requests
	function sendRequest(url) {
		let ajaxObj = new XMLHttpRequest(); // create obj
		ajaxObj.onload = function() {
			if (ajaxObj.status === 200) {
				document.getElementById('results').textContent = ajaxObj.responseText;
			} else {
				document.getElementById('results').textContent = `Error: ${ajaxObj.status}`;
			}
		};

		ajaxObj.onerror = function() {
			document.getElementById('results').textContent = 'request failed!';
		};
		ajaxObj.open('GET', url, true);
		ajaxObj.send();
	}


	// schedule button
	scheduleButton.addEventListener('click', () => {
		let name = encodeURIComponent(document.getElementById('name').value);
		let day = encodeURIComponent(document.getElementById('day').value);
		let time = encodeURIComponent(document.getElementById('time').value);
		let url = `/schedule?name=${name}&day=${day}&time=${time}`;
		sendRequest(url);
	});


	// cancel button
	cancelButton.addEventListener('click', () => {
        	let name = encodeURIComponent(document.getElementById('name').value);
        	let day = encodeURIComponent(document.getElementById('day').value);
        	let time = encodeURIComponent(document.getElementById('time').value);
        	let url = `/cancel?name=${name}&day=${day}&time=${time}`;
        	sendRequest(url);
	});


	// check button
	checkButton.addEventListener('click', () => {
        	let name = encodeURIComponent(document.getElementById('name').value);
        	let day = encodeURIComponent(document.getElementById('day').value);
        	let time = encodeURIComponent(document.getElementById('time').value);
        	let url = `/check?name=${name}&day=${day}&time=${time}`;
        	sendRequest(url);
	});
});
