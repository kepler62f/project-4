const User = require('../models/User')
const Portfolio = require('../models/Portfolio')
const homeController = require('../controllers/homeController')

function signUp (req, res) {
  
  var newPortfolio = new Portfolio({
    name: 'My Portfolio'
  })

  newPortfolio.save(function (err, createdPortfolio) {

    console.log('bbb ', createdPortfolio)

    var newUser = new User({
      name: req.body.user.name,
      email: req.body.user.email,
      password: User.encrypt(req.body.user.password),
      portfolio: [createdPortfolio.id]
    })

    newUser.save(function (err, createdUser) {

      if (err) {
        return res.send(err)
      }
      req.login(createdUser, function(err) {
        if (err) {
          console.log('error from req.login(createdUser, error)')
        } else {
          return res.redirect('/home')        
        }
      })
    })
  }) 
}

module.exports = {
  signUp
}

