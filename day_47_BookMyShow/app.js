const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const searchRoutes = require("./routes/searchRoutes");

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health-check", (req, res) => {
  res.json({ status: "OK", message: "API running" });
});

app.get("/version", (req, res) => {
  res.json({ version: "1.0.0" });
});

app.get("/config", (req, res) => {
  res.json({
    env: process.env.NODE_ENV,
    service: "BookMyShow Backend"
  });
});

app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);
app.use("/payments", paymentRoutes);
app.use("/admin", adminRoutes);
app.use("/notifications", notificationRoutes);
app.use("/search", searchRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;