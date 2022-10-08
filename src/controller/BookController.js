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

  async GetByGenre (req, res) {
    try {
      const id = await req.params.genre;

      const data = await Book.find( {genre: id});

      if (data) {
        return res.status(200).json(data);
      } else {
        return res.json("o erro ");
      }
    } catch(err) {
      return res.json("o erro é " + err);
    }
  },
  async ListGenre (req, res) {
    try {
      const id = await req.body.genre;

      const data = await Book.find( {genre: id});

      if (data) {
        return res.status(200).json(data);
      } else {
        return res.json("o erro ");
      }
    } catch(err) {
      return res.json("o erro é " + err);
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

  async DeletTitle(req, res) {
    try {
      const title = req.params.title;

      const data = await Book.find({ title: title });

      if (data != null) {
        await Book.deleteOne({ title: title });
      } else {
        return res.json("Could not delete.");
      }

      return res.status(200).json("Successfully deleted!");
    } catch (err) {
      res.status(500).json({ Err: "An error has occurred " + err });
    } 
  },
};
