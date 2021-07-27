const config = require('./utils/config')
const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const app = express()
require('express-async-errors')
const cors = require('cors')
const applicationsRouter = require('./controllers/applications')
const listingsRouter = require('./controllers/listings')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const uploadsRouter = require('./controllers/uploads')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const multer  = require('multer')
const upload = multer()
// const fileUpload = require('express-fileupload')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
// app.use(fileUpload())

app.use(express.json({ limit: '200mb' }))

app.use('/api/uploads', uploadsRouter)
app.use('/api/applications', applicationsRouter)
app.use('/api/listings', listingsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)




app.use(express.static(path.join(__dirname, 'build')));

app.get('/uploads', upload.single('file'), function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/signin', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/applications', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/listings', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/mymodules/createnewlisting', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/mymodules/editlisting', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/apply/createnewapplication', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/apply/editapplication', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/mymodules', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/modules', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});





app.listen(5000);
console.log('Server is listening on http://localhost:5000');
app.use(middleware.requestLogger)



if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app