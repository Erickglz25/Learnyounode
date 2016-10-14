var net = require('net')

function cero (i) {
  return (i < 10 ? '0' : '') + i
}

function time () {
  var date = new Date()
  return date.getFullYear() + '-' +
    cero(date.getMonth() + 1) +'-' +
    cero(date.getDate()) + ' ' +
    cero(date.getHours()) + ':' +
    cero(date.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(time() + '\n')
})
//console.log()
server.listen(Number(process.argv[2]))//el puerto esta dado por el argumento de argv
