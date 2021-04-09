/********************************** REQUIRES *****************************************/
const express = require('express');
const router = express.Router();

/********************************** ROUTES *****************************************/
router.get('/', (req, res, next) => {
    res.render('welcome', {
      needsNavInfo: true,
      isLoggedIn: req.session.auth
    });
});

/********************************** EXPORTS *****************************************/
module.exports = router;
