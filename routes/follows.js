const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils');
const db = require('../db/models');

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