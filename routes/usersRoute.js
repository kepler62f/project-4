const express = require('express')
const usersRouter = express.Router()
const usersController = require('../controllers/usersController')
const authController = require('../controllers/usersController')
const passport = require('../config/passport')

// path name
usersRouter.get('/signUp', function (req, res) {
  res.render('users/signUp') // view name
})

usersRouter.get('/signIn', function (req, res) {
  if (!req.user) {
  	res.render('users/signIn')
  } else {
  	// to be handled
  }
})

usersRouter.get('/errorMsg', function (req, res) {
  res.render('users/errorMsg')
})

usersRouter.post('/signIn',
 passport.authenticate('local', {
   successRedirect: '/home',
   failureRedirect: 'errorMsg'
}))

usersRouter.post('/signUp', usersController.signUp)
	//console.log('New user created successfully. Directing to portfolio home...')
	//console.log()
	// passport.authenticate('local', {
	// 	successRedirect: '/home',
 //   		failureRedirect: 'errorMsg'
	// })

usersRouter.get('/signOut', function (req, res) {
	req.logout()
	res.redirect('../')
})

module.exports = usersRouter
