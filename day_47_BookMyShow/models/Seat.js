const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
    {
        show: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Show",
            index: true
        },
        seatNumber: String,
        row: String,
        column: Number,
        type: {
            type: String,
            enum: ["VIP", "REGULAR"]
        },
        price: Number,
        status: {
            type: String,
            enum: ["AVAILABLE", "HELD", "BOOKED"],
            default: "AVAILABLE"
        },
        holdExpiresAt: Date
    },
    { timestamps: true }
);

module.exports = mongoose.model("Seat", seatSchema);