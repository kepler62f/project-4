const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please type your name']
  },
  email: {
    type: String,
    required: [true, 'Please type your email']
  },
  password: String,
  portfolio: [{
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  }]
})

userSchema.methods.validPassword = function (givenPassword) {
  return bcrypt.compareSync(givenPassword, this.password)
}

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

const User = mongoose.model('User', userSchema)

module.exports = User
