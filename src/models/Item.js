const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const itemSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: String,
  quantity: Number,
  // services: {
  //   type: Map,
  //   of: String
  // }
})

module.exports = mongoose.model('Item', itemSchema)