const jwt = require('jsonwebtoken')
const applicationsRouter = require('express').Router()
const Application = require('../models/application')
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
  console.log({token})
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
    major: body.major,
    studyYear: body.studyYear,
    otherInfo: body.otherInfo,
    fileName: body.fileName,
  })

  const savedApplication = await application.save()
  // user.applications = user.applications.concat(savedApplication._id)
  // await user.save()

  response.json(savedApplication.toJSON())
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
    major: body.major,
    studyYear: body.studyYear,
    otherInfo: body.otherInfo,
    fileName: body.fileName,
  }

  Application.findByIdAndUpdate(request.params.id, application, { new: true })
    .then(updatedApplication => {
      response.json(updatedApplication.toJSON())
    })
    .catch(error => next(error))
})

module.exports = applicationsRouter