const {Schema, model} = require ('../connection');

const myschema = new Schema({
  email: String,
  name: String,
  contact: Number,
  password: String
});

module.exports = model('user', myschema);