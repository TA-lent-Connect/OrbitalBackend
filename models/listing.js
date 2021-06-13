const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  module: {
    type: String,
    minLength: 6,
    required: true
  },
  numberOfOpenings: String,
  applicationDeadline: String,
  requirements: String,
  jobScope: [
    {
      type: String
    }
  ],
  otherInfo: String,
  moduleCoordinators: [
    {
      type: String
    }
  ],
  contactEmail: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
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