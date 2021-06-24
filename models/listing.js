const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  module: String,
  title: String,
  acadYear: String,
  semester: String,
  moduleCoordinator: String,
  email: String,
  jobScope: String,
  numberOfOpenings: String,
  deadline: String,
  requirements: String,
  applicationProcess: String,
  otherInfo: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  subscribers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
})

listingSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing