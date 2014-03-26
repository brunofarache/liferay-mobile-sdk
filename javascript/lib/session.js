var http = require('http'),
	url = require('url');

function base64(value) {
	return new Buffer(value).toString('base64');
}

function Session(server, username, password) {
	this.server = server;
	this.username = username;
	this.password = password;
}

Session.prototype.invoke = function(command, callback) {
	var server = url.parse(this.server),
		hostname = server.hostname,
		port = server.port;

	var options = {
		headers: {
			'Authorization': 'Basic ' + base64(this.username + ':' + this.password),
			'Content-Type': 'application/json; charset=utf-8'
		},
		hostname: hostname,
		port: port,
		path: '/api/jsonws/invoke',
		method: 'POST'
	};

	var request = http.request(options, function(response) {
		response.setEncoding('utf8');
		
		response.on('data', function(data) {
			callback(null, JSON.parse(data));
		});
	});

	request.on('error', function(err) {
		callback(err);
	});

	request.write(JSON.stringify(command));
	request.end();
};

module.exports = Session;