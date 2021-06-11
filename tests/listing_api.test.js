const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Listing = require('../models/listing')

describe('when there is initially some listings saved', () => {
  
  beforeEach(async () => {
    await Listing.deleteMany({})
    await Listing.insertMany(helper.initialListings)
  })

  test('listings are returned as json', async () => {
    await api
      .get('/api/listings')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all listings are returned', async () => {
    const response = await api.get('/api/listings')

    expect(response.body).toHaveLength(helper.initialListings.length)
  })

  test('a specific listing is within the returned listings', async () => {
    const response = await api.get('/api/listings')

    const modules = response.body.map(r => r.module)
    expect(modules).toContain(
      'CS1010X'
    )
  })

  describe('viewing a specific listing', () => {

    test('succeeds with a valid id', async () => {
      const listingsAtStart = await helper.listingsInDb()

      const listingToView = listingsAtStart[0]

      const resultListing = await api
        .get(`/api/listings/${listingToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
      
      const processedListingToView = JSON.parse(JSON.stringify(listingToView))

      expect(resultListing.body).toEqual(processedListingToView)
    })

    test('fails with statuscode 404 if listing does not exist', async () => {
      const validNonexistingId = await helper.nonExistingId()

      await api
        .get(`/api/listings/${validNonexistingId}`)
        .expect(404)
    })

    test('fails with statuscode 400 id is invalid', async () => {
      const invalidId = '5a3d5da59070081a82a3445'

      await api
        .get(`/api/listings/${invalidId}`)
        .expect(400)
    })
  })

  describe('addition of a new listing', () => {

    test('succeeds with valid data', async () => {
      const newListing = {
        module: 'CS2113T'
      }

      await api
        .post('/api/listings')
        .send(newListing)
        .expect(200)
        .expect('Content-Type', /application\/json/)


      const listingsAtEnd = await helper.listingsInDb()
      expect(listingsAtEnd).toHaveLength(helper.initialListings.length + 1)

      const modules = listingsAtEnd.map(n => n.module)
      expect(modules).toContain(
        'CS2113T'
      )
    })

    test('fails with status code 400 if data invalid', async () => {
      const newListing = {
      }

      await api
        .post('/api/listings')
        .send(newListing)
        .expect(400)

      const listingsAtEnd = await helper.listingsInDb()

      expect(listingsAtEnd).toHaveLength(helper.initialListings.length)
    })
  })

  describe('deletion of a listing', () => {

    test('succeeds with status code 204 if id is valid', async () => {
      const listingsAtStart = await helper.listingsInDb()
      const listingToDelete = listingsAtStart[0]

      await api
        .delete(`/api/listings/${listingToDelete.id}`)
        .expect(204)

      const listingsAtEnd = await helper.listingsInDb()

      expect(listingsAtEnd).toHaveLength(
        helper.initialListings.length - 1
      )

      const modules = listingsAtEnd.map(r => r.module)

      expect(modules).not.toContain(listingToDelete.module)
    })
  })
})

describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })  
})

afterAll(() => {
  mongoose.connection.close()
})