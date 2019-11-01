// Import Item Controllers
const itemController = require('../src/controllers/itemController')

const routes = [
  {
    method: 'GET',
    url: '/api/items',
    handler: itemController.getItems
  },
  {
    method: 'GET',
    url: '/api/items/:id',
    handler: itemController.getSingleItem
  },
  {
    method: 'POST',
    url: '/api/items',
    handler: itemController.addItem,
    schema: itemController.addItemSchema
  },
  {
    method: 'PUT',
    url: '/api/items/:id',
    handler: itemController.updateItem
  },
  {
    method: 'DELETE',
    url: '/api/items/:id',
    handler: itemController.deleteItem
  }
]

module.exports = routes