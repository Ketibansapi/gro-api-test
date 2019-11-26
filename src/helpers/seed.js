const faker = require('faker')
const boom = require('boom')

// Import internal dependancies
const fastify = require('../server.js')

// Fake data
const items = [
	{
		name: 'Nata de Coco',
		models: ['S', 'M', 'L', 'XL']
	},
	{
		name: 'Castill Chair',
		models: ['S', 'M', 'L', 'XS']
	},
	{
		name: 'Nutella Syrup',
		models: ['X4', 'Z3', 'M2', '7']
	},
	{
		name: 'Brown Tea',
		models: ['A1', 'A3', 'A4', 'A5']
	},
	{
		name: 'Chicken Nugget',
		models: ['Fiesta', 'Focus', 'Fusion', 'Mustang']
	}
]
const serviceGarages = ['A++ Auto Services', "Gary's Garage", 'Super Service', 'iGarage', 'Best Service']

// Get Data Models
const Item = require('../models/Item')
const Maker = require('../models/Maker')
const Service = require('../models/Service')

// Fake data generation functions
const generateMakerData = () => {
	let makerData = []
	let i = 0

	while (i < 50) {
		const firstName = faker.fake('{{name.firstName}}')
		const lastName = faker.fake('{{name.lastName}}')
		const email = faker.fake(`${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`)

		const maker = {
			firstName,
			lastName,
			email
		}

		makerData.push(maker)
		i++
	}

	return makerData
}

const generateItemData = makersIds => {
	let itemData = []
	let i = 0

	while (i < 1000) {
		const maker_id = faker.random.arrayElement(makersIds)
		const itemObject = faker.random.arrayElement(items)
		const title = faker.random.arrayElement(itemObject.models)
		const price = faker.random.number({ min: 5000, max: 30000 })
		const age = faker.random.number({ min: 2, max: 10 })

		const item = {
			maker_id,
			brand: itemObject.name,
			title,
			price,
			age
		}

		itemData.push(item)
		i++
	}

	return itemData
}

const generateServiceData = itemsIds => {
	let serviceData = []
	let i = 0

	while (i < 5000) {
		const item_id = faker.random.arrayElement(itemsIds)
		const name = faker.random.arrayElement(serviceGarages)
		const date = faker.fake('{{date.past}}')

		const service = {
			item_id,
			name,
			date
		}

		serviceData.push(service)
		i++
	}

	return serviceData
}

fastify.ready().then(
	async () => {
		try {
			const makers = await Maker.insertMany(generateMakerData())
			const makersIds = makers.map(x => x._id)

			const items = await Item.insertMany(generateItemData(makersIds))
			const itemsIds = items.map(x => x._id)

			const services = await Service.insertMany(generateServiceData(itemsIds))

			console.log(`
      Data successfully added:
        - ${makers.length} makers added.
        - ${items.length} items added.
        - ${services.length} services added.
      `)
		} catch (err) {
			throw boom.boomify(err)
		}
		process.exit()
	},
	err => {
		console.log('An error occured: ', err)
		process.exit()
	}
)