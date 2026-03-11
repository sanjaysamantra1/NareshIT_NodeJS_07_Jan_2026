const Movie = require("../models/Movie");
const Show = require("../models/Show");
const Seat = require("../models/Seat");
const Review = require("../models/Review");

exports.getMovies = async (req, res) => {

  const movies = await Movie.find();

  res.json(movies);
};

exports.getMovieById = async (req, res) => {

  const movie = await Movie.findById(req.params.id);

  res.json(movie);
};

exports.getShowtimes = async (req, res) => {

  const shows = await Show.find({ movie: req.params.id }).populate("venue");

  res.json(shows);
};

exports.getSeats = async (req, res) => {

  const seats = await Seat.find({ show: req.params.showId });

  res.json(seats);
};

exports.addReview = async (req, res) => {

  const review = await Review.create({
    user: req.user.id,
    movie: req.params.id,
    rating: req.body.rating,
    comment: req.body.comment
  });

  res.json(review);
};

exports.getReviews = async (req, res) => {

  const reviews = await Review.find({ movie: req.params.id }).populate("user");

  res.json(reviews);
};