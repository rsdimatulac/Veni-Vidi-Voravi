
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
router.get('/create', csrfProtection, requireAuth, (req, res) => {
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
        res.redirect(`/stories/${story.id}`);
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

// VIEWING THE STORY

router.get('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId, { include: db.User }); // I added the include
    if (!story) {
        res.status(404);
        next();
    }

    const clapCount = await db.Clap.findAndCountAll({
        where: {
            storyId
        },
    });

    const comments = await db.Comment.findAll({
        where: {
            storyId
        },
        order: [['createdAt', 'DESC']],
        include: db.User
    })
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);

    const userClap = await db.Clap.findOne({ where: { storyId, userId }});

    res.render('story-view', {
        title: story.title,
        story,
        csrfToken: req.csrfToken(),
        user,
        comments,
        clapCount: clapCount.count,
        userClap,
        currentDate: Date.now(),
        userId
    });
}));

const commentValidators = [
    check('comment')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for the comment')
        .isLength({ max: 280 })
        .withMessage('Comment must not be more than 280 characters long'),
];

// POSTING A COMMENT
router.post('/:id(\\d+)/comments', csrfProtection, commentValidators, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);
    const { comment } = req.body;
    const comments = await db.Comment.findAll({
        where: {
            storyId
        },
        order: [['createdAt', 'DESC']],
        include: db.User // ADDED
    });

    const newComment = db.Comment.build({
        storyId,
        content: comment,
        userId
    })

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await newComment.save();

        res.redirect(`/stories/${storyId}`);
        //TODO: Maybe change redirect to just display comment on page without refreshing
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('story-view', {
            comments,
            csrfToken: req.csrfToken(),
            errors,
            user,
            story
        });
    }
}))

// COMMENTED OUT SINCE WE'RE USING A MODAL INSTEAD OF RENDERING A WHOLE PAGE
// GET THE EDIT FORM
// router.get('/:id(\\d+)/edit', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
//     const storyId = parseInt(req.params.id, 10);
//     const story = await db.Story.findByPk(storyId);
//     const { userId } = req.session.auth;
//     const user = await db.User.findByPk(userId);

//     // to check if the user made that story
//     if ( userId !== story.userId ) {
//         res.status(403); // Forbidden
//         throw new Error("Forbidden")
//         // TODO: Instead to throw error, redirect to a stylized Error Page
//     };

//     res.render('story-edit', {
//         title: 'Edit your Story',
//         story,
//         csrfToken: req.csrfToken(),
//         user
//     });
// }));

// EDITING AND UPDATING THE STORY

router.post('/:id(\\d+)/edit', csrfProtection, storyValidators, asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const storyToUpdate = await db.Story.findByPk(storyId);
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);

    const { title, imageSrc, content } = req.body;

    const story = { title, imageSrc, content };

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await storyToUpdate.update(story);

        console.log("URLLLLL", res.local.url)
        // TODO: If you're on the view story page, you must redirect back to the view story
        // TODO: If you're on the profile page, you must redirect back to the profile page
        
        if (req.baseUrl === "/stories") {
            res.redirect(`/stories/${storyId}`)
        } else {
            res.redirect(`/users/${userId}`);
        }

    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('story-edit', {
            title: 'Edit your Story',
            story: { ...story, id: storyId },
            errors,
            csrfToken: req.csrfToken(),
            user,
            userId
        });
    }
}));

// DELETING A STORY

router.post('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
        const storyId = parseInt(req.params.id, 10);
        const story = await db.Story.findByPk(storyId);
        const { userId } = req.session.auth;
        await story.destroy();
        // you go back to the user's page when delete button is clicked
        res.redirect(`/users/${userId}`);
}));

module.exports = router;
