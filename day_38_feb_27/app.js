const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// static file
app.use(express.static('public'))

const activeUsers = new Set();

io.on('connection', (socket) => {
    console.log('Made Socket Connection...');

    socket.on('new user', function (data) {
        socket.userId = data;
        activeUsers.add(data);
        io.emit('new user', [...activeUsers]); //server is triggering an event
    })
    socket.on('disconnected', function () {
        activeUsers.delete(socket.userId);
        io.emit('user disconnected', socket.userId)
    })
    socket.on('chat message', function (data) {
        io.emit('chat message', data)
    })
    socket.on('typing', function (data) {
        // io.emit('typing', data)
        socket.broadcast.emit('typing', data)
    })
});

server.listen(4000, () => {
    console.log('server running...')
});