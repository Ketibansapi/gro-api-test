// Important routes and packages
const fastify = require('./server.js')
const routes = require('../routes/')
const swagger = require('../config/swagger')

// Import external dependancies
const gql = require('fastify-gql')

// Import GraphQL Schema
const schema = require('../schema/index')

// First testing route
fastify.get('/', async (request, reply) => {
  return { hello: 'groo!' }
})

// Register Fastify GraphQL
fastify.register(gql, {
  schema,
  graphiql: true
})

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Declare item routes
routes.forEach((route, index) => {
  fastify.route(route)
 })
  
// Run server
const start = async () => {
  try {
    await fastify.listen(3200, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()