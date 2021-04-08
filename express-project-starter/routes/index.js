const express = require('express');
const router = express.Router();
const { requireAuth, restoreUser } = require("../auth");
const db = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
  const stories = await db.Story.findAll({ 
    order: [['createdAt', 'DESC']]
  });

  res.render('index', { stories, title: 'a/A Express Skeleton Home' });
}));

module.exports = router;
