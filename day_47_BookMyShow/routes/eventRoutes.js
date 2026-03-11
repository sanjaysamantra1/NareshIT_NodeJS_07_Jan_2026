const express = require("express");
const router = express.Router();

const {
  getEvents,
  getEventById,
  bookEvent,
  cancelEvent,
  addReview
} = require("../controllers/eventController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getEvents);

router.get("/:id", getEventById);

router.post("/book", protect, bookEvent);

router.post("/cancel", protect, cancelEvent);

router.post("/:id/review", protect, addReview);

module.exports = router;