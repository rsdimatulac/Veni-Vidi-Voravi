/********************************** REQUIRES *****************************************/
const express = require('express');
const router = express.Router();

/********************************** ROUTES *****************************************/
router.get('/', (req, res, next) => {
  try {
    console.log("banana");
    res.render('welcome-page');
  } catch (err) {
    next(err);
  }
});

router.get('/register', (req, res) => {
  res.render('user-register');
});

router.get('/login', (req, res) => {
  res.render('user-login');
});

router.get('/our-story', (req, res) => {
  res.render('our-story');
});





/********************************** EXPORTS *****************************************/
module.exports = router;