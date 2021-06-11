const router = require('express').Router()
const Listing = require('../models/listing')
const User = require('../models/user')

router.post('/reset', async (request, response) => {
  await Listing.deleteMany({})
  await User.deleteMany({})

  response.status(204).end()
})

module.exports = router