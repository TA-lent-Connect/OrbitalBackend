const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
    email: body.email,
    accountType: body.accountType,
  })

  try {
    const savedUser = await user.save()
    response.json(savedUser.toJSON())
  } catch (error) {
    return response.status(400).json({
      error: 'username already taken'
    })
  }

})

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('listings').populate('subscriptions')
    
  response.json(users.map(u => u.toJSON()))
})

usersRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const user = {
    username: body.username,
    name: body.name,
    passwordHash,
    email: body.email,
    accountType: body.accountType,
    listings: body.listings,
    subscriptions: body.subscriptions,
  }

  User.findByIdAndUpdate(request.params.id, user, {new:true})
    .then(updatedUser => {
      response.json(updatedUser.toJSON())
    })
    .catch(error => next(error))
})

module.exports = usersRouter