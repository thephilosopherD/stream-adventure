var ws = require('websocket-stream')
var stream = ws('s://localhost:8000')

stream.write('hello\n')
stream.end()



//Official 

// var ws = require('websocket-stream')
// var stream = ws('ws://localhost:8000)
// stream.end('hello\n')
