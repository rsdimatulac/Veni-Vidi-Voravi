const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth');

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken()
  });
});

const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 75 })
    .withMessage('Email Address must not be more than 75 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/register', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    emailAddress,
    password
  } = req.body;

  const user = db.User.build({
    firstName,
    lastName,
    emailAddress
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPW = await bcrypt.hash(password, 10);
    user.hashedPW = hashedPW;
    await user.save();
    loginUser(req, res, user);
    res.redirect('/'); // double check that this should be homepage
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-register', {
      title: 'Register',
      user,
      errors,
      csrfToken: req.csrfToken()
    });
  }
}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
