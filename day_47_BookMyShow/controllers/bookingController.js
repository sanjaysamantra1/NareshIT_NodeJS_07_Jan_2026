const Booking = require("../models/Booking");
const Seat = require("../models/Seat");

exports.bookSeats = async (req, res) => {

    const { showId, seatIds, amount } = req.body;

    const seats = await Seat.find({
        _id: { $in: seatIds },
        status: "AVAILABLE"
    });

    if (seats.length !== seatIds.length)
        return res.status(400).json({ message: "Some seats unavailable" });

    await Seat.updateMany(
        { _id: { $in: seatIds } },
        { status: "BOOKED" }
    );

    const booking = await Booking.create({
        user: req.user.id,
        show: showId,
        seats: seatIds,
        amount,
        paymentStatus: "PAID"
    });

    res.json(booking);
};

exports.cancelBooking = async (req, res) => {

    const booking = await Booking.findById(req.params.id);

    booking.status = "CANCELLED";

    await booking.save();

    await Seat.updateMany(
        { _id: { $in: booking.seats } },
        { status: "AVAILABLE" }
    );

    res.json({ message: "Booking cancelled" });
};