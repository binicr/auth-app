// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let AirlineInformation = new Schema({
  Time: {
    type: String
  },
  Airline: {
    type: String
  },
  Flight_Number: {
    type: String
  },
  Transaction: {
    type: String
  },
  Terminal: {
    type: String
  },
  Gate: {
    type: String
  },
  Remark: {
    type: String
  }
},{
    collection: 'AirlineInfomation'
});

module.exports = mongoose.model('AirlineInformation', AirlineInformation);