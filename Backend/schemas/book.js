var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  account: String,
  titulo : String,
  editorial : String,
  ano : String,
  autor: String
});

module.exports = mongoose.model('Book', bookSchema);
