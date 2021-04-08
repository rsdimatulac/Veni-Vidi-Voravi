/********************************** REQUIRES *****************************************/
const express = require('express');
const router = express.Router();

/********************************** ROUTES *****************************************/
router.get('/', (req, res, next) => {
    res.render('welcome-page', {
      needsNavInfo: true
    });
});

router.get('/our-story', (req, res) => {
  res.render('our-story', {
    needsNavInfo: false
  });
});

/********************************** EXPORTS *****************************************/
module.exports = router;
