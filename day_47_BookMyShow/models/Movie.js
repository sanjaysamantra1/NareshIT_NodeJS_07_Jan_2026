const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true
        },
        description: String,
        genre: [String],
        language: String,
        duration: Number,
        releaseDate: Date,
        poster: String,
        rating: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);