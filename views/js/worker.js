onmessage = function(e) {
	parsed_data = JSON.parse(e.data);
	console.log(e.data[0]);
	postMessage('hello');
}