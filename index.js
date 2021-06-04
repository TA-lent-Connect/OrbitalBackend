const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Listing = require('./models/listing')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }

  next(error)
}

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

  listing
    .save()
    .then(savedListing => savedListing.toJSON())
    .then(formattedListing => {
      response.json(formattedListing)
    })
    .catch(error => next(error))
})

app.get('/api/listings/:id', (request, response, next) => {
  Listing.findById(request.params.id).then(note => {
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => {
    next(error)
  })
})

app.delete('/api/listings/:id', (request, response) => {
  Listing.findByIdAndRemove(request.params.id).then(result => {
    response.status(204).end()
  })
  .catch(error => {
    next(error)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})