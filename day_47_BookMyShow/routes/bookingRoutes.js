const express = require("express");
const router = express.Router();

const {
  bookSeats,
  cancelBooking
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");

router.post("/book", protect, bookSeats);

router.post("/:id/cancel", protect, cancelBooking);

module.exports = router;