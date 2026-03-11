const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            index: true
        },
        show: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Show"
        },
        seats: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Seat"
        }],
        amount: Number,
        status: {
            type: String,
            enum: ["BOOKED", "CANCELLED", "REFUNDED"],
            default: "BOOKED"
        },
        paymentStatus: {
            type: String,
            enum: ["PENDING", "PAID", "FAILED"],
            default: "PENDING"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);