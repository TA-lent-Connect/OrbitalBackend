const jwt = require('jsonwebtoken')
const listingsRouter = require('express').Router()
const Listing = require('../models/listing')
const User = require('../models/user')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

listingsRouter.get('/', async (request, response) => {
  const listings = await Listing.find({}).populate('user', { username: 1, name: 1 })
  response.json(listings.map(listing => listing.toJSON()))
})

listingsRouter.get('/:id', async (request, response, next) => {

  const listing = await Listing.findById(request.params.id)
  if (listing) {
    response.json(listing.toJSON())
  } else {
    response.status(404).end()
  }
})


listingsRouter.post('/', async (request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const listing = new Listing({
    module: body.module,
    numberOfOpenings: body.numberOfOpenings,
    applicationDeadline: body.applicationDeadline,
    requirements: body.requirements,
    jobScope: body.jobScope,
    otherInfo: body.otherInfo,
    moduleCoordinators: body.moduleCoordinators,
    contactEmail: body.contactEmail,
    user: user._id
  })

  const savedListing = await listing.save()
  user.listings = user.listings.concat(savedListing._id)
  await user.save()

  response.json(savedListing.toJSON())
})

listingsRouter.delete('/:id', async (request, response, next) => {

  await Listing.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

listingsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const listing = {
    module: body.module
  }

  Listing.findByIdAndUpdate(request.params.id, listing, { new: true })
    .then(updatedListing => {
      response.json(updatedListing.toJSON())
    })
    .catch(error => next(error))
})

module.exports = listingsRouter