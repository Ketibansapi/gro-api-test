// Setup the server to test run fastify

const fastify = require('fastify')({
    logger: true
  })
const mongoose = require('mongoose')

// DB connection
const db = require('../config/keys').MongoURI;

// Connect to database
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
  
  // First testing route
  fastify.get('/', async (request, reply) => {
    return { hello: 'groo!' }
  })
  
  // Run server
  const start = async () => {
    try {
      await fastify.listen(3200)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()