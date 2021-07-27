const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
  module: String,
  title: String,
  acadYear: String,
  semester: String,
  moduleCoordinator: String,
  email: String,
  major: String,
  studyYear: String,
  otherInfo: String,
  fileName: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

applicationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Application = mongoose.model('Application', applicationSchema)

module.exports = Application