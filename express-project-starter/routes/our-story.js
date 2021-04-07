/********************************** REQUIRES *****************************************/
const express = require('express');
const router = express.Router();

/********************************** ROUTES *****************************************/
router.get('/', (req, res) => {
  res.render('our-story');
});


/********************************** EXPORTS *****************************************/
module.exports = router;