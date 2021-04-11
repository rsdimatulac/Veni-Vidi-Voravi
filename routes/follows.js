const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');

router.get('/users/:id(\\d+)/followers', requireAuth, asyncHandler(async (req, res) => {
    const followedUserId = parseInt(req.params.id, 10);
    const followedUser = await db.User.findByPk(followedUserId)
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId, {
        include: db.Follow
    })
    const followers = await db.Follow.findAll({
        where: {
            followedUserId
        },
        include: {
            model: db.User,
            include: db.Follow
        }
    })

    const isFollowing = await db.Follow.findOne({
        where: { userId, followedUserId }
    });

    let currentUserFollowing = user.Follows.map(followEntry => followEntry.followedUserId)

    console.log(currentUserFollowing)

    res.render('followers', {
        user,
        userId,
        followedUser,
        followedUserId,
        followers,
        isFollowing,
        currentUserFollowing
    });
}));

router.post('/users/:id(\\d+)/follows', asyncHandler(async (req, res) => {
    const followedUserId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth;

    const follow = await db.Follow.findOne({
        where: { userId, followedUserId }
    });

    if (!follow) {
        await db.Follow.create({ userId, followedUserId });
    } else {
        follow.destroy();
    }
}));


/////////////// MODULE EXPORTS ///////////////////
module.exports = router;
