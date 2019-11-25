const mongoose = require('mongoose')

const makerSchema = new mongoose.Schema({
	firstCompanyName: String,
    lastCompanyName: String,
    locationBased: String,
	email: String
})

module.exports = mongoose.model('Maker', makerSchema)