

HOME PAGE 
    - route "/"
    - Nav Bar with Logo, Our Story, Create a Story button, Logout Button, Profile Button (Picture)
        - `Note: Buttons must be redirected to the proper routes`
    - Display stories ordered by most claps
    - Footer with GitHub Logo and Copyright
    - Render index.pug
    - Styling the Page, refer to MockUp

LANDING PAGE 
    - route of /welcome 
    - Nav Bar
    - Main Body
    - Footer
    - Render welcome.pug
    - Styling the Page, refer to MockUp

OUR STORY PAGE 
    - route of /our-story
    - Nav Bar
    - Main Body - stories
    - Footer
    - Render our-story.pug
    - Styling the Page, refer to MockUp

PROFILE PAGE 
    - route of /users/:id
    - Nav Bar
    - User Details and all Stories they wrote
    - Footer
    - Render user-profile.pug
    - Styling the Page, refer to MockUp

CREATE STORY PAGE 
    - route of /stories/create
    - FORMS, Title, Content, Image
    - redirect to /stories/:id
    - Render story-create.pug 
    - Styling the Page, refer to MockUp
    
VIEWING STORY PAGE
    - route of /stories/:id
    - Title, Image, Author (Full Name), Content
        - Comment Box will be below the story
        - Displaying `all comments and claps` associated in the story
    - Redirect to "/" (after a story is deleted)
    - render story-view.pug
    - Styling the Page, refer to MockUp

EDITING STORY PAGE
    - route of /stories/:id
    - Displays the Title, Content, ImageSrc with its prepopulated values
    - redirect to /stories/:id
    - Render story-edit.pug 
    - Styling the Page, refer to MockUp

REGISTER PAGE 
    - route of /users/register
    - Nav Bar, Footer
    - Create a new user in the DB (Forms)
    - Display any validation errors
    - Redirect "/"
    - Render user-register.pug
    - Styling the Page, refer to MockUp

LOGIN PAGE 
    - route of /users/login
    - Nav Bar, Footer
    - Display Forms for login, and validation errors
    - Redirect to "/"
    - Render user-login.pug
    - Styling the Page, refer to MockUp