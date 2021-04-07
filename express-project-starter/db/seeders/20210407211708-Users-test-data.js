'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
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
          profilePic: 'https://static.wikia.nocookie.net/scoobydoo/images/8/82/Shaggy_Rogers.png/revision/latest?cb=20201229020708',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Scoobert',
          lastName: 'Doo',
          emailAddress: 'scooby-doo@gmail.com',
          about: 'Ruh-roh RAGGY!!!',
          hashedPW: await bcrypt.hash("Test7!", 10),
          profilePic: 'https://static.wikia.nocookie.net/scoobydoo/images/5/53/Scooby-Doo.png/revision/latest/scale-to-width-down/350?cb=20201229020509',
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
          profilePic: 'https://avatars.githubusercontent.com/u/76968726?v=4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Auguste',
          lastName: 'Gustav',
          emailAddress: 'ilovefood@gmail.com',
          about: 'A chef makes. A thief takes.',
          hashedPW: await bcrypt.hash("Test10!", 10),
          profilePic: 'https://static.wikia.nocookie.net/disney/images/9/95/Profile_-_Auguste_Gusteau.jpg/revision/latest/scale-to-width-down/350?cb=20190626003645',
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
          firstName: 'Alfredo',
          lastName: 'Linguini',
          emailAddress: 'alfredosauce@gmail.com',
          about: "I know this sounds insane, but... well, the truth sounds insane sometimes, but that doesn't mean it's not. Uh, the, the truth. And the truth is, I have no talent at all. But this rat, he's the one behind these recipes, he's the cook! The real cook.",
          hashedPW: await bcrypt.hash("Test12!", 10),
          profilePic: 'https://static.wikia.nocookie.net/disney/images/1/16/Profile_-_Linguini.jpeg/revision/latest?cb=20210304151437',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Colette',
          lastName: 'Tatou',
          emailAddress: 'c.tatou@gmail.com',
          about: 'The toughest cook in the kitchen',
          hashedPW: await bcrypt.hash("Test13!", 10),
          profilePic: 'https://static.wikia.nocookie.net/disney/images/a/a4/Profile_-_Colette_Tatou.jpg/revision/latest/top-crop/width/360/height/450?cb=20190626002847',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Anton',
          lastName: 'Ego',
          emailAddress: 'a.ego@gmail.com',
          about: `Amusing title... "Anyone Can Cook". What's even more amusing is that Gusteau actually seems to believe it. I, on the other hand, take cooking seriously, and no, I don't think anyone can do it.`,
          hashedPW: await bcrypt.hash("Test14!", 10),
          profilePic: 'https://static.wikia.nocookie.net/disney/images/9/91/Profile_-_Anton_Ego.jpg/revision/latest?cb=20190626003849',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Spongebob',
          lastName: 'Squarepants',
          emailAddress: 'spongepants@gmail.com',
          about: "I'm ready!",
          hashedPW: await bcrypt.hash("Test15!", 10),
          profilePic: 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.channel3000.com/content/uploads/2020/06/S108767171-1024x576.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Barnacle',
          lastName: 'Mayhem',
          emailAddress: 'mothermayhem@yahoo.com',
          about: "I put all of Mermaid Man's white clothes in the washer, with a red sock!",
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
          profilePic: 'https://static.wikia.nocookie.net/disney/images/5/55/Profile_-_Mr._Potato_Head.jpeg/revision/latest/scale-to-width-down/516?cb=20190313050826',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Buzz',
          lastName: 'Lightyear',
          emailAddress: 'buzzlightyear@toystory.com',
          about: 'To Infinity and Beyond!',
          hashedPW: await bcrypt.hash("Test19!", 10),
          profilePic: 'https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest/scale-to-width-down/516?cb=20190623020017',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'David',
          lastName: 'Kim',
          emailAddress: 'davidkim@gmail.com',
          about: 'I love boba!',
          hashedPW: await bcrypt.hash("Abc123!", 10),
          profilePic: 'https://imgur.com/a/SlC80VH',
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
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
