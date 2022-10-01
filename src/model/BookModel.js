const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
  title: String,
  author: String,
  pages: Number,
  year: String,
  genre: String,
  image: String
});

module.exports = Book;