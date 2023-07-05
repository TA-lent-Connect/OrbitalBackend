const uploadsRouter = require('express').Router()
const Upload = require('../models/upload')
const mongodb = require('mongodb')
const binary = mongodb.Binary
const fs = require('fs')
//const FileReader = require('filereader')
const multer = require('multer')
const multerUpload = multer()


uploadsRouter.get('/:id', async (request, response, next) => {
  const uploads = await Upload.find({});

  const file = uploads.filter(upload => (upload.name === request.params.id))

  // var DOWNLOAD_DIR = path.join(process.env.HOME || process.env.USERPROFILE, 'downloads/');
  // var file_path = path.join(DOWNLOAD_DIR,file.name);

  fs.writeFileSync(file[0].name, file[0].file);

  // response.json(file[0].file)
})

uploadsRouter.get('/', async (request, response) => {
  const uploads = await Upload.find({})
  console.log(uploads)
  response.json(uploads)
})

uploadsRouter.post('/', multerUpload.single('file'), async (request, response, next) => {
  const body = request.body
  console.log(body)
  console.log(request.file)

  //   var buffer = {};

  const upload = new Upload({
    name: body.name,
    file: request.file.buffer,
  })
  const savedUpload = await upload.save()
  response.json(savedUpload.toJSON())


  // var promise = new Promise(getBuffer(request.file));
  // promise.then(async function(data) {
  //     const upload = new Upload({
  //         name: body.name,
  //         file: data,
  //       })
  //       const savedUpload = await upload.save()
  //       response.json(savedUpload.toJSON())
  // })

  // function getBuffer(file) {
  //     return function(resolve) {
  //     var reader = new FileReader();

  //     reader.onload = function(e) {
  //         console.log(e.target.result)
  //         var arrayBuffer = reader.result;
  //         buffer = Buffer.from(arrayBuffer, 'base64')
  //         resolve(buffer)
  //     }
  //     reader.readAsArrayBuffer(file);
  //     }
  // }


  // user.applications = user.applications.concat(savedApplication._id)
  // await user.save()




  // //   const data = await fs.readFile(body.file)
  //   const data = request.file;
  //   const base64 = data.toString('base64');
  //   console.log(base64)

  //   const buffer = Buffer.alloc(base64, 'base64')

  // const buffer = Buffer.from(body.file, 'base64')

  // const data = fileReader.readAsArrayBuffer(request.file)






})

module.exports = uploadsRouter

// const uploadsRouter = require('express').Router()
// const mongodb = require('mongodb')
// const fs = require('fs')
// const config = require('../utils/config')
// const Upload = require('../models/upload')


// const mongoClient = mongodb.MongoClient
// const binary = mongodb.Binary

// uploadsRouter.get("/", (req, res) => {
//     getFiles(res)
//     console.log('ello')
// })

// uploadsRouter.post("/", async (req, res) => {
//     console.log(body.name)
//     // const uploadFile = {name: req.body.name, file: binary(req.files.uploadFile.data)};
//     // Upload.insertOne(uploadFile)
//     // res.json(file.toJSON())
//     const uploadFile = new Upload(
//         {name: body.name, file: binary(body.data)}
//     )
//     const savedUpload = await uploadFile.save()
//     res.json(file.toJSON())
// })

// // function insertFile(file, res) {
// //     mongoClient.connect(config.MONGODB_URI, { useNewUrlParser: true }, (err, client) => {
// //         if (err) {
// //             return err
// //         }
// //         else {
// //             let db = client.db('modulelistings')
// //             let collection = db.collection('files')
// //             try {
// //                 collection.insertOne(file)
// //                 console.log('File Inserted')
// //             }
// //             catch (err) {
// //                 console.log('Error while inserting:', err)
// //             }
// //             client.close()
// //             res.redirect('/')
// //         }

// //     })
// // }

// function insertFile(file, res) {
//     let collection = db.collection('files')

// }

// function getFiles(res) {
//     mongoClient.connect(config.MONGODB_URI, { useNewUrlParser: true }, (err, client) => {
//         if (err) {
//             return err
//         }
//         else {
//             let db = client.db('modulelistings')
//             let collection = db.collection('files')
//             collection.find({}).toArray((err, doc) => {
//                 if (err) {
//                     console.log('err in finding doc:', err)
//                 }
//                 else {
//                     let buffer = doc[0].file.buffer
//                     fs.writeFileSync('uploadedImage.jpg', buffer)
//                 }
//             })
//             client.close()
//             res.redirect('/')
//         }

//     })
// }


// module.exports = uploadsRouter


// // const multer = require('multer')
// // const path = require('path')
// // const fs = require('fs')
// // const mongoose = require('mongoose')
// // const { MongoMemoryServer } = require('mongodb-memory-server')

// // const GridFile = require('../models/upload')
// // const upload = multer({ dest: path.join(__dirname, '.') })

// // const port = 5000

// // // upload a file
// // uploadsRouter.post('/v1/files', upload.any(), async (req, res, nxt) => {
// //   try {
// //     // uploaded file are accessible as req.files
// //     if (req.files) {
// //       const promises = req.files.map(async (file) => {
// //         const fileStream = fs.createReadStream(file.path)

// //         // upload file to gridfs
// //         const gridFile = new GridFile({ filename: file.originalname })
// //         await gridFile.upload(fileStream)

// //         // delete the file from local folder
// //         fs.unlinkSync(file.path)
// //       })

// //       await Promise.all(promises)
// //     }

// //     res.sendStatus(201)
// //   } catch (err) {
// //     nxt(err)
// //   }
// // })

// // // list all uploaded files
// // uploadsRouter.get('/v1/files', async (req, res, nxt) => {
// //   try {
// //     const files = await GridFile.find({})

// //     res.json(files)

// //     /* sample response
// //       [
// //         {
// //           "aliases": [],
// //           "_id": "5f6850023516552ad21d0007",
// //           "length": 7945,
// //           "chunkSize": 261120,
// //           "uploadDate": "2020-09-21T07:02:26.389Z",
// //           "filename": "attachment.pdf",
// //           "md5": "fa7d7e650b2cec68f302b31ba28235d8"
// //         }
// //       ]
// //     */
// //   } catch (err) {
// //     nxt(err)
// //   }
// // })

// // // download a file
// // uploadsRouter.get('/v1/files/:id/:name', async (req, res, nxt) => {
// //   try {
// //     const { id, name } = req.params

// //     const gridFile = await GridFile.findById(id)

// //     if (gridFile) {
// //       res.attachment(name)
// //       gridFile.downloadStream(res)
// //     } else {
// //       // file not found
// //       res.status(404).json({ error: 'file not found' })
// //     }
// //   } catch (err) {
// //     nxt(err)
// //   }
// // })

// // uploadsRouter.listen(port, async () => {
// //   console.log(`Listening at http://localhost:${port}`)

// //   // setup mongo in-memory database
// //   const mongodb = new MongoMemoryServer()
// //   const connectionUri = await mongodb.getUri()
// //   await mongoose.connect(
// //     connectionUri, { useNewUrlParser: true, useUnifiedTopology: true }
// //   )
// // })