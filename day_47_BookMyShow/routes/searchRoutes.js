const express = require("express");
const router = express.Router();

const {
  search,
  recommendations,
  filters
} = require("../controllers/searchController");

router.get("/", search);

router.get("/recommendations", recommendations);

router.get("/filters", filters);

module.exports = router;