const mongoose = require('mongoose');
const SchemaObject = {
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
};
const ProductSchema = new mongoose.Schema(SchemaObject);
const model = mongoose.model('Product', ProductSchema);

module.exports = model;
