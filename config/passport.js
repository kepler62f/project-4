const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

// it will store into the session, currently logged in user
// when success => next(null, foundUser)
passport.serializeUser(function (user, next) {
  next(null, user.id)
})

// it will open the session, and convert id stored in session into the actual user object, accessible in req.user
passport.deserializeUser(function (id, next) {
  User.findById(id, function (err, user) {
    next(err, user)
  })
})

// local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
      passReqToCallback: true
    },
    localVerify
  )
)

// verify callback for local strategy
function localVerify (req, passportEmail, passportPassword, next) {
  User
  .findOne({
    email: passportEmail
  })
  .exec(function (err, foundUser) {
    if (err) { // exceptions thrown 
      return next(err) // go to failureRedirect
    }

    if (!foundUser) return next(err)

    if (foundUser.validPassword(passportPassword)) { // email correct
      console.log('success, redirect to /home')
      return next(null, foundUser) // go to successRedirect
    }

    next(err) // password not correct, go to failureRedirect
  })
}

module.exports = passport
