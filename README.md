# Welcome to Veni, Vidi, Voravi! <img align="right" src="public/images/logo.png" width="20" height="20">  

### **Live Link: [Veni Vidi Voravi](https://venividivoravi.herokuapp.com/users/login)**

Veni, Vidi, Voravi is inspired by [Medium](https://medium.com/) and allows users to share and discover experiences from different culinary adventures. Users can browse, create, and edit their own stories, and leave comments or claps on other stories they found enjoyable. 

#### Welcome View
![Welcome Page View - PLACEHOLDER](public/images/welcome-page.gif)

#### Home View
![Home Page View - PLACEHOLDER](/public/images/home-page.gif)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Read our [wiki](https://github.com/rsdimatulac/Veni-Vidi-Voravi/wiki)
- Check out our [mock up](https://xd.adobe.com/view/d624d3bf-eb54-41ef-9911-aa0c0d704abf-8377/specs/)

##  Technologies
**Front-End**
- Javascript
- HTML (rendering through PUG templating)
- CSS
- Font Awesome
- Hosted on Heroku

**Back-End**
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [csurf](https://www.npmjs.com/package/csurf)
- [dotenv](https://www.npmjs.com/package/dotenv) / [dotenv-cli](https://www.npmjs.com/package/dotenv-cli)
- **built with [express](https://expressjs.com/)**
- [express-session](https://www.npmjs.com/package/express-session)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [faker](https://www.npmjs.com/package/faker)
- [http-errors](https://www.npmjs.com/package/http-errors)
- [morgan](https://www.npmjs.com/package/morgan)
- [nodemon](https://www.npmjs.com/package/nodemon)
- **uses [postgreSQL](https://www.postgresql.org/) database**
- [pug](https://pugjs.org/api/getting-started.html)
- [sequelize](https://www.npmjs.com/package/sequelize) / [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

## Primary Components 
- User authentication is handled using bcryptjs library for password hashing.
- Only grants access to features like creating and editing stories to authorized users.
- Designed around a relational database schema, which allows users to create, edit, clap, and comment on stories with dynamic data and rendering.
- Makes use of AJAX / API Routes to render elements such as clapping asynchronously.
- Includes csrf attack protection and performs front-end and back-end validation on forms

## Code Highlights / Challenges 
- We quickly found a huge bug dealing with storing cookies — when a user logged in and rerouted themselves back to welcome page that only logged out users can access, we were left hanging after trying to log back in (even though we never logged out).

## Future Implementations 
 - Topics / Categories / Tags
- Bookmarks
- Claps on comments
- Filtering Stories
- Display Followers/Following List on Profile Page

## Contributors
Huge shout out to those that contributed to this project:
- [@rsdimatulac](https://github.com/rsdimatulac) 🚁
- [@hye-kim](https://github.com/hye-kim) 🎴
- [@ssmall1](https://github.com/ssmall1) 🌿
- [@B-Salinas](https://github.com/B-Salinas) 👾

---

_I came, I saw, I devoured._
