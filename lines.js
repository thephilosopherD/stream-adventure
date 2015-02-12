var through = require('through')
var split = require('split')

var odd = true
process.stdin
	.pipe(split())
	.pipe(through(function (line) {
    	if(odd)
			this.queue(line.toString().toLowerCase())
		else
			this.queue(line.toString().toUpperCase())
		odd = !odd
		this.queue('\n')
	}))
	.pipe(process.stdout)


	//Official

	//  var through = require('through');
	//  var split = require('split');
		      
	//   var lineCount = 0;
	//   var tr = through(function (buf) {
	//  	 var line = buf.toString();
	//	 this.queue(lineCount % 2 === 0
	//		 ? line.toLowerCase() + '\n'
	//		 : line.toUpperCase() + '\n'
	//	 );
	//	 lineCount ++;
	// });

	// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

