const { Schema, model } = require('../connection');

const myschema = new Schema({
  name: String,
  category: String,
  material: String,
  price: Number,
  image: String,
  email: String,
  password: String,
  color: String,
  art: String
});
  


module.exports = model('Handicraft', myschema);