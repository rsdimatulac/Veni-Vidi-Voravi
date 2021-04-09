'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        content: "Amazing!",
        storyId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        content: "Looks delicious!",
        storyId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: "Uhhhhh",
        storyId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: "WOW",
        storyId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        content: "So yummy",
        storyId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        content: "I wanna try!",
        storyId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        content: "Get out of here",
        storyId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        content: "Holy Mackeral",
        storyId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        content: "yummilicious",
        storyId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        content: "I have to do this",
        storyId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        content: "What in the world",
        storyId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        content: "Cowabunga!",
        storyId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        content: "Hehehehehehehe",
        storyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        content: "This site has the best content",
        storyId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        content: "I don't know why I haven't done this",
        storyId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        content: "You should post more!",
        storyId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        content: "This is awesome!",
        storyId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        content: "I think you should leave",
        storyId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        content: "This story is so well written",
        storyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        content: "I love your writing",
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        content: "I wish I had this right now",
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        content: "Jealous!!",
        storyId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 12,
        content: "OMG",
        storyId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 13,
        content: "I am so hungry",
        storyId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 13,
        content: "this made me not hungry",
        storyId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        content: "I want some of that",
        storyId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        content: "Where's mine??",
        storyId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 15,
        content: "I need this in my life",
        storyId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 15,
        content: "scrumptious",
        storyId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 16,
        content: "How is this possible",
        storyId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 17,
        content: "Yooooooooo",
        storyId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 18,
        content: "This page is way better than medium",
        storyId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 19,
        content: "I love this",
        storyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 20,
        content: "I wish this was about boba",
        storyId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 21,
        content: "I would eat this in the sky!",
        storyId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
