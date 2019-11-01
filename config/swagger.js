exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Groo Fastify API',
        description: 'Creating Groo API using swagger for clean documentation',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  }