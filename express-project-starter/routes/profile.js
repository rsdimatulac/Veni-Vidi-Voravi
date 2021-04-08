const express = require('express');
const { requireAuth } = require("../auth");
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');


const router = express.Router();

router.get('/users/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);

    res.render('profile', { title: "Profile Page", user, csrfToken: req.csrfToken() });
}));



///////////////// EXPORTS //////////////////////
module.exports = router;