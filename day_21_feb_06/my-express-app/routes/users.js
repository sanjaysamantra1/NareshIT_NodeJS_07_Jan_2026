var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

// add all the routes for User
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createNewUser);

module.exports = router;
