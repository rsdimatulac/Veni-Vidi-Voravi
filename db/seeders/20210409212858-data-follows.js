'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    function makeFollows(numUsers, numFollowed, numFollows) {
      const follows = [];
      let pairs = [];
      
      for (let i = 0; i < numFollows; i++) {
        let newPair = [Math.floor(Math.random() * numFollowed + 1), Math.floor(Math.random() * numUsers + 1)]
        let exists = pairs.find(el => el[0] === newPair[0] && el[1] === newPair[1])

        if(!exists) {
          pairs.push(newPair);
          follows.push({
            userId: newPair[0],
            followedUserId: newPair[1],
            createdAt: new Date(),
            updatedAt: new Date()
          })
        }
      }
      return follows;
    }
    const numUsers = await User.count();
    const numFollowed = await User.count();
    let newFollows = makeFollows(numUsers, numFollowed, 500);
    return queryInterface.bulkInsert('Follows', newFollows, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Follows', null, {});
  }
};