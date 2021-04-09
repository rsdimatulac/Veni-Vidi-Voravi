# Welcome to Veni, Vidi, Voravi

### **Live Link: [Veni Vidi Voravi](https://venividivoravi.herokuapp.com/users/login)**

Veni, Vidi, Voravi is inspired by [Medium](https://medium.com/) and allows users to share and discover experiences from different culinary adventures. Users can browse, create, and edit their own stories, and leave comments or claps on other stories they found enjoyable. 

#### Welcome View
![Welcome Page View - PLACEHOLDER](/readme-images/welcome-page.gif)

#### Home View
![Home Page View - PLACEHOLDER](/readme-images/home-page.gif)


## Prerequisites
Before you begin, ensure you have met the following requirements:
- ~~Veni Vidi Voravi is supported on Mac / Linux / Windows machines.~~
- Read our [wiki](https://github.com/rsdimatulac/Veni-Vidi-Voravi/wiki)
- Check out our [mock up](https://xd.adobe.com/view/d624d3bf-eb54-41ef-9911-aa0c0d704abf-8377/specs/)

##  Technologies
###  Front-End
- Javascript
- HTML (rendering through PUG templating)
- CSS Styling
- Font Awesome
- Favicon ?
- **Did we miss something?**
- Hosted on Heroku

### Back-End
**include links)**  
Our project relies on the following dependencies:
- bcryptjs
- cookie-parser
- csurf
- dotenv / dotenv-cli
- **built with express.js**
- express-session
- express-validator
- faker
- http-errors
- morgan
- nodemon
- **uses postgreSQL database**
- pug
- sequelize / sequelize-cli

## Primary Components ?
**STRAIGHT UP STOLE THIS PART, dont actually use but use as a model** 
-   Secure authentication using bcryptjs library
-   Only grants access to features like saving and cupboards to authorized users
-   Designed around a relational database schema, which allows users to save, rate, and view recipes with dynamic data and rendering
-   Makes use of AJAX to render elements such as ratings asynchronously
-   Includes protection from csrf attacks and performs front-end and back-end validation on forms
- User authentication is handled using BCrypt for password hashing. Passwords are not saved to the database, only password hashes. When users log in, the password they provide is rehashed and checked against the original encrypted password hash to verify credentials. (Is this what we did verbatim??? -- **Also stole this, dont use exaclty**)

## Code Highlights / Challenges ?
TALK ABOUT THAT BIG ASS COOKIE BUG WE CREATED

- We quickly found a huge bug dealing with storing cookies -- when a user logged in and rerouted themselves back to welcome page that only logged out users can access, we were left hanging after trying to log back in (even though we never logged out).

## Future Implementations ?
 - Topics / Categories / Tags
- Bookmarks
- Claps on comments
- Filtering Stories
- Display Followers/Following List on Profile Page

## Contributors
Thanks to the following people who have contributed to this project:
- [@rsdimatulac](https://github.com/rsdimatulac) 🚁
- [@hye-kim](https://github.com/hye-kim) 🎴
- [@ssmall1](https://github.com/ssmall1) 🌿
- [@B-Salinas](https://github.com/B-Salinas) 👾

---

_I came, I saw, I devoured._
