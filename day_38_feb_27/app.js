const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// static file
app.use(express.static('public'))

const activeUsers = new Set();

io.on('connection', (socket) => {
    console.log('Made Socket Connection...');


    socket.on('private_message', function ({ message, toUserId }) {
        const activeUsersArr = [...activeUsers];
        console.log(toUserId, activeUsersArr)
        console.log(activeUsersArr.includes(toUserId))
        if (activeUsersArr.includes(toUserId)) {
            const targetSocketId = activeUsersArr.find(user => user == toUserId);
            console.log('targetSocketId', targetSocketId)
            io.to('nayan_ramanathan_room').emit('receive_private_message', message);
        }
    })

    socket.on('new user', function (data) {
        socket.userId = data;
        activeUsers.add(data);
        io.emit('new user', [...activeUsers]); //server is triggering an event
        console.log(activeUsers)
        if (socket.userId == 'nayan' || socket.userId == 'ramanathan') {
            socket.join('nayan_ramanathan_room')
        }
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