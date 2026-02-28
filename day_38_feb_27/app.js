const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// static file
app.use(express.static('public'))

const activeUsers = new Map(); // {userId:socketId}

io.on('connection', (socket) => {
    console.log('Made Socket Connection...');


    socket.on('private_message', function ({ message, toUserId }) {
        const targetSocketId = activeUsers.get(toUserId);
        // if (activeUsersArr.includes(toUserId)) {
        //     const targetSocketId = activeUsersArr.find(user => user == toUserId);
        //     console.log('targetSocketId', targetSocketId)
        //     io.to('nayan_ramanathan_room').emit('receive_private_message', message);
        // }
        if(targetSocketId){
            io.to(targetSocketId).emit('receive_private_message',{
                from:socket.userId,
                message
            })
        }
    })

    socket.on('new user', function (userId) {
        socket.userId = userId;
        activeUsers.set(userId, socket.id);
        io.emit('new user', [...activeUsers.keys()]); //server is triggering an event
        console.log(activeUsers)
        if (socket.userId == 'nayan' || socket.userId == 'ramanathan') {
            socket.join('nayan_ramanathan_room')
        }
    })
    socket.on('disconnect', function () {
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