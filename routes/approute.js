const express = require("express");
const BookController = require("../src/controller/BookController");
const routes = express.Router();
const multer = require('../multer');

routes.post("/book", BookController.BookCreate);
routes.get("/books", BookController.GetBooks);
routes.delete("/book/:id", BookController.DeleteBook);

routes.delete("/title/:id", BookController.DeletTitle);

routes.post("/image", multer.single('image'), BookController.BookCreate);

routes.get('/book/genre/:genre', BookController.GetByGenre);


routes.post('/book/genre/', async (req, res) => {
  const data = await BookController.ListGenre (req, res);
  return data; });

module.exports = routes;
