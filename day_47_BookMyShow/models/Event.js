const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        category: String,
        description: String,
        venue: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Venue"
        },
        date: Date,
        price: Number
    },
    { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);