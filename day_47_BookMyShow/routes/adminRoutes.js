const express = require("express");
const router = express.Router();

const {
  addMovie,
  updateMovie,
  deleteMovie,
  getAllBookings
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");

router.post("/movies", protect, addMovie);

router.put("/movies/:id", protect, updateMovie);

router.delete("/movies/:id", protect, deleteMovie);

router.get("/bookings", protect, getAllBookings);

module.exports = router;