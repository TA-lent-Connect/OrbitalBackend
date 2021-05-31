const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://Jianning:${password}@orbital.b3mdn.mongodb.net/modulelistings?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const listingSchema = new mongoose.Schema({
  module: String
})

const Listing = mongoose.model('Listing', listingSchema)

const listing = new Listing({
  module: "CS2040C"
})

/*
listing.save().then(result => {
  console.log('listing saved!')
  mongoose.connection.close()
})
*/

Listing.find({module: "CS1010X"}).then(result => {
    result.forEach(listing => {
        console.log(listing)
    })
    mongoose.connection.close()
})