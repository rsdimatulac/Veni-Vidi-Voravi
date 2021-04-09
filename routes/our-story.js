/********************************** REQUIRES *****************************************/
const express = require('express');
const router = express.Router();

/********************************** ROUTES *****************************************/
router.get('/', (req, res) => {
  res.render('our-story',
  {
    needsNavInfo: false,
    isLoggedIn: req.session.auth
  });
});


/********************************** EXPORTS *****************************************/
module.exports = router;
