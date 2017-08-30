const express = require('express')
const portfolioRouter = express.Router()
// const portfolioController = require('../controllers/portfolioController')

portfolioRouter.get('/', function (req, res) {
  res.send("Hello, you can creat new portfolio here")
})

module.exports = portfolioRouter
