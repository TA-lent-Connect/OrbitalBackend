const Listing = require('../models/listing')
const User = require('../models/user')

const initialListings = [
    {
      module: 'CS1010X'
    },
    {
      module: 'CS2040C'
    },
  ]

const nonExistingId = async () => {
  const listing = new Listing({ module: 'willremovethissoon'})
  await listing.save()
  await listing.remove()

  return listing._id.toString()
}

const listingsInDb = async () => {
  const listings = await Listing.find({})
  return listings.map(listing => listing.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialListings,
  nonExistingId,
  listingsInDb,
  usersInDb,
}