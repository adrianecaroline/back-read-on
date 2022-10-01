const Book = require("../model/BookModel");

module.exports = {
  async GetBooks(req, res) {
    try {
      const data = await Book.find({});

      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ Err: "Could not get" + err });
    }
  },

  async BookCreate(req, res) {
    const { title, author, pages, year, genre, image } = req.body;
    const book = { title, author, pages, year, genre, image };

    try {
      await Book.create(book);

      res.status(201).json({ message: "Book registered successfully" });
    } catch (err) {
      res.status(500).json({ Err: "Could not register" + err });
    }
  },

  async DeleteBook(req, res) {
    try {
      const id = req.params.id;

      const book = await Book.findById({ _id: id });

      if (book != null) {
        await Book.deleteOne({ _id: id });
      } else {
        return res.json("Could not delete.");
      }

      return res.status(200).json("Successfully deleted!");
    } catch (err) {
      res.status(500).json({ Err: "An error has occurred " + err });
    }
  },
};
