
const express = require('express');
const { check, validationResult } = require('express-validator');
const { requireAuth, restoreUser } = require("../auth");
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

const storyValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Title')
        .isLength({ max: 100 })
        .withMessage('Title must not be more than 100 characters long'),
    check('titleImage')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Title Image')
        .isLength({ max: 255 })
        .withMessage('Title Image must not be more than 255 characters long')
        .isURL()
        .withMessage('Title Image must be a valid URL'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Body'),
];


// GETTING THE PAGE FOR CREATING A STORY
router.get('/create', csrfProtection, (req, res) => {
    const story = db.Story.build();
    res.render('story-create', {
        title: 'Create a Story',
        story,
        csrfToken: req.csrfToken(),
    });
});

// CREATING A STORY
router.post('/create', csrfProtection, storyValidators, asyncHandler(async (req, res) => {
    const { title, content, titleImage } = req.body;
    const { userId } = req.session.auth;
    
    const story = db.Story.build({
        title, content, imageSrc: titleImage, userId
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await story.save();
        res.redirect('/stories/:id');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('story-create', {
            title: 'Create a Story',
            story,
            errors,
            csrfToken: req.csrfToken(),
        });
    }
}));

// GETTING THE EDIT FORM
router.get('/stories/:id', csrfProtection, asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);
    res.render('story-edit', {
        title: 'Edit your Story',
        story,
        csrfToken: req.csrfToken(),
    });
}));

// EDITING AND UPDATING THE STORY
router.post('/stories/:id', csrfProtection, storyValidators, asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const storyToUpdate = await db.Story.findByPk(storyId);

    const { title, imageSrc, content } = req.body;

    const story = { title, imageSrc, content };

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await storyToUpdate.update(story);
        res.redirect(`/stories/${storyId}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('story-edit', {
            title: 'Edit your Story',
            story: { ...story, id: storyId },
            errors,
            csrfToken: req.csrfToken(),
        });
    }
}));












router.get('/park/delete/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const parkId = parseInt(req.params.id, 10);
    const park = await db.Park.findByPk(parkId);
    res.render('park-delete', {
        title: 'Delete Park',
        park,
        csrfToken: req.csrfToken(),
    });
}));

router.post('/park/delete/:id(\\d+)', csrfProtection,
    asyncHandler(async (req, res) => {
        const parkId = parseInt(req.params.id, 10);
        const park = await db.Park.findByPk(parkId);
        await park.destroy();
        res.redirect('/parks');
    }));

module.exports = router;
