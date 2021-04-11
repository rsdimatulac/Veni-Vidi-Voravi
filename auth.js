const db = require('./db/models');

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const logoutUser = (req, res) => {
  delete req.session.auth;
};

const requireAuth = (req, res, next) => {
  try {
    if (!res.locals.authenticated) {
      return res.redirect('/welcome'); //double check route accuracy w/ wiki front-end routes // maybe change to just login
    }
    return next();
  } catch (err) {
    return next(err); // return added
  }
};

const restoreUser = async (req, res, next) => {

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        return next(); // return added
      }
    } catch (err) {
      res.locals.authenticated = false;
      return next(err); // return added
    }
  } else {
    res.locals.authenticated = false;
    return next(); // return added
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};
