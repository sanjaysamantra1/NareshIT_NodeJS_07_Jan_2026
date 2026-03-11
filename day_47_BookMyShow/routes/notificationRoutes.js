const express = require("express");
const router = express.Router();

const {
  sendNotification,
  getNotifications
} = require("../controllers/notificationController");

const { protect } = require("../middleware/authMiddleware");

router.post("/send", protect, sendNotification);

router.get("/", protect, getNotifications);

module.exports = router;