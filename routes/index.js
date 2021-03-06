const express = require('express');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
  const stories = await db.Story.findAll({
    order: [['createdAt', 'DESC']],
    include: [
      { model: db.User },
      { model: db.Clap }
    ]
  });

  const { userId } = req.session.auth

  const followedUsers = await db.Follow.findAll({
    where: {
        userId
    },
    order: [['createdAt', 'DESC']],
    limit: 16
  });

  const followedUserIds = followedUsers.map(el => el.followedUserId)

  const follows = []

  for (let i = 0; i < followedUserIds.length; i++) {
    follows.push(await await db.User.findByPk(followedUserIds[i]))
  }

  stories.sort((a, b) => b.Claps.length - a.Claps.length)

  res.render('index', { follows, stories });
}));

module.exports = router;
