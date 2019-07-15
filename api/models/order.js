const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
  quantity: { type : Number, default: 1 }//if nothing is decided, it is 1 by default
});

module.exports = mongoose.model('Order', orderSchema)


//mongodb is non relationship db
