require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const connectDB = require("../config/db");

const User = require("../models/User");
const Movie = require("../models/Movie");
const Event = require("../models/Event");
const Show = require("../models/Show");
const Seat = require("../models/Seat");
const Offer = require("../models/Offer");
const Wallet = require("../models/Wallet");
const City = require("../models/City");
const Venue = require("../models/Venue");

const generateSeats = require("../utils/seatGenerator");

const seedDatabase = async () => {
  try {

    await connectDB();

    console.log("Cleaning database...");

    await User.deleteMany();
    await Movie.deleteMany();
    await Event.deleteMany();
    await Show.deleteMany();
    await Seat.deleteMany();
    await Offer.deleteMany();
    await Wallet.deleteMany();
    await City.deleteMany();
    await Venue.deleteMany();

    console.log("Creating users...");

    const hashedPassword = await bcrypt.hash("password123", 10);

    const admin = await User.create({
      name: "Admin User",
      email: "admin@test.com",
      password: hashedPassword,
      role: "admin"
    });

    const user = await User.create({
      name: "John Doe",
      email: "user@test.com",
      password: hashedPassword
    });

    await Wallet.create({ user: admin._id, balance: 1000 });
    await Wallet.create({ user: user._id, balance: 500 });

    console.log("Creating cities...");

    const city = await City.create({
      name: "Bangalore",
      state: "Karnataka",
      country: "India"
    });

    console.log("Creating venues...");

    const venue = await Venue.create({
      name: "PVR Orion Mall",
      city: city._id,
      address: "Rajajinagar",
      screens: 5
    });

    console.log("Creating movies...");

    const movie1 = await Movie.create({
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-Fi"],
      language: "English",
      duration: 180
    });

    const movie2 = await Movie.create({
      title: "RRR",
      genre: ["Action", "Drama"],
      language: "Telugu",
      duration: 175
    });

    console.log("Creating shows...");

    const show1 = await Show.create({
      movie: movie1._id,
      venue: venue._id,
      startTime: new Date(),
      endTime: new Date(Date.now() + 3 * 60 * 60 * 1000)
    });

    const show2 = await Show.create({
      movie: movie2._id,
      venue: venue._id,
      startTime: new Date(),
      endTime: new Date(Date.now() + 3 * 60 * 60 * 1000)
    });

    console.log("Generating seats...");

    const seats = generateSeats(10, 12);

    const seatDocs = seats.map(seat => ({
      ...seat,
      show: show1._id
    }));

    await Seat.insertMany(seatDocs);

    console.log("Creating events...");

    await Event.create({
      title: "Arijit Singh Live Concert",
      category: "Music",
      venue: venue._id,
      date: new Date(),
      price: 2000
    });

    console.log("Creating offers...");

    await Offer.create({
      title: "WELCOME50",
      code: "WELCOME50",
      discountType: "PERCENTAGE",
      value: 50,
      maxDiscount: 200,
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });

    console.log("Seed data created successfully!");

    process.exit();

  } catch (error) {

    console.error(error);
    process.exit(1);

  }
};

seedDatabase();