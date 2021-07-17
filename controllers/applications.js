const jwt = require('jsonwebtoken')
const applicationsRouter = require('express').Router()
const Application = require('../models/listing')
const User = require('../models/user')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

applicationsRouter.get('/', async (request, response) => {
  const applications = await Application.find({}).populate('user', { username: 1, name: 1 })
  response.json(applications.map(application => application.toJSON()))
})

applicationsRouter.get('/:id', async (request, response, next) => {

  const application = await Application.findById(request.params.id)
  if (application) {
    response.json(application.toJSON())
  } else {
    response.status(404).end()
  }
})


applicationsRouter.post('/', async (request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const application = new Application({
    module: body.module,
    title: body.title,
    acadYear: body.acadYear,
    semester: body.semester,
    moduleCoordinator: body.moduleCoordinator,
    email: body.email,
    user: user._id,
  })

  const savedApplication = await application.save()
  user.applications = user.applications.concat(savedListing._id)
  await user.save()

  response.json(savedListing.toJSON())
})

applicationsRouter.delete('/:id', async (request, response, next) => {

  await Application.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

applicationsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const application = {
    module: body.module,
    title: body.title,
    acadYear: body.acadYear,
    semester: body.semester,
    moduleCoordinator: body.moduleCoordinator,
    email: body.email,
  }

  Application.findByIdAndUpdate(request.params.id, listing, { new: true })
    .then(updatedListing => {
      response.json(updatedListing.toJSON())
    })
    .catch(error => next(error))
})

module.exports = applicationsRouter