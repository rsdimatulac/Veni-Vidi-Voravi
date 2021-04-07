/********************************** REQUIRES *****************************************/
const express = require('express');
const router = express.Router();

/********************************** ROUTES *****************************************/
router.get('/', (req, res) => {
  res.render('welcome-page');
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