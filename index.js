var express = require('express');
var http = require('http');
var socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO.listen(server);

app.get('/',function(req, res){
  res.send('Hello World');
});

server.listen(3000, function(){
  console.log('Listening on 3000');
})

io.on('connection', function(socket){
  console.log('a new client connected');

  socket.on('message', function(data){
    console.log('data:', data);
    socket.emit('message','Server : Hello World');
  })


});