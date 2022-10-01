const express = require("express");
const BookController = require("../src/controller/BookController");
const routes = express.Router();
const multer = require('../multer');

routes.post("/book", BookController.BookCreate);
routes.get("/books", BookController.GetBooks);
routes.delete("/book/:id", BookController.DeleteBook);

routes.post("/image", multer.single('image'), BookController.BookCreate);

module.exports = routes;
