// Setup the server to test run fastify
const fastify = require('fastify')({
    logger: true
  })
const mongoose = require('mongoose')
const routes = require('../routes/')
const swagger = require('../config/swagger')

// DB connection
const db = require('../config/keys').MongoURI;

// Connect to database
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Declare item routes
routes.forEach((route, index) => {
  fastify.route(route)
 })
  
// First testing route
fastify.get('/', async (request, reply) => {
  return { hello: 'groo!' }
})

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
  
// Run server
const start = async () => {
  try {
    await fastify.listen(3200)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()