const EventEmitter = require('events');
const eventObj = new EventEmitter();

eventObj.on('userLoggedIn', (userName) => { // listener
    console.log(`Welcome ${userName}`)
});
eventObj.emit('userLoggedIn', 'Sanjay'); // emitting the event