const Movie = require("../models/Movie");
const Event = require("../models/Event");
const Venue = require("../models/Venue");

exports.search = async (req, res) => {

  const { q } = req.query;

  const movies = await Movie.find({ title: new RegExp(q, "i") });

  const events = await Event.find({ title: new RegExp(q, "i") });

  const venues = await Venue.find({ name: new RegExp(q, "i") });

  res.json({
    movies,
    events,
    venues
  });
};

exports.recommendations = async (req, res) => {

  const movies = await Movie.find().limit(5);

  res.json(movies);
};

exports.filters = async (req, res) => {

  res.json({
    genres: ["Action", "Comedy", "Drama"],
    languages: ["English", "Hindi", "Telugu"]
  });
};