// External Dependancies
const boom = require('boom')

// Get Data Models
const Service = require('../models/Service')

// Get single service ID
exports.getSingleService = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const service = await Service.findById(id)
		return service
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single item's services
exports.getItemsServices = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const services = await Service.find({ item_id: id })
		return services
	} catch (err) {
		throw boom.boomify(err)
	}
}