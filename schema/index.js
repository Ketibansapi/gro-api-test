// Import External Dependancies
const graphql = require('graphql')

// Destructure GraphQL functions
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList,
	GraphQLNonNull
} = graphql

// Import Controllers
const itemController = require('../src/controllers/itemController')
const makerController = require('../src/controllers/makerController')
const serviceController = require('../src/controllers/serviceController')

// Define Object Types
const itemType = new GraphQLObjectType({
	name: 'Item',
	fields: () => ({})
})

const makerType = new GraphQLObjectType({
	name: 'Maker',
	fields: () => ({})
})

const serviceType = new GraphQLObjectType({
	name: 'Service',
	fields: () => ({})
})

// Define Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		item: {},
		items: {},
		maker: {},
		service: {}
	}
})

// Define Mutations
const Mutations = new GraphQLObjectType({
	name: 'Mutations',
	fields: {
		addItem: {
			type: itemType,
			args: {},
			async resolve(args) {
				return ''
			}
		},
		editItem: {
			type: itemType,
			args: {},
			async resolve(args) {
				return ''
			}
		},
		deleteItem: {
			type: itemType,
			args: {},
			async resolve(args) {
				return ''
			}
		}
	}
})

// Export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
})