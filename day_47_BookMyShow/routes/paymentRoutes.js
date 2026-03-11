const express = require("express");
const router = express.Router();

const {
  walletBalance,
  creditWallet,
  debitWallet
} = require("../controllers/paymentController");

const { protect } = require("../middleware/authMiddleware");

router.get("/wallet/balance", protect, walletBalance);

router.post("/wallet/credit", protect, creditWallet);

router.post("/wallet/debit", protect, debitWallet);

module.exports = router;