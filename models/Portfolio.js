const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Portfolio name required']
  },
  positions: [{
    type: Schema.Types.ObjectId,
    ref: 'Position'
  }]
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio
