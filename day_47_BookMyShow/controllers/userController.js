const bcrypt = require("bcrypt");
const User = require("../models/User");
const Wallet = require("../models/Wallet");
const Booking = require("../models/Booking");
const generateToken = require("../utils/generateToken");

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const wallet = await Wallet.create({ user: user._id });

        user.wallet = wallet._id;
        await user.save();

        res.json({
            token: generateToken(user._id),
            user
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        const match = await bcrypt.compare(password, user.password);

        if (!match) return res.status(401).json({ message: "Invalid credentials" });

        res.json({
            token: generateToken(user._id),
            user
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProfile = async (req, res) => {
    const user = await User.findById(req.user.id).populate("wallet");
    res.json(user);
};

exports.updateProfile = async (req, res) => {

    const user = await User.findById(req.user.id);

    user.name = req.body.name || user.name;

    await user.save();

    res.json(user);
};

exports.getUserBookings = async (req, res) => {

    const bookings = await Booking.find({ user: req.user.id })
        .populate("show")
        .populate("seats");

    res.json(bookings);
};
