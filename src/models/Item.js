const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: String,
  quantity: Number,
  services: {
    type: Map,
    of: String
  }
})

module.exports = mongoose.model('Item', itemSchema)