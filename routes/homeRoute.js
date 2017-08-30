const express = require('express')
const homeRouter = express.Router()
const homeController = require('../controllers/homeController')

homeRouter.get('/', function (req, res) {
  if (req.user) {
    homeController.buildPage(req,res)
  } else {
  	res.redirect('./') // user not signed in; redirect to public Welcome page   	
  }
})

homeRouter.post('/addPosition', function (req, res) {
  if (req.user) {
    homeController.addPosition(req, res)
  } else {
  	res.redirect('./') // user not signed in; redirect to public Welcome page   	
  }
})

homeRouter.post('/sellPosition', function (req, res) {
  if (req.user) {
    homeController.sellPosition(req, res)
  } else {
    res.redirect('./') // user not signed in; redirect to public Welcome page     
  }
})

homeRouter.post('/eodMktPricing', function (req, res) {
  if (req.user) {
    homeController.getEODMarketPrice(req, res)
  } else {
    res.redirect('./') // user not signed in; redirect to public Welcome page     
  }
})

module.exports = homeRouter
