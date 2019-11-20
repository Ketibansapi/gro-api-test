const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name: String,
  level: Number,
  services: {
    type: Map,
    of: String
  }
})

module.exports = mongoose.model('Category', categorySchema)