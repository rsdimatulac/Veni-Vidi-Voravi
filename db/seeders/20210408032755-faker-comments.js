'use strict';
const faker = require("faker");
const { User, Story } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let comments = [];
    const numUsers = await User.count();
    const numStories = await Story.count();

    const numComments = 1500;

    for (let i = 0; i < numComments; i++) {
      let newComment = {
        userId: Math.floor(Math.random() * numUsers + 1),
        content: faker.lorem.sentence(),
        storyId: Math.floor(Math.random() * numStories + 1),
        createdAt: faker.date.recent(),
        updatedAt: new Date(),
      };
      comments.push(newComment);
    }
    return queryInterface.bulkInsert("Comments", comments, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
