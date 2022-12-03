const express = require("express");
const BookController = require("../src/controller/BookController");
const ListController = require("../src/controller/ListController");
const routes = express.Router();
const multer = require('../multer');

routes.post("/book", BookController.BookCreate);
routes.get("/books", BookController.GetBooks);

routes.delete("/book/:id", BookController.DeleteBook);

routes.delete("/title/:id", BookController.DeletTitle);

routes.post("/image", multer.single('image'), BookController.BookCreate);

routes.post('/book/title/', async (req,res) =>{
  const data = await BookController.GetByTitle (req, res);
  return data; });

//routes.get("/book/title/:title", BookController.GetByTitle);

routes.post('/book/genre/', async (req, res) => {
  const data = await BookController.ListGenre (req, res);
  return data; });

//list------------------------------------------------------
routes.post('/listbook', ListController.CreateList);
routes.get('/list', ListController.GetList);
routes.delete("/booklist/:id", ListController.DeleteBook);


module.exports = routes;
