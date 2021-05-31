const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Listing = require('./models/listing')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)


app.get('/api/listings', (request, response) => {
  Listing.find({}).then(listings => {
    response.json(listings)
  })
})


app.post('/api/listings', (request, response) => {
  const body = request.body

  if (body.module === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const listing = new Listing({
    module: body.module
  })

  listing.save().then(savedListing => {
    response.json(savedListing)
  })
})

app.get('/api/listings/:id', (request, response) => {
  Listing.findById(request.params.id).then(note => {
    response.json(note)
  })
})

app.delete('/api/listings/:id', (request, response) => {
  const id = Number(request.params.id)
  listings = listings.filter(listing => listing.id !== id)

  response.status(204).end()
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})