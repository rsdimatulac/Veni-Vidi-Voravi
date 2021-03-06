/********************************** REQUIRES *****************************************/
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const { restoreUser } = require("./auth");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { asyncHandler } = require("./routes/utils")

const db = require('./db/models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const storiesRouter = require("./routes/stories");
const welcomeRouter = require('./routes/welcome');
const ourStoryRouter = require('./routes/our-story');
const clapsRouter = require("./routes/claps");
const profileRouter = require("./routes/profile");
const followRouter = require('./routes/follows');

const { sessionSecret } = require('./config');

/********************************** APP SETUP *****************************************/
const app = express();
app.locals.moment = require('moment');

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
    name: 'vvv.sid'
  })
);

// create Session table if it doesn't already exist
store.sync();

app.use(restoreUser);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/stories", storiesRouter);
app.use('/welcome', welcomeRouter);
app.use('/our-story', ourStoryRouter);
app.use(clapsRouter);
app.use(profileRouter);
app.use(followRouter);


// catch 404 and forward to error handler
app.use(async (req, res, next) => {
  next(createError(404));
  return // return added
});

// error handler
app.use(async (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error-page');
  return // return added
});

/********************************** EXPORTS *****************************************/
module.exports = app;
