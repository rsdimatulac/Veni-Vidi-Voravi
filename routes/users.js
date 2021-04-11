/********************************** REQUIRES *****************************************/
const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth} = require('../auth');

/********************************** VALIDATORS *****************************************/
const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isAlpha()
    .withMessage('First Name must only contain letters')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isAlpha()
    .withMessage('Last Name must only contain letters')
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

const loginValidators = [
  check("emailAddress")
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


/********************************** ROUTERS *****************************************/
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
    emailAddress,
    password
  } = req.body;

  const user = db.User.build({
    firstName,
    lastName,
    emailAddress,
    profilePic: "/images/default-profile-picture.jpg"
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

// asynchandler (async) removed
router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', { title: "Login", csrfToken: req.csrfToken() });
});

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const {
    emailAddress,
    password
  } = req.body;

  const validatorErrors = validationResult(req);
  let errors = [];

  if (validatorErrors.isEmpty()) { // if empty

    const user = await db.User.findOne({ where: { emailAddress } });
    if (user !== null) { // if user's email exist
      const isPassword = await bcrypt.compare(password, user.hashedPW.toString());
      if (isPassword) { // if passwords match
        loginUser(req, res, user);
        return res.redirect("/");
        // return
      } else { // if passwords doesn't match
        errors.push("Login failed for the provided email address and password");
      }
    } else { // if user's email does not exist
      errors.push("Account does not exist. Please register.")
    }
    // res.render("user-login", {
    //   errors,
    //   title: "Login",
    //   emailAddress,
    //   csrfToken: req.csrfToken()
    // });
  } else { // if not empty
    errors = validatorErrors.array().map(error => error.msg)
  };

  res.render("user-login", {
    errors,
    title: "Login",
    emailAddress,
    csrfToken: req.csrfToken()
  });
}));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/welcome');
});
// asynchandler (async) removed
router.post('/demouser', (req, res)=>{
  req.session.auth = { userId: 1 };
  res.redirect('/');
});

/********************************** EXPORTS *****************************************/
module.exports = router;
