var express = require('express');
var router = express.Router();
const { fetchUsers } = require('../controllers/user.controllers');

// User Routes
router.get('/', fetchUsers);

module.exports = router;
