var http = require('http')
var through = require('through')

function write (buf) {
	this.queue(buf.toString().toUpperCase())
}

function end () { this.queue(null) }


var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(through(write, end)).pipe(res)
		}
	else res.end('POST please.')	
	
})
server.listen(process.argv[2])



//Official

// var http = require('http');
// var through = require('through');
	    
// var server = http.createServer(function (req, res) {
//	if (req.method === 'POST') {
//		req.pipe(through(function (buf) {
//			this.queue(buf.toString().toUpperCase());
//	    })).pipe(res);
//     }
//	 else res.end('send me a POST\n');
//	});
// server.listen(parseInt(process.argv[2]));

