const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
    {
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        },
        venue: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Venue"
        },
        startTime: Date,
        endTime: Date,
        priceMultiplier: {
            type: Number,
            default: 1
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Show", showSchema);