// Setup for fastify run server
const fastify = require('fastify')({
    logger: true
  })

const mongoose = require('mongoose')

// Enable the fastify CORS plugin
fastify.register(require('fastify-cors'), {
  origin: '*',
  credentials: true
})

// DB connection
const db = require('../config/keys').MongoURI;

// Connect to database
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('Database Successfully Connected..'))
.catch(err => console.log(err));

module.exports = fastify