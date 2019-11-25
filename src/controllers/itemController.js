// boom to provides a set of utilities for returning HTTP errors.
const boom = require('boom')

// Get items Models
const Item = require('../models/Item')

// Get all items
exports.getItems = async () => {
  try {
    const items = await Item.find()
    return items
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get item by ID
exports.getSingleItem = async req => {
  try {
    const id = req.params === undefined ? req.id : req.params.id
    const item = await Item.findById(id)
    return item
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add new item
exports.addItem = async req => {
  try {
    const item = new Item(req)
    const newItem = await item.save()
    return newItem
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing item
exports.updateItem = async (req, reply) => {
  try {
    const id = req.params.id
    const item = req.body
    const { ...updateData } = item
    const update = await Item.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a item
exports.deleteItem = async (req, reply) => {
  try {
    const id = req.params.id
    const item = await Item.findByIdAndRemove(id)
    return item
  } catch (err) {
    throw boom.boomify(err)
  }
}