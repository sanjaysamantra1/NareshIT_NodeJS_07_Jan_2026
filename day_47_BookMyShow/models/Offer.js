const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
    {
        title: String,
        code: {
            type: String,
            unique: true
        },
        discountType: {
            type: String,
            enum: ["PERCENTAGE", "FLAT"]
        },
        value: Number,
        maxDiscount: Number,
        expiryDate: Date,
        active: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Offer", offerSchema);