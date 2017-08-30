const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instrumentSchema = new Schema({
  name: String,
  databaseCode: String,
  ticker: String,
  inceptionDate: Date,
  benchmarkIndex: String
})

const Instrument = mongoose.model('Instrument', instrumentSchema)

module.exports = Instrument
