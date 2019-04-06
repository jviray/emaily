const passport = require('passport');

module.exports = app => {
  // Route handler for authentication w/ Google (kickstarts Passport auth flow)
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
