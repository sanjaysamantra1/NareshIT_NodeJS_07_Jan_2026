const express = require("express");
const router = express.Router();

const {
  getMovies,
  getMovieById,
  getShowtimes,
  getSeats,
  addReview,
  getReviews
} = require("../controllers/movieController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getMovies);

router.get("/:id", getMovieById);

router.get("/:id/showtimes", getShowtimes);

router.get("/:id/reviews", getReviews);

router.post("/:id/review", protect, addReview);

/*
NOTE:
Seats endpoint expects showId as query param
example:
GET /movies/seats?showId=123
*/
router.get("/seats", getSeats);

module.exports = router;