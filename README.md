# <img src="public/favicon.ico" width="25" height="25"> Welcome to Veni Vidi Voravi! 

### **Live Link: [Veni Vidi Voravi](https://venividivoravi.herokuapp.com/welcome/)**

_Veni Vidi Voravi_ is inspired by [Medium](https://medium.com/) and allows users to share and discover experiences from different culinary adventures. Users can browse, create, and edit their own stories, and leave comments or claps on other stories they found enjoyable. 

### Welcome View
![Welcome Page View - PLACEHOLDER](public/images/welcome-page-2.gif)

### Home View
![Home Page View - PLACEHOLDER](/public/images/home-page-3.gif)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Read our [wiki](https://github.com/rsdimatulac/Veni-Vidi-Voravi/wiki)
- Check out our [mock up](https://xd.adobe.com/view/d2379a4a-1d94-46e5-8f09-316f9bebba7c-8764/)

##  Technologies
#### Front-End
- Javascript
- HTML (rendering through PUG templating)
- CSS
- Font Awesome
- SVGs provided by [Katerina Limpitsouni](https://undraw.co/)
- Hosted on Heroku

#### Back-End
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) / [csurf](https://www.npmjs.com/package/csurf)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) for user authentication
- **built with [express](https://expressjs.com/)**
- [express-session](https://www.npmjs.com/package/express-session)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [faker](https://www.npmjs.com/package/faker) for generating large amounts of fake data
- **uses [postgreSQL](https://www.postgresql.org/) database**
- [sequelize](https://www.npmjs.com/package/sequelize) / [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

## Features
- User authentication is handled using bcryptjs library for password hashing.
- Grants access to features like creating and editing stories to authorized users only.
- Designed around a relational database schema, which allows users to create, edit, clap, and comment on stories and follow other users with dynamic data and rendering.
- Makes use of AJAX / API Routes to render elements such as clapping and following other users asynchronously.
- Includes csrf attack protection and performs front-end and back-end validation on forms.

## Code Highlights / Challenges 

#### Highlights 
- Creating DRY Pug templates to render.
```pug
.main__col2.col
      - var m = 1;
        while m < 5
          div(class=`main__col2-story`)
            .author
              .picture
                a(href=`/users/${stories[m].User.id}`)
                  img(src=`${stories[m].User.profilePic}` class="profile-pic")
              a(href=`/users/${stories[m].User.id}`) #{stories[m].User.firstName} #{stories[m].User.lastName}
            .title
              a(href=`/stories/${stories[m].id}`) #{stories[m].title}
          div(class=`main__col2-story-image-${m}` style="margin-bottom: 20px;")
            a(href=`/stories/${stories[m].id}`)
              div(class="image story-image" style=`background-image: url('${stories[m].imageSrc}')`)
          - m++
```

- Using AJAX to update our claps functionality without a full-page reload.
```js
document.addEventListener("DOMContentLoaded", () => {
    const clapButton = document.getElementById('clap-button')
    clapButton.addEventListener('click', async () => {
        const storyId = parseInt(clapButton.classList[0], 10);
        const clapImage = document.getElementById('clap-button');
        const clapCount = document.getElementById('clap-count');
        if (clapImage.classList.contains("has-been-clapped")) {
            clapImage.src = '../images/unclapped.png'; 
            clapImage.classList.remove('has-been-clapped');
            clapCount.innerHTML--;
        } else { 
            clapImage.src = '../images/clapped.png';
            clapImage.classList.add('has-been-clapped');
            clapCount.innerHTML++;
        }
        await fetch(`/stories/${storyId}/claps`, { method: 'POST' })
        return
    });
});
```

#### Challenges
- When `npm start` was run, the localhost on the browser was not loading and left us hanging. It was caused by a session cookie that is dependent on the Demo User to login but was deleted when the database was dropped. It was fixed when we deleted the session cookie, and added the Demo User credentials as a seeded sequelize file.
- Initially hosting to Heroku. When we ran into problems locally, we solved this by dropping our databases and re-migrating and seeding. Dropping databases was not recommended on Heroku so we worked around this by:
  - moving our project into the root directory instead of a subfolder within and recreated our .env, .env.example, and .sequelizerc files. 
  - simplified our references in our Migration models.
  - added the `dialectOptions` key to our `config/database.js` folder.
  - updated the value of our `use_env_database` key.
  - Rebuilt our website using `git push heroku` and re-migrated and seeded. 

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
- [@B-Salinas](https://github.com/B-Salinas) 🌀

---

_I came, I saw, I devoured._
