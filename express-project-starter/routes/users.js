var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('./db/models');

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken()
  });
});

router.post('/register', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email
  }
}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
