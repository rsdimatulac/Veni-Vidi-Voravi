'use strict';
// Importing User so that I can query with it
const { User, Story } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    function makeClaps(numUsers, numStories, numClaps) {
      const claps = [];
      let pairs = [];

      for (let i = 0; i < numClaps; i++) {
        let newPair = [Math.floor(Math.random() * numStories + 1), Math.floor(Math.random() * numUsers + 1)]
        let exists = pairs.find(el => el[0] === newPair[0] && el[1] === newPair[1])

        if(!exists) {
          pairs.push(newPair);
          claps.push({
            storyId: newPair[0],
            userId: newPair[1],
            createdAt: new Date(),
            updatedAt: new Date()
          })
        }
      }
      return claps;
    }
    const numUsers = await User.count();
    const numStories = await Story.count();
    let newClaps = makeClaps(numUsers, numStories, 1500);
    return queryInterface.bulkInsert('Claps', newClaps, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Claps', null, {});
  }
};
