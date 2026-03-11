const Event = require("../models/Event");
const Review = require("../models/Review");

exports.getEvents = async (req, res) => {

    const events = await Event.find().populate("venue");

    res.json(events);
};

exports.getEventById = async (req, res) => {

    const event = await Event.findById(req.params.id).populate("venue");

    res.json(event);
};

exports.bookEvent = async (req, res) => {

    res.json({
        message: "Event booking logic placeholder"
    });
};

exports.cancelEvent = async (req, res) => {

    res.json({
        message: "Event cancel logic placeholder"
    });
};

exports.addReview = async (req, res) => {

    const review = await Review.create({
        user: req.user.id,
        event: req.params.id,
        rating: req.body.rating,
        comment: req.body.comment
    });

    res.json(review);
};