require('dotenv').config()
const User = require('../models/User')
const Portfolio = require('../models/Portfolio')
const Position = require('../models/Position')
const Instrument = require('../models/Instrument')
var request = require('request')

// render initial page upon log in or refresh 
function buildPage (req, res) {

	Instrument.find({}, function (err, instrumentsList) {
    	if (err) res.send(err)

    	User
		.findOne({_id: req.user.id})
		.exec(function (err, foundUser) {

			Portfolio
			.findOne({_id: foundUser.portfolio[0]})
			.exec(function (err, foundPortfolio) {

				if (!foundPortfolio) {
					res.render('home/home', {
			  			userDisplayName: req.user.name, 
			  			portMktVal: 5, // marketValue(req, res),
			  			instrumentsList: instrumentsList
		  			})

				} else {

					Position // find all positions given an array of positions IDs  
					.find({
						_id: {
							$in: foundPortfolio.positions
						}
					}, function(err, foundInstruments) {
						// populate an array of positions
						Instrument.populate(foundInstruments, 'instrument', function (err, populatedInstruments) {

							//format price: 2 decimal places
							var formattedArr = []
							for (var i = 0; i < populatedInstruments.length; i++) {
								
								var formattedObj = {
									id : populatedInstruments[i]._id,
									name : populatedInstruments[i].instrument.name,
									quantity : populatedInstruments[i].quantity,
									unitCost : 0
								}
								var formattedPrice = '$' + populatedInstruments[i].unitCost.toFixed(2)
								formattedObj.unitCost = formattedPrice
								formattedArr.push(formattedObj)
							}

							res.render('home/home', {
					  			userDisplayName: req.user.name, 
					  			portMktVal: 6, //dummmy value; marketValue(req, res),
					  			instrumentsList: instrumentsList,
					  			portHolding: formattedArr // populatedInstruments 				  		
				  			})
				  			console.log('buildpage rendering is done...',Date())
						})
					})								
				}
			})
		})		    	
	})
}

// buy ETF
function addPosition (req, res) {

	//getEODMarketPrice for buy transaction 
	Instrument
	.findOne({_id: req.body.instrumentID})
	.exec(function (err, foundInstrument) {

		var url = process.env.QUANDL_URL + foundInstrument.databaseCode + '/' + foundInstrument.ticker + '/data.json?api_key=' + process.env.QUANDL_API_KEY

		request(url, function (err, apiRes, data) {
	  		console.log('error:', err); // Print the error if one occurred
	  		console.log('statusCode:', apiRes && apiRes.statusCode); // Print the response status code if a response was received
          	
          	var parseData = JSON.parse(data)
          	var eodMktPrice = parseData.dataset_data.data[0][4]
          	
          	User
			.findOne({_id: req.user.id})
			.exec(function (err, foundUser) {

				// simulate spot prices at time of 'buy', +/- 2% fluctuation from previous eod price
				var max = 1.02 * eodMktPrice
				var min = .98 * eodMktPrice
				transactionPrice = (Math.random() * (max - min) + min).toFixed(2)

				Portfolio
				.findOne({_id: foundUser.portfolio[0]})
				.exec(function (err, foundPortfolio) {


					var newPosition = new Position ({
					  date: new Date().toISOString(),
					  quantity: 1, // current default
					  unitCost: transactionPrice,
					  instrument: req.body.instrumentID // only one instance of instrument to one position
					})

					newPosition.save(function (err, savedPosition) {
						if (err) res.send(err)						
			      			
			      			foundPortfolio.positions.push(savedPosition._id)
							foundPortfolio.save(function (err, savePortfolio) {				
							savedPosition
							.populate('instrument', function (err, populatedPosition) {
								console.log('in newpos.save: ', populatedPosition)
								var formattedObj = {
									id : populatedPosition._id,
									name : populatedPosition.instrument.name,
									quantity : populatedPosition.quantity,
									unitCost : 0
								}
								var formattedPrice = '$' + populatedPosition.unitCost.toFixed(2)
								formattedObj.unitCost = formattedPrice
								res.send({
									savedPosition: formattedObj //populatedPosition
								})
							})
						})
					})
				}) 
			})
		})  // request(url, function (err, apiRes, data)
	}) // Instrument.findOne().exec(function (err, foundInstrument) {	
}

// sell ETF
function sellPosition (req, res) {

	User
	.findOne({_id: req.user.id})
	.exec(function (err, foundUser) {

		Portfolio
		.findOne({_id: foundUser.portfolio[0]})
		.exec(function (err, foundPortfolio) {

				if (foundPortfolio) {

					// remove position document from Position collection
					Position 
					.findOneAndRemove({_id: req.body.positionID}, function (err, deletedPosition) {
						
						if (err) res.send(err)
						
						// remove position ID from user's portfolio						
						var index = foundPortfolio.positions.indexOf(req.body.positionID)
						if (index !== -1) {
							foundPortfolio.positions.splice(index, 1) 
						} else {
							//handle error!
						}
						foundPortfolio.save(function (err) {
							var response = {
        						deletedId: deletedPosition._id
    						}
    						res.send(response)
						})						
					})

				}
			})
	})
}	

// get ETF price from API
function getEODMarketPrice (req, res) {

	Instrument
	.findOne({_id: req.body.instrumentID})
	.exec(function (err, foundInstrument) {

		var url = process.env.QUANDL_URL + foundInstrument.databaseCode + '/' + foundInstrument.ticker + '/data.json?api_key=' + process.env.QUANDL_API_KEY

		request(url, function (err, apiRes, data) {
	  		console.log('error:', err); // Print the error if one occurred
	  		console.log('statusCode:', apiRes && apiRes.statusCode); // Print the response status code if a response was received

	  		res.send(data)

		})
	})
}

module.exports = {
	buildPage,
	addPosition,
	sellPosition,
	getEODMarketPrice
}
