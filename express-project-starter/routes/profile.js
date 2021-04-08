const express = require('express');
const { requireAuth } = require("../auth");
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');


const router = express.Router();

router.get('/users/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (res, req, next) => {
    // const { userId } = req.session.auth;
    // console.log("this is the user", userId);
    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);

    if (!user) {
        res.status(404)
        next();
    }

    res.render('profile', { title: "Hello", user, csrfToken: req.csrfToken() });
}));



///////////////// EXPORTS //////////////////////
module.exports = router;