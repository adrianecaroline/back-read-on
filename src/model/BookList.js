const mongoose = require('mongoose');

const BookList = mongoose.model('BookList', {
  title: String,
  author: String,
  pages: Number,
  year: String,
  genre: String,
  image: String
});

module.exports = BookList;