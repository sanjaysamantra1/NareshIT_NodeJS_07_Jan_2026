const Movie = require("../models/Movie");
const Event = require("../models/Event");
const Offer = require("../models/Offer");
const Booking = require("../models/Booking");

exports.addMovie = async (req, res) => {

  const movie = await Movie.create(req.body);

  res.json(movie);
};

exports.updateMovie = async (req, res) => {

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(movie);
};

exports.deleteMovie = async (req, res) => {

  await Movie.findByIdAndDelete(req.params.id);

  res.json({ message: "Movie deleted" });
};

exports.getAllBookings = async (req, res) => {

  const bookings = await Booking.find()
    .populate("user")
    .populate("show");

  res.json(bookings);
};