var express = require('express')
var app = express()
var http = require('http').createServer(app)

// on getting a request to /, do the following
app.get('/', function (req, res) {
  res.write('This is where we will show our chat client.\n')
  res.write('We need an element to hold messages.\n')
  res.write('We need an element to hold notification (that others are typing).\n')
  res.write('We need an element to hold the message input form.\n')
  res.end()
})

// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('listening on http://127.0.0.1:8081/')
})

// 1. add two more requires at the end of the requires
var io = require('socket.io')(http)
var path = require('path')

// 2. replace the inside lines of your app.get 
app.get('/', function (req, res) {
     app.use(express.static(path.join(__dirname)))   
     res.sendFile(path.join(__dirname, '../w06/assets', 'index.html'))
})

// 3. Add the following function  
io.on('connection', function(socket){ 
      socket.on('chatMessage', function(from, msg){
           io.emit('chatMessage', from, msg)  
      })
      socket.on('notifyUser', function(user){
           io.emit('notifyUser', user)  
      })
})

