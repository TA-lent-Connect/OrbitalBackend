const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
    name: String,
    file: Buffer,
})

uploadSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Upload = mongoose.model('Upload', uploadSchema)

module.exports = Upload