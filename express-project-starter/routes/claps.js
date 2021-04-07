const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils');
const db = require('../db/models');

router.post('/stories/:id(\\d+)/claps', asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth;

    const clap = await db.Clap.findOne({
        where: { storyId, userId }
    });
    // if clap doesn't exist
    if (!clap) {
        // we create that clap
        await db.Clap.create({ storyId, userId });
    } else { // we remove that clap
        clap.destroy();
    }
}));


module.exports = router;