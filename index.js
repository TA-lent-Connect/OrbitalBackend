const express = require('express')
const app = express()
const cors = require('cors')

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

let listings = [
  {
    id: 1,
    module: "CS1010X"
  },
  {
    id: 2,
    module: "CS2040C"
  },
  {
    id: 3,
    module: "CS2113T"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>TA-lent Connect</h1>')
})

app.get('/api/listings', (req, res) => {
  res.json(listings)
})

const generateId = () => {
  const maxId = listings.length > 0
    ? Math.max(...listings.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/listings', (request, response) => {
  const body = request.body

  if (!body.module) {
    return response.status(400).json({ 
      error: 'module missing' 
    })
  }

  const listing = {
    module: body.module,
    id: generateId(),
  }

  listings = listings.concat(listing)

  response.json(listing)
})

app.get('/api/listings/:id', (request, response) => {
  const id = Number(request.params.id)
  const listing = listings.find(listing => listing.id === id)

  if (listing) {
    response.json(listing)
  } else {
    response.status(404).end()
  }
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})