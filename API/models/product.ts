// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let ProductInfo = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  imagePath: {
    type: String
  },
  description: {
    type: String
  }
 
  
},{
    collection: 'tasks'
});

module.exports = mongoose.model('task', ProductInfo);