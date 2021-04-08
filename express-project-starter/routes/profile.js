const express = require('express');
const { requireAuth } = require("../auth");
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');


const router = express.Router();

router.get('/users/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const { userId: loggedOnUserId } = req.session.auth;
    const user = await db.User.findByPk(userId);

    const userStories = await db.Story.findAll({
        where: {
            userId
        }
    });

    res.render('profile', { 
        title: "Profile Page", 
        user,
        userId,
        loggedOnUserId,
        userStories, 
        csrfToken: req.csrfToken(),
        currentDate: Date.now() 
    });
}));



///////////////// EXPORTS //////////////////////
module.exports = router;