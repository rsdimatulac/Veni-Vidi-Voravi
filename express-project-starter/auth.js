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
  if (!res.locals.authenticated) {
    return res.redirect('/users/login'); //double check route accuracy w/ wiki front-end routes // maybe change to just login
  } // figure out if adding page to tell someone they are not authorized to view this page or if just reroute to login
  return next();
};

const restoreUser = async (req, res, next) => {

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
  
  const logoutUser = (req, res) => {
    delete req.session.auth;
  };
  
  const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
      return res.redirect('/users/login'); //double check route accuracy w/ wiki front-end routes // maybe change to just login
    } // figure out whether or not to route someone to welcome page etc
    return next();
  };
  
  const restoreUser = async (req, res, next) => {
  
    if (req.session.auth) {
      const { userId } = req.session.auth;
  
      try {
        const user = await db.User.findByPk(userId);
  
        if (user) {
          res.locals.authenticated = true;
          res.locals.user = user;
          next();
        }
      } catch (err) {
        res.locals.authenticated = false;
        next(err);
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};
