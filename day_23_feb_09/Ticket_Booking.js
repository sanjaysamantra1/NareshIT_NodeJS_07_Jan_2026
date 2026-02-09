const EventEmitter = require('events');
const eventObj = new EventEmitter();

class TicketBookingSystem extends EventEmitter {
    constructor(totalTickets) {
        super();
        this.availableTickets = totalTickets;
    }
    bookTicket(customerName) {
        if (this.availableTickets > 0) {
            this.availableTickets--;
            this.emit('booked', customerName);
        } else {
            this.emit('soldout', customerName);
        }
    }
    cancelTicket(customerName) {
        this.availableTickets++;
        this.emit('cancelled', customerName);
    }
    checkAvailability() {
        this.emit('checked', this.availableTickets);
    }
}
let ticketSystem = new TicketBookingSystem(5);

ticketSystem.on('booked', (customerName) => {
    console.log(`Ticket Successfully booked for ${customerName} on ${new Date().toLocaleString()}`)
    console.log(`Tickets Remaining: ${ticketSystem.availableTickets}`);
})
ticketSystem.on('soldout', (customerName) => {
    console.log(`Sorry ${customerName} , No tickets available}`)
})
ticketSystem.on('cancelled', (customerName) => {
    console.log(`${customerName} cancelled the ticket on ${new Date().toLocaleString()}`)
    console.log(`Tickets Remaining: ${ticketSystem.availableTickets}`);
})
ticketSystem.on('checked', (remainingTickets) => {
    console.log(`Tickets Remaining: ${remainingTickets} `)
})

ticketSystem.checkAvailability();
ticketSystem.bookTicket('AAA')
ticketSystem.bookTicket('BBB')
ticketSystem.bookTicket('CCC')
ticketSystem.bookTicket('DDD')
ticketSystem.bookTicket('EEE')
ticketSystem.bookTicket('FFF')
ticketSystem.checkAvailability();