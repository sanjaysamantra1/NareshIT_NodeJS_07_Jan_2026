var express = require('express');
var router = express.Router();
const users = require('../../../data/users.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // console.log(users)
  res.render('users', { users: users });
});

module.exports = router;
