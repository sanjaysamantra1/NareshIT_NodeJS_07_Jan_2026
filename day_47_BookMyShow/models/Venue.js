const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema(
    {
        name: String,
        city: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "City"
        },
        address: String,
        screens: Number
    },
    { timestamps: true }
);

module.exports = mongoose.model("Venue", venueSchema);