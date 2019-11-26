// External Dependancies
const boom = require('boom')

// Get Data Models
const Maker = require('../models/Maker')
const Item = require('../models/Item')

// Get all makers
exports.getMaker = async () => {
	try {
		const makers = await Maker.find()
		return makers
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single maker by ID
exports.getSingleMaker = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const maker = await Maker.findById(id)
		return maker
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single maker's items
exports.getMakersItems = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const items = await Item.find({ maker_id: id })
		return items
	} catch (err) {
		throw boom.boomify(err)
	}
}