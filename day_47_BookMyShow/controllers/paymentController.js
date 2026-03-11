const Wallet = require("../models/Wallet");

exports.walletBalance = async (req, res) => {

  const wallet = await Wallet.findOne({ user: req.user.id });

  res.json(wallet);
};

exports.creditWallet = async (req, res) => {

  const { amount } = req.body;

  const wallet = await Wallet.findOne({ user: req.user.id });

  wallet.balance += amount;

  wallet.transactions.push({
    type: "CREDIT",
    amount
  });

  await wallet.save();

  res.json(wallet);
};

exports.debitWallet = async (req, res) => {

  const { amount } = req.body;

  const wallet = await Wallet.findOne({ user: req.user.id });

  if (wallet.balance < amount)
    return res.status(400).json({ message: "Insufficient balance" });

  wallet.balance -= amount;

  wallet.transactions.push({
    type: "DEBIT",
    amount
  });

  await wallet.save();

  res.json(wallet);
};