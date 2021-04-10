'use strict';
// Same old bcrypt that we've used before
const bcrypt = require('bcryptjs');
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [];

    const numNewUsers = 100;

    for (let i = 1; i < numNewUsers; i++) {
      let newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        emailAddress: faker.internet.email(),
        about: faker.lorem.sentence(),
        hashedPW: bcrypt.hashSync(`Password${i+21}!`, 10),
        profilePic: faker.image.avatar(),
        createdAt: faker.datatype.datetime(),
        updatedAt: new Date()
      };
      users.push(newUser);
    }
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
