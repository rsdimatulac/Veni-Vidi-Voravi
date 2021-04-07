'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'Demo',
        lastName: 'User',
        emailAddress: 'demouser@gmail.com',
        about: '',
        profilePic: 'picture',
        hashedPW: '$2a$10$znYx9LYUijRNv3opHtrq1.ZSMCrRXSyE6ACt6Ss0.658U1WlcBRVW',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
