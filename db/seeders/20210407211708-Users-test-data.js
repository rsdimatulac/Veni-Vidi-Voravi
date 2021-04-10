'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          firstName: 'Demo',
          lastName: 'User',
          emailAddress: 'demouser@gmail.com',
          about: 'I am here to demonstrate the amazing functionality of this site',
          hashedPW: await bcrypt.hash("Demo1!", 10),
          profilePic: 'https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Earl',
          lastName: 'Eats',
          emailAddress: 'eats@gmail.com',
          about: 'I love to find new places to eat!',
          hashedPW: await bcrypt.hash("Test1!", 10),
          profilePic: 'https://live.staticflickr.com/3428/3771974291_90fc31b864.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Melanie',
          lastName: 'Munches',
          emailAddress: 'munches@gmail.com',
          about: 'I love to find new places to munch!',
          hashedPW: await bcrypt.hash("Test2!", 10),
          profilePic: 'https://live.staticflickr.com/3921/14557684349_c4f5f6a480_b.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Charlie',
          lastName: 'Chows',
          emailAddress: 'chows@gmail.com',
          about: 'I love to find new places to chow!',
          hashedPW: await bcrypt.hash("Test3!", 10),
          profilePic: 'https://live.staticflickr.com/2248/1536260590_d39331aa1a_b.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Iris',
          lastName: 'Imbibes',
          emailAddress: 'imbibes@gmail.com',
          about: 'I love to find new places to imbibe!',
          hashedPW: await bcrypt.hash("Test4!", 10),
          profilePic: 'https://live.staticflickr.com/7445/27572976696_cba5477f53_b.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Fred',
          lastName: 'Forages',
          emailAddress: 'forages@gmail.com',
          about: 'I love to find new places to forage!',
          hashedPW: await bcrypt.hash("Test5!", 10),
          profilePic: 'https://live.staticflickr.com/2228/1546341635_673567e400_b.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Shaggy',
          lastName: 'Rogers',
          emailAddress: 'shaggy_smells@gmail.com',
          about: 'Zoinks!',
          hashedPW: await bcrypt.hash("Test6!", 10),
          profilePic: 'https://s3.amazonaws.com/intanibase/iad_characters/981.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Scoobert',
          lastName: 'Doo',
          emailAddress: 'scooby-doo@gmail.com',
          about: 'Ruh-roh RAGGY!!!',
          hashedPW: await bcrypt.hash("Test7!", 10),
          profilePic: 'https://www.seekpng.com/png/detail/76-760047_zoinks-points-for-education-scooby-doo-images-scooby.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'B',
          lastName: 'Salinas',
          emailAddress: 'b.salinas397@gmail.com',
          about: 'Always looking for more eats.',
          hashedPW: await bcrypt.hash("Password1!", 10),
          profilePic: 'https://avatars.githubusercontent.com/u/31112601?v=4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Schuler',
          lastName: 'Small',
          emailAddress: 'schuler.small.10@gmail.com',
          about: 'Hunting for the best pizza in the world',
          hashedPW: await bcrypt.hash("Voravi22!", 10),
          profilePic: 'https://i.imgur.com/djQeJTK.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Auguste',
          lastName: 'Gusteau',
          emailAddress: 'ilovefood@gmail.com',
          about: ' A chef makes. A thief takes.',
          hashedPW: await bcrypt.hash("Test10!", 10),
          profilePic: 'https://i.pinimg.com/474x/82/f8/35/82f83508f3cb24820441f30864806c43.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Remy',
          lastName: 'The Rat',
          emailAddress: 'remycooks@gmail.com',
          about: 'Bonjour!',
          hashedPW: await bcrypt.hash("Test11!", 10),
          profilePic: 'https://www.talkingnibs.com/wp-content/uploads/2018/08/Ratatouille-Movie-Facts-740x560.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Alfredo ',
          lastName: 'Linguini',
          emailAddress: 'alfredosauce@gmail.com',
          about: `I know this sounds insane, but... well, the truth sounds insane sometimes, but that doesn't mean it's not. Uh, the, the truth. And the truth is, I have no talent at all. But this rat, he's the one behind these recipes, he's the cook! The real cook.`,
          hashedPW: await bcrypt.hash("Test12!", 10),
          profilePic: 'https://pbs.twimg.com/media/D1ZrPqdXQAASe8J.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Colette',
          lastName: 'Tatou',
          emailAddress: 'c.tatou@gmail.com',
          about: 'The toughest cook in the kitchen',
          hashedPW: await bcrypt.hash("Test13!", 10),
          profilePic: 'https://yt3.ggpht.com/ytc/AAUvwni72CIugKUGH9d8gbUerAf6AzRW-czZVBjLEsOc=s900-c-k-c0x00ffffff-no-rj',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Anton',
          lastName: 'Ego',
          emailAddress: 'a.ego@gmail.com',
          about: `Amusing title... "Anyone Can Cook". What's even more amusing is that Gusteau actually seems to believe it. I, on the other hand, take cooking seriously, and no, I don't think anyone can do it.`,
          hashedPW: await bcrypt.hash("Test14!", 10),
          profilePic: 'https://www.insidehighered.com/sites/default/server_files/media/Anton%20Ego.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Spongebob',
          lastName: 'Squarepants',
          emailAddress: 'spongepants@gmail.com',
          about: `I'm ready!`,
          hashedPW: await bcrypt.hash("Test15!", 10),
          profilePic: 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.channel3000.com/content/uploads/2020/06/S108767171-1024x576.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Barnacle',
          lastName: 'Boy',
          emailAddress: 'mothermayhem@yahoo.com',
          about: `I put all of Mermaid Man's white clothes in the washer, with a red sock!`,
          hashedPW: await bcrypt.hash("Test16!", 10),
          profilePic: 'https://pbs.twimg.com/media/D6jEXm_XkAATUuF.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Mr.',
          lastName: 'Potato Head',
          emailAddress: 'mrpotatohead@gmail.com',
          about: 'I love Mrs. Potato Head!',
          hashedPW: await bcrypt.hash("Test18!", 10),
          profilePic: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-enmr1e_871e8eac.jpeg?region=0,0,450,450',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Buzz',
          lastName: 'Lightyear',
          emailAddress: 'buzzlightyear@toystory.com',
          about: 'To Infinity and Beyond!',
          hashedPW: await bcrypt.hash("Test19!", 10),
          profilePic: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-a07syh_9331bd0a.jpeg?region=0%2C0%2C450%2C450',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'David',
          lastName: 'Kim',
          emailAddress: 'davidkim@gmail.com',
          about: 'I love boba!',
          hashedPW: await bcrypt.hash("Abc123!", 10),
          profilePic: 'https://i.imgur.com/Ptb7bVt.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Renerose',
          lastName: 'Dimatulac',
          emailAddress: 'rsdimatulac@gmail.com',
          about: 'Pilot turned Programmer.',
          hashedPW: await bcrypt.hash("Banana1!", 10),
          profilePic: 'https://avatars.githubusercontent.com/u/76712928?v=4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
