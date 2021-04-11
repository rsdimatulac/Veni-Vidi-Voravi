const express = require('express');
const { requireAuth } = require("../auth");
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

// GETTING PROFILE
router.get('/users/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const followedUserId = parseInt(req.params.id, 10);
    const followedUser = await db.User.findByPk(followedUserId);

    // FOR THE FOLLOWS
    const { userId } = req.session.auth; // user who's logged in

    const user = await db.User.findByPk(userId)

    const userStories = await db.Story.findAll({
        where: {
            userId: followedUserId
        },
        order: [["createdAt", "DESC"]]
    });

    const isFollowing = await db.Follow.findOne({
        where: { userId, followedUserId }
    });

    const followers = await db.Follow.findAll({
        where: {
            followedUserId
        },
        include: {
            model: db.User,
            as: 'User'
        }
    })

    const following = await db.Follow.findAll({
        where: {
            userId: followedUserId
        },
        include: {
            model: db.User,
            as: 'Follower',
        }
    })

    res.render('profile', {
        title: "Profile Page",
        followedUser,
        userStories,
        csrfToken: req.csrfToken(),
        currentDate: Date.now(),
        userId,
        followedUserId,
        isFollowing,
        user,
        followers,
        following
    });
}));

///////////////// EXPORTS //////////////////////
module.exports = router;
